### Tuần 9: Chuẩn bị workshop, cấu hình AWS CLI, Docker và Amazon ECR

### Mục tiêu tuần 9:

* Hiểu tổng quan workshop triển khai hệ thống trên AWS.
* Chuẩn bị môi trường thực hành gồm AWS CLI, Docker và cấu hình tài khoản AWS.
* Build Docker image cho các service và đưa image lên Amazon ECR.
* Nắm được vai trò của ECR trong quá trình triển khai container lên ECS Fargate.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 15/06/2026 | - Đọc tổng quan workshop triển khai hệ thống trên AWS<br>&emsp; + Xem kiến trúc tổng thể của workshop<br>&emsp; + Xác định các thành phần chính: VPC, RDS, Load Balancer, ECS Fargate, CloudWatch và S3 Backup<br>&emsp; + Chuẩn bị danh sách tài nguyên cần tạo trong các bước tiếp theo | 15/06/2026 | 15/06/2026 | Tài liệu 5.1 Workshop Overview |
| 16/06/2026 | - Chuẩn bị môi trường thực hành<br>&emsp; + Kiểm tra AWS account, Region sử dụng và quyền truy cập cần thiết<br>&emsp; + Cài đặt và kiểm tra AWS CLI<br>&emsp; + Cấu hình access profile để thao tác với tài nguyên AWS bằng dòng lệnh | 16/06/2026 | 16/06/2026 | Tài liệu 5.2 Prerequisite và AWS CLI Configure |
| 17/06/2026 | - Kiểm tra source và cấu hình Docker cho ứng dụng<br>&emsp; + Rà soát Dockerfile của các service<br>&emsp; + Kiểm tra biến môi trường cần thiết trước khi build image<br>&emsp; + Chạy thử build image ở local để phát hiện lỗi trước khi đẩy lên AWS | 17/06/2026 | 17/06/2026 | Tài liệu Build Docker và mã nguồn dự án |
| 18/06/2026 | - Tạo Amazon ECR repository cho các service<br>&emsp; + Tạo repository lưu trữ Docker image<br>&emsp; + Đăng nhập Docker vào Amazon ECR bằng AWS CLI<br>&emsp; + Gắn tag image đúng theo repository URI | 18/06/2026 | 18/06/2026 | Tài liệu 5.2.2 Build Docker ECR |
| 19/06/2026 | - Push Docker image lên Amazon ECR và kiểm tra kết quả<br>&emsp; + Push image của từng service lên repository tương ứng<br>&emsp; + Kiểm tra image tag, digest và thời gian cập nhật trên ECR<br>&emsp; + Ghi nhận lại image URI để sử dụng khi tạo ECS Task Definition | 19/06/2026 | 19/06/2026 | Amazon ECR và tài liệu workshop |

### Kết quả đạt được tuần 9:

* Hiểu được mục tiêu của workshop là triển khai hệ thống lên AWS theo hướng sử dụng các dịch vụ quản lý thay vì tự cấu hình toàn bộ hạ tầng thủ công.
* Nắm được vai trò của từng thành phần trong workshop như VPC dùng để tạo mạng riêng, RDS dùng cho cơ sở dữ liệu, Load Balancer dùng để phân phối request, ECS Fargate dùng để chạy container và CloudWatch dùng để giám sát.
* Chuẩn bị được môi trường thao tác với AWS thông qua AWS CLI, giúp các bước tạo tài nguyên và kiểm tra cấu hình thuận tiện hơn.
* Biết cách kiểm tra Region, thông tin tài khoản và quyền truy cập trước khi bắt đầu triển khai tài nguyên.
* Rà soát được Dockerfile và các biến môi trường cần thiết để ứng dụng có thể chạy ổn định khi đưa lên container.
* Thực hiện được quá trình build Docker image cho ứng dụng và kiểm tra lỗi build trước khi đẩy image lên AWS.
* Tạo được Amazon ECR repository để lưu trữ image của các service phục vụ cho quá trình triển khai ECS Fargate.
* Biết cách đăng nhập Docker vào ECR bằng AWS CLI, gắn tag image và push image lên đúng repository.
* Kiểm tra được image đã được upload lên ECR thông qua tag, digest và thời gian cập nhật.
* Chuẩn bị được image URI để sử dụng trong các bước tạo Task Definition ở tuần tiếp theo.
* Hoàn thành phần chuẩn bị nền tảng cho workshop, tạo tiền đề để triển khai network, database và compute ở các tuần sau.
