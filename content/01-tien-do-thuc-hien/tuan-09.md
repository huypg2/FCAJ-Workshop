### Tuần 9: Chuẩn bị môi trường triển khai, Docker image và Amazon ECR

### Mục tiêu tuần 9:

* Chuẩn bị môi trường AWS để bắt đầu triển khai hệ thống lên Cloud.
* Kiểm tra cấu hình AWS CLI, Docker và quyền truy cập tài khoản.
* Đóng gói ứng dụng thành Docker image để phục vụ triển khai bằng ECS Fargate.
* Đưa Docker image lên Amazon ECR và chuẩn bị image URI cho các bước triển khai tiếp theo.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 15/06/2026 | - Kiểm tra tổng quan kiến trúc triển khai hệ thống trên AWS<br>&emsp; + Xác định các thành phần sẽ sử dụng gồm VPC, subnet, security group, RDS, ALB, ECS Fargate, CloudWatch và S3<br>&emsp; + Rà soát luồng triển khai từ source code đến Docker image, ECR và ECS<br>&emsp; + Chuẩn bị danh sách thông tin cần dùng như Region, tên repository, tên service và biến môi trường | 15/06/2026 | 15/06/2026 | AWS Console và sơ đồ triển khai dự án |
| 16/06/2026 | - Chuẩn bị tài khoản và công cụ thao tác AWS<br>&emsp; + Kiểm tra quyền truy cập tài khoản AWS và Region triển khai<br>&emsp; + Cấu hình AWS CLI để thao tác với tài nguyên bằng dòng lệnh<br>&emsp; + Kiểm tra lệnh xác thực tài khoản và cấu hình profile trước khi tạo tài nguyên | 16/06/2026 | 16/06/2026 | AWS CLI và IAM |
| 17/06/2026 | - Rà soát Dockerfile và cấu hình ứng dụng trước khi build image<br>&emsp; + Kiểm tra các biến môi trường cần thiết cho database, port, profile chạy và cấu hình service<br>&emsp; + Build thử Docker image ở local để phát hiện lỗi đóng gói ứng dụng<br>&emsp; + Kiểm tra image sau khi build nhằm bảo đảm có thể dùng cho ECS Task Definition | 17/06/2026 | 17/06/2026 | Docker và mã nguồn dự án |
| 18/06/2026 | - Tạo Amazon ECR repository và chuẩn bị push image<br>&emsp; + Tạo repository dùng để lưu trữ Docker image của ứng dụng<br>&emsp; + Đăng nhập Docker vào Amazon ECR thông qua AWS CLI<br>&emsp; + Gắn tag image theo đúng repository URI để chuẩn bị upload lên AWS | 18/06/2026 | 18/06/2026 | Amazon ECR và AWS CLI |
| 19/06/2026 | - Đẩy Docker image lên Amazon ECR và kiểm tra kết quả<br>&emsp; + Push image đã build lên repository tương ứng<br>&emsp; + Kiểm tra image tag, digest và thời gian cập nhật trên Amazon ECR<br>&emsp; + Ghi nhận image URI để sử dụng khi cấu hình ECS Task Definition ở giai đoạn triển khai | 19/06/2026 | 19/06/2026 | Amazon ECR |

### Kết quả đạt được tuần 9:

* Xác định được các thành phần hạ tầng AWS cần dùng cho hệ thống gồm VPC, subnet, security group, RDS, Application Load Balancer, ECS Fargate, CloudWatch và S3.
* Hiểu rõ hơn luồng triển khai ứng dụng container từ source code sang Docker image, sau đó lưu image trên Amazon ECR và sử dụng image đó trong ECS Fargate.
* Kiểm tra được AWS account, Region và quyền thao tác cơ bản trước khi bắt đầu tạo tài nguyên Cloud.
* Cấu hình được AWS CLI để hỗ trợ thao tác bằng dòng lệnh, giúp quá trình đăng nhập ECR, kiểm tra tài khoản và quản lý tài nguyên thuận tiện hơn.
* Rà soát được Dockerfile và các cấu hình cần thiết để ứng dụng có thể chạy ổn định trong môi trường container.
* Build được Docker image từ mã nguồn dự án và phát hiện sớm các lỗi có thể xảy ra trước khi đưa image lên Cloud.
* Tạo được Amazon ECR repository để lưu trữ image phục vụ cho quá trình triển khai ứng dụng bằng ECS Fargate.
* Đăng nhập được Docker vào Amazon ECR bằng AWS CLI và gắn tag image theo đúng repository URI.
* Push được Docker image lên Amazon ECR và kiểm tra được image đã tồn tại thông qua tag, digest và thời gian cập nhật.
* Chuẩn bị được image URI để sử dụng ở bước tạo ECS Task Definition trong tuần tiếp theo.
* Hoàn thành phần chuẩn bị môi trường triển khai, bảo đảm các bước network, database và compute phía sau có thể tiếp tục thực hiện thuận lợi.
