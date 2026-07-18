### Tuần 9: Chuẩn bị môi trường triển khai và đưa Docker image lên ECR

### Mục tiêu tuần 9:

* Hoàn thành nhóm công việc mở đầu của workshop gồm tổng quan, chuẩn bị môi trường, cấu hình AWS CLI và build/push Docker image lên ECR.
* Chuẩn bị đầy đủ thông tin tài khoản, Region, công cụ dòng lệnh và Docker image để phục vụ các bước triển khai tiếp theo.
* Đảm bảo image đã có trên Amazon ECR trước khi chuyển sang phần network, database và ECS.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 15/06/2026 | - Xác định phạm vi triển khai theo kiến trúc workshop<br>&emsp; + Xem luồng triển khai tổng thể từ môi trường thực hành đến hạ tầng AWS<br>&emsp; + Nhận diện các nhóm tài nguyên sẽ được tạo trong workshop<br>&emsp; + Chuẩn bị thứ tự thao tác để tránh tạo thiếu hoặc sai tài nguyên | 15/06/2026 | 15/06/2026 | 5-Workshop.rar: 5.1 Workshop Overview |
| 16/06/2026 | - Chuẩn bị điều kiện thực hành trước khi thao tác với AWS<br>&emsp; + Kiểm tra tài khoản AWS, Region và quyền truy cập cần thiết<br>&emsp; + Rà soát các công cụ local cần dùng trong quá trình triển khai<br>&emsp; + Đảm bảo môi trường máy cá nhân sẵn sàng cho các bước cấu hình tiếp theo | 16/06/2026 | 16/06/2026 | 5-Workshop.rar: 5.2 Prerequisite |
| 17/06/2026 | - Cấu hình AWS CLI cho môi trường triển khai<br>&emsp; + Thiết lập thông tin truy cập AWS CLI<br>&emsp; + Kiểm tra cấu hình bằng lệnh xác thực tài khoản<br>&emsp; + Bảo đảm AWS CLI có thể dùng cho các thao tác ECR và tài nguyên AWS | 17/06/2026 | 17/06/2026 | 5-Workshop.rar: 5.2.1 AWS CLI Configure |
| 18/06/2026 | - Chuẩn bị Docker image theo yêu cầu workshop<br>&emsp; + Build image từ source đã chuẩn bị<br>&emsp; + Định danh image theo repository ECR sẽ sử dụng<br>&emsp; + Thực hiện đăng nhập Docker vào Amazon ECR bằng AWS CLI | 18/06/2026 | 18/06/2026 | 5-Workshop.rar: 5.2.2 Build Docker ECR |
| 19/06/2026 | - Hoàn tất đưa image lên Amazon ECR<br>&emsp; + Push image đã gắn tag lên ECR repository<br>&emsp; + Kiểm tra image sau khi upload<br>&emsp; + Ghi nhận image URI để dùng trong bước đăng ký task trên ECS | 19/06/2026 | 19/06/2026 | 5-Workshop.rar: 5.2.2 Build Docker ECR |

### Kết quả đạt được tuần 9:

* Nắm được phạm vi của workshop và các nhóm tài nguyên AWS cần triển khai theo đúng trình tự.
* Hoàn tất phần chuẩn bị môi trường trước khi bắt đầu tạo tài nguyên hạ tầng.
* Kiểm tra được tài khoản, Region và quyền truy cập cần thiết phục vụ quá trình thực hành.
* Cấu hình được AWS CLI và xác nhận CLI có thể thao tác với tài khoản AWS.
* Hiểu được AWS CLI được sử dụng trong workshop để hỗ trợ đăng nhập ECR và thao tác tài nguyên.
* Build được Docker image theo đúng bước chuẩn bị của workshop.
* Gắn tag Docker image theo đúng định dạng repository ECR.
* Đăng nhập được Docker vào Amazon ECR thông qua AWS CLI.
* Push được image lên Amazon ECR và kiểm tra được image trong repository.
* Lưu được image URI để sử dụng ở phần ECS Fargate.
* Hoàn thành đúng nhóm công việc 5.1, 5.2, 5.2.1 và 5.2.2, không bổ sung thêm công việc ngoài workshop.
