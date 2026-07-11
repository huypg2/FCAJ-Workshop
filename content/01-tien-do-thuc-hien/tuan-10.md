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


### Mục tiêu tuần 10:

* **Chủ đề:** Serverless Document Management và workshop tổng hợp Web Apps, Windows HA.
* Tuần này gộp nội dung hệ thống quản lý tài liệu Serverless và các workshop tổng hợp về Web Apps, Elastic Beanstalk, WordPress, Windows HA và SQL Server HA.
* Xây dựng hệ thống quản lý tài liệu Serverless với Lambda, DynamoDB, Amplify, API Gateway, SAM và CloudFront.
* Tìm hiểu công cụ giám sát phân tán, CloudWatch nâng cao và Grafana.
* Tổng hợp các workshop về Web App Serverless, Elastic Beanstalk, WordPress, Windows Server HA và SQL Server HA.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 19/06/2026 | - Tìm hiểu Serverless - Document Management System Series và xây dựng CRUD với Lambda, DynamoDB. <br> - Kết quả: Nắm được cách thêm, xem, sửa, xóa dữ liệu tài liệu bằng kiến trúc Serverless. | 19/06/2026 | 19/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 20/06/2026 | - Tìm hiểu lưu trữ và xác thực Serverless với AWS Amplify. <br> - Kết quả: Biết cách đơn giản hóa kết nối frontend, backend và quản lý người dùng. | 20/06/2026 | 20/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 21/06/2026 | - Tích hợp frontend với API Gateway và triển khai bằng AWS SAM. <br> - Kết quả: Hiểu cách request từ giao diện đi qua API Gateway đến Lambda và cách quản lý tài nguyên bằng template. | 21/06/2026 | 21/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 22/06/2026 | - Tìm hiểu CloudFront, chức năng tìm kiếm và DevOps cho hệ thống quản lý tài liệu. <br> - Kết quả: Biết cách phân phối nội dung nhanh hơn, hỗ trợ tra cứu tài liệu và tự động hóa cập nhật hệ thống. | 22/06/2026 | 22/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 23/06/2026 | - Tìm hiểu X-Ray, CloudWatch, Grafana và workshop CloudWatch nâng cao. <br> - Kết quả: Nắm được cách theo dõi request, log, metric, lỗi hệ thống và xây dựng dashboard giám sát. | 23/06/2026 | 23/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 24/06/2026 | - Thực hành workshop Web App Serverless, API Serverless, ứng dụng chat Serverless, Elastic Beanstalk và Node.js. <br> - Kết quả: Tổng hợp được nhiều cách triển khai ứng dụng web/API trên AWS từ Serverless đến môi trường được quản lý. | 24/06/2026 | 24/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 25/06/2026 | - Tìm hiểu CI/CD với Elastic Beanstalk, CDK Pipelines, WordPress trên AWS, Web App HA, Windows Server HA và SQL Server HA. <br> - Kết quả: Hiểu thêm các kiến trúc yêu cầu tính sẵn sàng cao và quy trình triển khai ứng dụng doanh nghiệp. | 25/06/2026 | 25/06/2026 | <https://cloudjourney.awsstudygroup.com/> |


### Kết quả đạt được tuần 10:

* Nắm được cách xây dựng hệ thống quản lý tài liệu theo kiến trúc Serverless, kết hợp nhiều thành phần như Lambda, DynamoDB, API Gateway, Amplify và CloudFront.
* Hiểu cách xây dựng chức năng CRUD bằng Lambda và DynamoDB, giúp hệ thống có thể thêm, xem, sửa và xóa thông tin tài liệu.
* Biết vai trò của AWS Amplify trong việc hỗ trợ frontend, lưu trữ, xác thực và kết nối với backend Serverless nhanh hơn.
* Nắm được cách API Gateway tiếp nhận request từ frontend, định tuyến đến Lambda và trả kết quả về cho người dùng.
* Biết cách sử dụng AWS SAM để triển khai tài nguyên Serverless bằng template, giúp quá trình cập nhật hệ thống rõ ràng và dễ kiểm soát hơn.
* Hiểu vai trò của CloudFront trong việc phân phối nội dung nhanh hơn, giảm độ trễ và cải thiện trải nghiệm truy cập tài liệu.
* Nắm được cách bổ sung chức năng tìm kiếm để người dùng dễ tra cứu tài liệu theo tên, nội dung hoặc thông tin liên quan.
* Hiểu cách X-Ray, CloudWatch và Grafana hỗ trợ theo dõi request, log, metric, lỗi hệ thống và trực quan hóa trạng thái vận hành.
* Tổng hợp được các hướng xây dựng Web App Serverless, API Serverless và ứng dụng chat Serverless, từ đó nhìn rõ cách các dịch vụ AWS phối hợp để tạo thành ứng dụng hoàn chỉnh.
* Nắm được vai trò của Elastic Beanstalk trong triển khai ứng dụng nhanh, nơi AWS hỗ trợ nhiều phần như môi trường chạy, load balancing, scaling và monitoring.
* Biết quy trình triển khai ứng dụng Node.js lên AWS, bao gồm chuẩn bị source code, cấu hình môi trường và kiểm tra ứng dụng sau khi deploy.
* Hiểu cách CI/CD với Elastic Beanstalk và CDK Pipelines giúp tự động hóa quá trình cập nhật ứng dụng, giảm thao tác thủ công và hạn chế lỗi khi release.
* Nắm được kiến trúc WordPress trên AWS, bao gồm máy chủ EC2, database, lưu trữ và các cấu hình cần thiết để vận hành website.
* Hiểu được các nguyên tắc xây dựng ứng dụng web có tính sẵn sàng cao như load balancing, auto scaling, multi-AZ và giám sát hệ thống.
* Biết thêm về mô hình Windows Server HA và SQL Server HA trên AWS, từ đó hiểu cách các hệ thống doanh nghiệp giảm downtime và tăng khả năng phục hồi khi có sự cố.
