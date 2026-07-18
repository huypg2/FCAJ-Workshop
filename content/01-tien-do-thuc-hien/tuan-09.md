---
title: "Worklog Tuần 9"
date: 2026-06-15
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---
{{% notice warning %}}
⚠️ **Lưu ý:** Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /notice %}}

### Tuần 9: Chuẩn bị môi trường triển khai, AWS CLI và Amazon ECR

### Mục tiêu tuần 9:

* Chuẩn bị môi trường triển khai theo đúng nhóm công việc đầu của workshop.
* Cấu hình AWS CLI để thao tác với tài nguyên AWS bằng dòng lệnh.
* Build Docker image và đưa image lên Amazon ECR để phục vụ triển khai ECS Fargate.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 15/06/2026 | - Rà soát kiến trúc triển khai và thứ tự thực hiện<br>&emsp; + Xác định các thành phần cần triển khai trên AWS<br>&emsp; + Chuẩn bị trình tự thao tác từ môi trường, image, network, database đến compute<br>&emsp; + Ghi nhận các thông tin cần dùng như Region, tên repository và tên tài nguyên | 15/06/2026 | 15/06/2026 | https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html |
| 16/06/2026 | - Chuẩn bị điều kiện thực hành trước khi tạo tài nguyên<br>&emsp; + Kiểm tra tài khoản AWS và Region sử dụng<br>&emsp; + Rà soát quyền IAM cần thiết cho quá trình triển khai<br>&emsp; + Kiểm tra Docker và các công cụ local trước khi build image | 16/06/2026 | 16/06/2026 | https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html |
| 17/06/2026 | - Cấu hình AWS CLI trên máy thực hành<br>&emsp; + Thiết lập thông tin truy cập cho AWS CLI<br>&emsp; + Kiểm tra cấu hình bằng lệnh xác thực tài khoản<br>&emsp; + Đảm bảo CLI có thể dùng cho các bước ECR và ECS phía sau | 17/06/2026 | 17/06/2026 | https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html |
| 18/06/2026 | - Build và chuẩn hóa Docker image cho ECR<br>&emsp; + Build image từ source dự án<br>&emsp; + Gắn tag image theo định dạng repository ECR<br>&emsp; + Đăng nhập Docker vào Amazon ECR bằng AWS CLI | 18/06/2026 | 18/06/2026 | https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html |
| 19/06/2026 | - Push image lên Amazon ECR và kiểm tra image<br>&emsp; + Đẩy image đã tag lên ECR repository<br>&emsp; + Kiểm tra image tag, digest và thời gian cập nhật<br>&emsp; + Lưu lại image URI để sử dụng khi tạo ECS Task Definition | 19/06/2026 | 19/06/2026 | https://docs.aws.amazon.com/AmazonECR/latest/userguide/repositories.html |

### Kết quả đạt được tuần 9:

* Xác định được trình tự triển khai hạ tầng và ứng dụng theo đúng hướng của workshop.
* Chuẩn bị được thông tin Region, tên tài nguyên và các thành phần cần dùng trước khi thao tác trên AWS.
* Kiểm tra được tài khoản AWS và các quyền IAM cần thiết để hạn chế lỗi thiếu quyền khi tạo tài nguyên.
* Chuẩn bị được môi trường local gồm Docker và AWS CLI để hỗ trợ quá trình build image và thao tác AWS.
* Cấu hình được AWS CLI và xác nhận tài khoản bằng dòng lệnh.
* Hiểu được AWS CLI được dùng để đăng nhập ECR, push image và hỗ trợ các thao tác triển khai phía sau.
* Build được Docker image từ source dự án theo đúng bước chuẩn bị triển khai container.
* Gắn tag image theo đúng định dạng repository Amazon ECR.
* Đăng nhập được Docker vào Amazon ECR bằng AWS CLI.
* Push được image lên ECR repository và kiểm tra được image sau khi upload.
* Ghi nhận được image URI để dùng cho phần đăng ký ECS Task Definition ở tuần tiếp theo.
* Hoàn thành nhóm công việc chuẩn bị, AWS CLI và ECR đúng theo nội dung workshop nhưng nguồn tham khảo đã chuyển sang tài liệu AWS bên ngoài.
