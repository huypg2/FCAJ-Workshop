---
title: "Worklog Tuần 11"
date: 2026-06-26
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---
{{% notice warning %}}
⚠️ **Lưu ý:** Nội dung dưới đây chỉ dùng để tham khảo cách trình bày. Không nên sao chép nguyên văn vào báo cáo chính thức.
{{% /notice %}}

### Mục tiêu tuần 11:

* Rà soát và kết nối các microservice của hệ thống thanh toán trong môi trường local trước khi triển khai Cloud.
* Chuẩn bị kiến trúc AWS cho đề tài **Triển khai Hệ thống Thanh toán hiệu năng cao trên AWS ECS Fargate với Private Subnets, RDS PostgreSQL và S3 Backup**.
* Đóng gói các service thành Docker image, đưa image lên Amazon ECR và chuẩn bị cấu hình chạy trên ECS Fargate.
* Thiết lập các thành phần nền tảng như VPC, private subnet, Internal ALB, RDS PostgreSQL, ElastiCache Redis, IAM Role, Security Group và CloudWatch.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 26/06/2026 | - Kiểm tra lại toàn bộ source code và cấu hình chạy local<br>&emsp; + Chạy API Gateway, Payment Service, Account Service và Transaction Service cùng PostgreSQL, Redis<br>&emsp; + Kiểm tra các endpoint health check và luồng gọi giữa Payment Service với Account Service<br>&emsp; + Điều chỉnh lại biến môi trường, port, connection string và schema còn sai lệch | 26/06/2026 | 26/06/2026 | Mã nguồn dự án, Docker Compose |
| 27/06/2026 | - Chuẩn hóa cấu hình để chuẩn bị đưa lên AWS<br>&emsp; + Tách các thông tin cấu hình theo từng service<br>&emsp; + Xác định các biến cần đưa vào Task Definition như database URL, Redis endpoint, service port và cấu hình profile<br>&emsp; + Kiểm tra lại Dockerfile để bảo đảm service có thể build image ổn định | 27/06/2026 | 27/06/2026 | Dockerfile, cấu hình ứng dụng |
| 28/06/2026 | - Hoàn thiện thiết kế kiến trúc AWS<br>&emsp; + Xác định luồng truy cập từ API Gateway đến VPC Link, Internal ALB và ECS Fargate<br>&emsp; + Bố trí các service trong private subnets để hạn chế truy cập trực tiếp từ Internet<br>&emsp; + Xác định vị trí của RDS PostgreSQL, ElastiCache Redis và S3 Backup trong kiến trúc | 28/06/2026 | 28/06/2026 | Tài liệu kiến trúc AWS |
| 29/06/2026 | - Tạo và cấu hình các thành phần mạng cơ bản<br>&emsp; + Chuẩn bị VPC, subnet, route table và security group cho từng tầng<br>&emsp; + Thiết kế rule để API Gateway chỉ đi vào hệ thống qua VPC Link và Internal ALB<br>&emsp; + Giới hạn kết nối đến RDS và Redis chỉ từ các ECS Service cần thiết | 29/06/2026 | 29/06/2026 | Amazon VPC, Security Group |
| 30/06/2026 | - Đóng gói ứng dụng và lưu trữ image<br>&emsp; + Tạo repository trên Amazon ECR cho từng service<br>&emsp; + Build Docker image cho Account, Payment và Transaction Service<br>&emsp; + Push image lên ECR để sử dụng trong ECS Task Definition | 30/06/2026 | 30/06/2026 | Amazon ECR, Docker |
| 01/07/2026 | - Tạo ECS Cluster, Task Definition và ECS Service<br>&emsp; + Khai báo image, port, CPU, memory và biến môi trường cho từng task<br>&emsp; + Gán IAM Role phù hợp để task có quyền đọc secret và ghi log<br>&emsp; + Tạo ECS Service chạy trên Fargate và kiểm tra trạng thái task sau khi khởi động | 01/07/2026 | 01/07/2026 | Amazon ECS Fargate |
| 02/07/2026 | - Kết nối tầng truy cập, dữ liệu và giám sát<br>&emsp; + Tạo Internal ALB, target group và listener rule cho các service<br>&emsp; + Chuẩn bị RDS PostgreSQL, ElastiCache Redis, Secrets Manager và CloudWatch Logs<br>&emsp; + Kiểm tra log khởi động, health check và khả năng service kết nối đến database/cache | 02/07/2026 | 02/07/2026 | ALB, RDS, ElastiCache, CloudWatch |

### Kết quả đạt được tuần 11:

* Hoàn thành bước kiểm tra và chuẩn hóa hệ thống microservices trong môi trường local. Các service chính gồm API Gateway, Payment Service, Account Service và Transaction Service có thể khởi chạy cùng PostgreSQL, Redis và trao đổi với nhau theo đúng luồng xử lý.

* Rà soát được các lỗi cấu hình thường gặp trước khi triển khai lên AWS, bao gồm biến môi trường, port service, connection string, schema database và đường dẫn API giữa các service. Việc kiểm tra này giúp hạn chế lỗi khi chuyển từ môi trường local sang môi trường Cloud.

* Xây dựng được hướng kiến trúc AWS phù hợp với đề tài triển khai hệ thống thanh toán hiệu năng cao. Luồng truy cập được xác định theo mô hình API Gateway đi vào VPC qua VPC Link, sau đó Internal ALB phân phối request đến các ECS Service chạy trên Fargate.

* Thiết kế được mô hình đặt service trong private subnets. Cách bố trí này giúp các service backend không bị truy cập trực tiếp từ Internet, đồng thời vẫn có thể nhận request thông qua tầng truy cập được kiểm soát.

* Xác định được vai trò của từng thành phần trong kiến trúc: ECS Fargate chạy ứng dụng container, RDS PostgreSQL lưu dữ liệu nghiệp vụ, ElastiCache Redis phục vụ cache/lock/rate limit, S3 dùng cho backup hoặc lưu dữ liệu xuất ra, CloudWatch dùng để theo dõi log và metric.

* Đóng gói được các service thành Docker image và đưa lên Amazon ECR. Việc lưu trữ image tập trung giúp quá trình triển khai lên ECS rõ ràng hơn, dễ quản lý phiên bản và thuận tiện khi cập nhật service.

* Tạo được ECS Cluster, Task Definition và ECS Service cho các service chính. Task Definition đã mô tả image, port, CPU, memory, biến môi trường và quyền cần thiết để service hoạt động trong môi trường Fargate.

* Thiết lập được các thành phần bảo mật cơ bản như IAM Role và Security Group. Quyền truy cập được tách theo vai trò, còn kết nối mạng giữa ALB, ECS, RDS và Redis được giới hạn theo nhu cầu thực tế của từng tầng.

* Chuẩn bị được tầng dữ liệu với RDS PostgreSQL và ElastiCache Redis. Các service có thể sử dụng database để lưu thông tin tài khoản, thanh toán, giao dịch và sử dụng Redis cho các chức năng cần tốc độ cao.

* Bật được CloudWatch Logs để theo dõi quá trình khởi động và vận hành của ECS task. Log tập trung giúp dễ kiểm tra lỗi service, trạng thái kết nối database/cache và các vấn đề phát sinh trước giai đoạn kiểm thử tải.

* Sau tuần này, hệ thống đã có nền tảng triển khai AWS tương đối hoàn chỉnh, sẵn sàng cho việc kiểm tra end-to-end, đánh giá idempotency, rate limiting và thực hiện kiểm thử tải trong tuần tiếp theo.
