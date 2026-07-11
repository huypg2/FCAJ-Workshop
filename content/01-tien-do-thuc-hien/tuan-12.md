---
title: "Worklog Tuần 12"
date: 2026-07-03
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---
{{% notice warning %}}
⚠️ **Lưu ý:** Nội dung dưới đây chỉ dùng để tham khảo cách trình bày. Không nên sao chép nguyên văn vào báo cáo chính thức.
{{% /notice %}}

### Mục tiêu tuần 12:

* Kiểm tra toàn bộ hệ thống sau khi triển khai trên AWS, từ tầng truy cập đến tầng xử lý và tầng dữ liệu.
* Xây dựng các kịch bản kiểm thử cho chức năng chính, idempotency, xử lý đồng thời, rate limiting và khả năng chịu lỗi.
* Thực hiện kiểm thử tải để quan sát độ trễ, thông lượng, tỷ lệ lỗi và mức sử dụng tài nguyên của ECS, RDS, Redis.
* Tối ưu các thông số vận hành, hoàn thiện tài liệu dự án và dọn dẹp tài nguyên AWS sau khi kết thúc kiểm thử.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 03/07/2026 | - Kiểm tra trạng thái hệ thống sau triển khai<br>&emsp; + Kiểm tra API Gateway, VPC Link, Internal ALB, target group và ECS task<br>&emsp; + Xem log khởi động của các service trên CloudWatch<br>&emsp; + Xác nhận service kết nối được với RDS PostgreSQL và ElastiCache Redis | 03/07/2026 | 03/07/2026 | AWS Console, CloudWatch Logs |
| 04/07/2026 | - Kiểm tra các luồng nghiệp vụ chính<br>&emsp; + Gửi request tạo tài khoản và kiểm tra số dư ban đầu<br>&emsp; + Gửi request tạo payment qua API Gateway<br>&emsp; + Tra cứu trạng thái payment và transaction để kiểm tra dữ liệu sau xử lý | 04/07/2026 | 04/07/2026 | Kịch bản kiểm thử API |
| 05/07/2026 | - Kiểm thử idempotency và tính nhất quán dữ liệu<br>&emsp; + Gửi lại request payment với cùng idempotencyKey<br>&emsp; + Kiểm tra transactionId tại Account Service để bảo đảm không debit lặp<br>&emsp; + Thử payload khác với cùng key để xác nhận hệ thống từ chối request không hợp lệ | 05/07/2026 | 05/07/2026 | Payment Service, Account Service |
| 06/07/2026 | - Kiểm thử xử lý đồng thời và rate limiting<br>&emsp; + Gửi nhiều request song song vào API tạo thanh toán<br>&emsp; + Quan sát vai trò của Redis lock và state machine trong việc chống xử lý trùng<br>&emsp; + Kiểm tra giới hạn request theo userId và phản hồi khi vượt ngưỡng | 06/07/2026 | 06/07/2026 | Redis, API Gateway |
| 07/07/2026 | - Kiểm thử tình huống lỗi và khả năng phục hồi<br>&emsp; + Mô phỏng Account Service phản hồi chậm hoặc tạm thời không ổn định<br>&emsp; + Quan sát retry, circuit breaker và cách payment giữ trạng thái trong lúc chờ xử lý<br>&emsp; + Kiểm tra log để xác định nguyên nhân lỗi và trace luồng request | 07/07/2026 | 07/07/2026 | Resilience4j, CloudWatch |
| 08/07/2026 | - Thực hiện kiểm thử tải và theo dõi tài nguyên<br>&emsp; + Tăng dần số lượng request để đo latency, throughput và error rate<br>&emsp; + Theo dõi CPU, memory, số lượng ECS task, database connection và Redis metric<br>&emsp; + Ghi nhận điểm nghẽn hoặc cấu hình chưa phù hợp trong quá trình chạy tải | 08/07/2026 | 08/07/2026 | CloudWatch, công cụ kiểm thử tải |
| 09/07/2026 | - Tối ưu, tổng hợp kết quả và dọn dẹp tài nguyên<br>&emsp; + Điều chỉnh timeout, retry, rate limit, CPU/memory và scaling policy theo kết quả kiểm thử<br>&emsp; + Cập nhật sơ đồ kiến trúc, worklog, báo cáo kiểm thử và phần tổng kết dự án<br>&emsp; + Rà soát, tắt hoặc xóa các tài nguyên AWS không còn cần dùng để tránh phát sinh chi phí | 09/07/2026 | 09/07/2026 | Báo cáo kiểm thử, tài liệu dự án |

### Kết quả đạt được tuần 12:

* Kiểm tra được hệ thống sau khi triển khai trên AWS theo luồng end-to-end. Request đi từ API Gateway qua VPC Link, đến Internal ALB, sau đó được chuyển đến đúng ECS Service đang chạy trong private subnets.

* Xác nhận được các service chính hoạt động trên ECS Fargate và có log tập trung trên CloudWatch. Việc theo dõi log giúp kiểm tra quá trình khởi động service, lỗi kết nối, lỗi xử lý request và trạng thái health check.

* Kiểm tra được kết nối đến RDS PostgreSQL và ElastiCache Redis trong môi trường triển khai. Các service có thể lưu và truy vấn dữ liệu nghiệp vụ, đồng thời sử dụng Redis cho các chức năng cần tốc độ phản hồi nhanh.

* Thực hiện được các luồng nghiệp vụ chính của hệ thống thanh toán, gồm tạo tài khoản, kiểm tra số dư, tạo payment và tra cứu giao dịch. Dữ liệu sau xử lý được ghi nhận đúng ở các thành phần liên quan.

* Xác nhận cơ chế idempotency hoạt động đúng khi request được gửi lặp lại. Payment Service không tạo thêm giao dịch mới nếu idempotencyKey và payload trùng khớp với request trước đó.

* Kiểm tra được cơ chế chống debit trùng ở Account Service. Khi transactionId đã được xử lý với dữ liệu hợp lệ, request lặp lại không làm thay đổi số dư lần thứ hai.

* Phát hiện và xử lý được trường hợp request dùng lại key nhưng thay đổi nội dung. Hệ thống từ chối các request này để tránh nhầm lẫn giữa hai giao dịch khác nhau và bảo vệ tính nhất quán dữ liệu.

* Đánh giá được khả năng xử lý đồng thời của hệ thống. Redis lock, state machine và thao tác cập nhật có điều kiện giúp giảm nguy cơ nhiều request cùng xử lý một payment.

* Kiểm tra được rate limiting theo userId tại API Gateway. Khi số lượng request vượt quá ngưỡng cho phép, hệ thống phản hồi giới hạn lưu lượng thay vì tiếp tục đẩy toàn bộ tải xuống các service phía sau.

* Quan sát được hoạt động của retry và circuit breaker khi service phụ thuộc phản hồi chậm hoặc có lỗi tạm thời. Cách xử lý này giúp hệ thống tránh gọi lặp liên tục và hạn chế việc đánh dấu sai trạng thái thanh toán.

* Thực hiện được kiểm thử tải ở mức cơ bản, theo dõi các chỉ số như latency, throughput, error rate, CPU, memory, database connection, Redis metric và số lượng task đang chạy.

* Dựa trên kết quả kiểm thử, điều chỉnh được một số cấu hình vận hành như timeout, retry, rate limit, tài nguyên container và chính sách scaling để hệ thống ổn định hơn khi tải tăng.

* Hoàn thiện được tài liệu cuối kỳ gồm sơ đồ kiến trúc AWS, mô tả luồng triển khai, kịch bản kiểm thử, kết quả kiểm thử, worklog song ngữ và phần tổng kết quá trình thực hiện.

* Rà soát lại tài nguyên AWS sau khi kiểm thử, tắt hoặc xóa các tài nguyên không còn cần thiết. Việc này giúp hạn chế chi phí phát sinh và hình thành thói quen quản lý tài nguyên Cloud cẩn thận hơn.
