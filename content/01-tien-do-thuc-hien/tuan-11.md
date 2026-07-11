---
title: "Worklog Tuần 11"
date: 2026-06-26
description: "Web Apps, môi trường Windows HA và workshop tổng hợp"
---

# Tuần 11: Web Apps, môi trường Windows HA và workshop tổng hợp

**Thời gian:** 26/06/2026 - 02/07/2026

### Mục tiêu tuần 11:

* Hoàn thiện các thành phần chính của hệ thống thanh toán, đặc biệt là Payment Service, idempotency và xử lý trạng thái giao dịch.
* Kiểm soát tình huống nhiều request gửi đồng thời bằng Redis lock, cập nhật trạng thái có điều kiện và kiểm tra dữ liệu trùng lặp.
* Kết nối Payment Service với Account Service, đồng thời bổ sung cơ chế timeout, retry và circuit breaker để giảm lỗi khi các service giao tiếp với nhau.
* Rà soát API Gateway, rate limiting theo người dùng và chuẩn bị kiến trúc triển khai AWS cho giai đoạn kiểm thử tải.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 27/06/2026 | - Hoàn thiện mô hình dữ liệu và API của Payment Service<br>&emsp; + Xây dựng entity thanh toán, API tạo thanh toán và API tra cứu trạng thái<br>&emsp; + Kiểm tra các trường quan trọng như userId, accountId, amount, currency và idempotencyKey<br>&emsp; + Bổ sung ràng buộc dữ liệu để hạn chế tạo trùng giao dịch | 27/06/2026 | 27/06/2026 | Mã nguồn Payment Service |
| 28/06/2026 | - Triển khai cơ chế idempotency cho Payment Service<br>&emsp; + Kiểm tra request gửi lại cùng idempotencyKey<br>&emsp; + So sánh payload của request cũ và request mới trước khi trả kết quả<br>&emsp; + Từ chối trường hợp dùng lại key nhưng dữ liệu giao dịch không giống nhau | 28/06/2026 | 28/06/2026 | Spring Boot, PostgreSQL |
| 29/06/2026 | - Xây dựng state machine cho quy trình thanh toán<br>&emsp; + Áp dụng luồng trạng thái PENDING, PROCESSING, SUCCESS và FAILED<br>&emsp; + Dùng cập nhật có điều kiện để chỉ một request được quyền xử lý payment<br>&emsp; + Ngăn việc nhiều tiến trình cùng gọi debit cho một giao dịch | 29/06/2026 | 29/06/2026 | Spring Data JPA, PostgreSQL |
| 30/06/2026 | - Bổ sung Redis distributed lock cho xử lý đồng thời<br>&emsp; + Khóa theo idempotencyKey trong thời gian ngắn để giảm cạnh tranh khi nhiều request vào cùng lúc<br>&emsp; + Thiết lập TTL để tránh lock bị giữ vĩnh viễn khi service gặp lỗi<br>&emsp; + Giải phóng lock an toàn bằng cách kiểm tra giá trị lock trước khi xóa | 30/06/2026 | 30/06/2026 | Redis documentation |
| 01/07/2026 | - Tích hợp Payment Service với Account Service<br>&emsp; + Gọi API debit thông qua OpenFeign và truyền mã giao dịch để Account Service xử lý idempotency<br>&emsp; + Cấu hình timeout để tránh treo request quá lâu khi service đích phản hồi chậm<br>&emsp; + Phân biệt lỗi nghiệp vụ và lỗi tạm thời trong quá trình ghi nợ tài khoản | 01/07/2026 | 01/07/2026 | OpenFeign, Resilience4j |
| 02/07/2026 | - Hoàn thiện API Gateway và rate limiting<br>&emsp; + Định tuyến request đến Account Service, Payment Service và Transaction Service<br>&emsp; + Áp dụng token bucket bằng Redis Lua Script để giới hạn lưu lượng theo userId<br>&emsp; + Kiểm tra phản hồi khi vượt giới hạn và fallback khi thiếu thông tin người dùng | 02/07/2026 | 02/07/2026 | Mã nguồn API Gateway |
| 03/07/2026 | - Kiểm tra tích hợp local và chuẩn bị kiến trúc AWS<br>&emsp; + Chạy PostgreSQL, Redis và các microservice bằng cấu hình thống nhất<br>&emsp; + Kiểm tra health endpoint, routing qua gateway và luồng Payment Service gọi Account Service<br>&emsp; + Rà soát sơ đồ triển khai AWS gồm API Gateway, VPC Link, Internal ALB, ECS Fargate, RDS và Redis | 03/07/2026 | 03/07/2026 | Docker Compose, tài liệu kiến trúc AWS |

### Kết quả đạt được tuần 11:

* Hoàn thiện được Payment Service theo hướng an toàn hơn cho hệ thống thanh toán chịu tải cao. Service đã có API tạo thanh toán, API tra cứu trạng thái, mô hình dữ liệu rõ ràng và các kiểm tra cơ bản cho amount, currency, userId, accountId và idempotencyKey.

* Xây dựng được cơ chế idempotency nhiều lớp nhằm hạn chế tình trạng tạo trùng giao dịch. Ở tầng cơ sở dữ liệu, idempotencyKey được kiểm soát bằng ràng buộc duy nhất; ở tầng xử lý, request gửi lại được kiểm tra payload trước khi trả về trạng thái hiện tại của payment.

* Hiểu và áp dụng được state machine cho quy trình thanh toán. Giao dịch không được cập nhật trạng thái tùy ý mà phải đi theo luồng hợp lệ từ PENDING sang PROCESSING, sau đó mới kết thúc ở SUCCESS hoặc FAILED.

* Triển khai được cơ chế claim quyền xử lý bằng cập nhật có điều kiện trong PostgreSQL. Cách làm này giúp chỉ một request giành được quyền xử lý payment, từ đó tránh việc nhiều tiến trình cùng gọi Account Service và ghi nợ tài khoản nhiều lần.

* Bổ sung Redis distributed lock để giảm xung đột khi có nhiều request đồng thời dùng chung idempotencyKey. Lock được thiết kế có TTL và kiểm tra giá trị trước khi xóa, giúp hạn chế lỗi xóa nhầm lock của request khác.

* Tích hợp Payment Service với Account Service thông qua OpenFeign. Payment Service có thể gửi yêu cầu debit kèm transactionId, còn Account Service chịu trách nhiệm bảo đảm một giao dịch hợp lệ không bị ghi nợ lặp lại.

* Cấu hình được timeout, retry và circuit breaker cho quá trình giao tiếp giữa các service. Những lỗi tạm thời không bị xử lý vội thành thất bại cuối cùng, giúp tránh trường hợp tài khoản đã bị trừ tiền nhưng payment lại bị đánh dấu FAILED không chính xác.

* Hoàn thiện API Gateway ở mức cơ bản, các route chính được gom qua một cổng truy cập chung. Rate limiting theo userId được xử lý bằng Redis Lua Script để bảo đảm thao tác kiểm tra và cập nhật token diễn ra nguyên tử.

* Kiểm tra được luồng chạy local của hệ thống gồm API Gateway, Payment Service, Account Service, Transaction Service, PostgreSQL và Redis. Các lỗi cấu hình môi trường, kết nối database hoặc schema được rà soát để chuẩn bị cho triển khai AWS.

* Hoàn thiện định hướng kiến trúc AWS cho hệ thống thanh toán chịu tải cao, trong đó API Gateway kết nối vào mạng riêng qua VPC Link, Internal ALB phân phối request đến ECS Fargate, RDS PostgreSQL lưu dữ liệu và ElastiCache Redis phục vụ cache, lock, rate limit.
