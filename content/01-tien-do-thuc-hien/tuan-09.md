### Tuần 9: Chuẩn bị môi trường AWS, Docker image và Amazon ECR

### Mục tiêu tuần 9:

* Chuẩn bị đầy đủ môi trường triển khai ứng dụng lên AWS.
* Kiểm tra quyền truy cập, Region, AWS CLI và Docker trước khi tạo tài nguyên.
* Đóng gói ứng dụng thành Docker image theo yêu cầu triển khai container.
* Đưa image lên Amazon ECR để sử dụng cho ECS Fargate ở các bước sau.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 15/06/2026 | - Rà soát yêu cầu triển khai hệ thống trên AWS<br>&emsp; + Xác định các tài nguyên cần chuẩn bị trước khi triển khai<br>&emsp; + Ghi nhận Region, tên môi trường, tên repository và quy ước đặt tên tài nguyên<br>&emsp; + Sắp xếp thứ tự triển khai từ môi trường, image, network, database đến compute | 15/06/2026 | 15/06/2026 | AWS Console và kế hoạch triển khai |
| 16/06/2026 | - Chuẩn bị công cụ thao tác với AWS<br>&emsp; + Kiểm tra quyền tài khoản IAM được sử dụng trong quá trình thực hành<br>&emsp; + Cấu hình AWS CLI và kiểm tra thông tin tài khoản bằng lệnh dòng lệnh<br>&emsp; + Kiểm tra Docker trên máy local để bảo đảm có thể build và tag image | 16/06/2026 | 16/06/2026 | IAM, AWS CLI và Docker |
| 17/06/2026 | - Chuẩn bị cấu hình đóng gói ứng dụng<br>&emsp; + Rà soát Dockerfile, cổng chạy ứng dụng và các biến môi trường cần truyền khi chạy container<br>&emsp; + Tách các thông tin cấu hình triển khai ra khỏi mã nguồn<br>&emsp; + Build thử image ở local để kiểm tra lỗi trước khi đưa lên AWS | 17/06/2026 | 17/06/2026 | Dockerfile và mã nguồn dự án |
| 18/06/2026 | - Chuẩn hóa Docker image trước khi upload<br>&emsp; + Gắn tag image theo đúng định dạng repository trên AWS<br>&emsp; + Kiểm tra kích thước image và phiên bản image sau khi build<br>&emsp; + Chuẩn bị lệnh đăng nhập ECR và lệnh push image cho từng repository | 18/06/2026 | 18/06/2026 | Docker image và Amazon ECR |
| 19/06/2026 | - Đẩy image lên Amazon ECR<br>&emsp; + Tạo repository lưu trữ image trên Amazon ECR<br>&emsp; + Đăng nhập Docker vào ECR bằng AWS CLI<br>&emsp; + Push image, kiểm tra tag image và ghi nhận image URI để dùng khi tạo ECS Task Definition | 19/06/2026 | 19/06/2026 | Amazon ECR |

### Kết quả đạt được tuần 9:

* Chuẩn bị được danh sách tài nguyên AWS cần dùng cho quá trình triển khai hệ thống.
* Xác định được thứ tự triển khai hợp lý, bắt đầu từ môi trường thao tác, Docker image, ECR, VPC, database, load balancer và ECS Fargate.
* Kiểm tra được quyền tài khoản IAM, Region triển khai và thông tin tài khoản trước khi thao tác với tài nguyên AWS.
* Cấu hình được AWS CLI để hỗ trợ đăng nhập ECR, kiểm tra tài khoản và thực hiện một số thao tác bằng dòng lệnh.
* Kiểm tra được Docker trên môi trường local, bảo đảm có thể build image trước khi triển khai lên Cloud.
* Rà soát được Dockerfile, port chạy ứng dụng và các biến môi trường cần thiết khi chạy container.
* Build thử được Docker image ở local và hạn chế lỗi phát sinh khi đưa image sang môi trường AWS.
* Chuẩn hóa được tag image theo repository URI, giúp ECS Task Definition có thể tham chiếu đúng image.
* Tạo được Amazon ECR repository để lưu trữ image phục vụ triển khai container.
* Push được Docker image lên Amazon ECR và kiểm tra được image thông qua tag, digest và thời gian cập nhật.
* Ghi nhận được image URI để sử dụng trong bước đăng ký Task Definition ở tuần tiếp theo.
* Hoàn thành phần chuẩn bị nền tảng triển khai, không còn phụ thuộc vào việc chạy ứng dụng hoàn toàn ở local.
