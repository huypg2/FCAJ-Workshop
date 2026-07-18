---
title: "Worklog Tuần 10"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.10. </b> "
---
{{% notice warning %}}
⚠️ **Lưu ý:** Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /notice %}}


### Tuần 10: Tạo VPC, subnet, security group và Amazon RDS PostgreSQL

### Mục tiêu tuần 10:

* Xây dựng lớp mạng AWS cho hệ thống triển khai.
* Tạo subnet, route table và thiết lập đường đi mạng phù hợp.
* Cấu hình security group để kiểm soát kết nối giữa các tầng.
* Tạo Amazon RDS PostgreSQL và khởi tạo database phục vụ ứng dụng.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 22/06/2026 | - Tạo VPC riêng cho hệ thống triển khai<br>&emsp; + Xác định CIDR block phù hợp cho VPC<br>&emsp; + Tạo VPC trên AWS Console<br>&emsp; + Kiểm tra trạng thái VPC và chuẩn bị cấu hình mạng cho các tầng phía sau | 22/06/2026 | 22/06/2026 | Amazon VPC |
| 23/06/2026 | - Tạo subnet và cấu hình route table<br>&emsp; + Tạo các subnet theo Availability Zone để tăng tính sẵn sàng<br>&emsp; + Phân tách subnet cho tầng truy cập, tầng ứng dụng và tầng dữ liệu<br>&emsp; + Kiểm tra liên kết route table để bảo đảm luồng mạng đi đúng hướng | 23/06/2026 | 23/06/2026 | VPC Subnet và Route Table |
| 24/06/2026 | - Thiết kế security group cho từng thành phần<br>&emsp; + Tạo security group cho Load Balancer nhận request<br>&emsp; + Tạo security group cho ECS Service để nhận traffic từ Load Balancer<br>&emsp; + Tạo security group cho RDS và chỉ cho phép truy cập từ tầng ứng dụng | 24/06/2026 | 24/06/2026 | Security Groups |
| 25/06/2026 | - Tạo DB Subnet Group và Amazon RDS PostgreSQL<br>&emsp; + Chọn subnet phù hợp cho tầng database<br>&emsp; + Tạo RDS instance sử dụng PostgreSQL<br>&emsp; + Cấu hình database name, username, password, port và thông số kết nối | 25/06/2026 | 25/06/2026 | Amazon RDS PostgreSQL |
| 26/06/2026 | - Khởi tạo database và kiểm tra kết nối<br>&emsp; + Kiểm tra endpoint và port của RDS sau khi tạo thành công<br>&emsp; + Kết nối đến PostgreSQL để tạo database/schema ban đầu<br>&emsp; + Kiểm tra lại security group nếu ứng dụng hoặc công cụ quản trị chưa kết nối được | 26/06/2026 | 26/06/2026 | RDS endpoint và PostgreSQL |

### Kết quả đạt được tuần 10:

* Tạo được VPC riêng cho hệ thống, giúp cô lập tài nguyên triển khai trong một mạng riêng trên AWS.
* Hiểu được cách lựa chọn CIDR block ảnh hưởng đến việc chia subnet và mở rộng mạng sau này.
* Tạo được các subnet theo Availability Zone, giúp hệ thống có nền tảng tốt hơn cho triển khai có tính sẵn sàng cao.
* Phân tách được subnet theo vai trò như tầng truy cập, tầng ứng dụng và tầng dữ liệu, giúp kiến trúc rõ ràng và dễ kiểm soát hơn.
* Cấu hình được route table và liên kết với subnet phù hợp để định hướng lưu lượng mạng.
* Tạo được security group cho Load Balancer, ECS Service và RDS theo đúng vai trò của từng tầng.
* Giới hạn được kết nối đến database, tránh để RDS nhận truy cập trực tiếp từ các nguồn không cần thiết.
* Tạo được DB Subnet Group để RDS có thể được đặt trong các subnet phù hợp.
* Tạo được Amazon RDS PostgreSQL và ghi nhận các thông tin quan trọng như endpoint, port, database name và thông tin xác thực.
* Khởi tạo được database/schema ban đầu để ứng dụng có thể sử dụng khi triển khai container.
* Biết cách kiểm tra lỗi kết nối database thông qua endpoint, port, security group và thông tin xác thực.
* Hoàn thành lớp network và database, tạo nền tảng để triển khai Load Balancer và ECS Fargate ở tuần tiếp theo.
