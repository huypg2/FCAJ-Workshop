---
title: "Worklog Tuần 1"
date: 2026-04-17
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---
{{% notice warning %}}
⚠️ **Lưu ý:** Nội dung dưới đây dùng để tham khảo và hỗ trợ trình bày báo cáo. Khi đưa vào báo cáo chính thức, cần tự điều chỉnh lại theo quá trình thực hiện thực tế.
{{% /notice %}}


### Mục tiêu tuần 1:

* Nắm được các khái niệm nền tảng của điện toán đám mây và các nhóm dịch vụ chính trên AWS.
* Thiết lập được môi trường ban đầu gồm tài khoản AWS, kiểm soát chi phí, phân quyền truy cập, mạng cơ bản, EC2, Cloud9 và AWS CLI.

### Các công việc cần triển khai trong tuần này:
| Ngày | Công việc | Kết quả thực hiện | Nguồn tài liệu |
| --- | --- | --- | --- |
| 17/04/2026 | - Khảo sát tổng quan nền tảng AWS và các nhóm dịch vụ như Compute, Storage, Networking, Database, Security và Monitoring. | - Phân loại được các nhóm dịch vụ cơ bản, hiểu vai trò của AWS trong việc cung cấp tài nguyên Cloud theo nhu cầu. | <https://cloudjourney.awsstudygroup.com/> |
| 18/04/2026 | - Tạo và kiểm tra tài khoản AWS, làm quen với AWS Management Console, đồng thời thiết lập AWS Budgets để theo dõi chi phí. | - Hoàn tất tài khoản thực hành, biết vị trí các mục quản lý chính trên Console và tạo được cơ chế cảnh báo chi phí ban đầu. | <https://cloudjourney.awsstudygroup.com/> |
| 19/04/2026 | - Tìm hiểu AWS Support và các thành phần IAM gồm User, Group, Policy và Role. | - Nắm được cách AWS hỗ trợ người dùng khi gặp sự cố và hiểu nguyên tắc cấp quyền tối thiểu trong quản lý truy cập. | <https://cloudjourney.awsstudygroup.com/> |
| 20/04/2026 | - Tìm hiểu Amazon VPC, subnet, route table, internet gateway, security group và network ACL. | - Vẽ được luồng mạng cơ bản trong VPC, phân biệt được vai trò của subnet, route table và các lớp kiểm soát truy cập. | <https://cloudjourney.awsstudygroup.com/> |
| 21/04/2026 | - Tìm hiểu Amazon EC2 gồm AMI, instance type, key pair, EBS, security group và cách khởi tạo máy chủ ảo. | - Nắm được quy trình tạo EC2 instance, chọn cấu hình phù hợp và hiểu cách kết nối máy chủ bằng SSH hoặc công cụ quản trị. | <https://cloudjourney.awsstudygroup.com/> |
| 22/04/2026 | - Tìm hiểu IAM Roles for EC2 và AWS Cloud9 để cấp quyền an toàn cho ứng dụng và phát triển trên môi trường Cloud. | - Hiểu được cách gắn role cho EC2 thay vì lưu access key trực tiếp, đồng thời tạo được môi trường phát triển Cloud9 cơ bản. | <https://cloudjourney.awsstudygroup.com/> |
| 23/04/2026 | - Cài đặt và cấu hình AWS CLI, kiểm tra tài khoản, region, EC2, key pair và một số thông tin dịch vụ bằng dòng lệnh. | - Thực hiện được các lệnh CLI cơ bản, xác nhận cấu hình hoạt động đúng và biết cách quản lý tài nguyên song song giữa Console và CLI. | <https://cloudjourney.awsstudygroup.com/> |


### Kết quả đạt được tuần 1:

* Hình thành được bức tranh tổng quan về AWS, bao gồm vai trò của điện toán đám mây và các nhóm dịch vụ quan trọng như compute, storage, networking, database, security và monitoring.
* Hoàn tất bước chuẩn bị môi trường thực hành ban đầu, gồm tạo tài khoản AWS, đăng nhập AWS Management Console, kiểm tra các khu vực dịch vụ và làm quen với giao diện quản trị tài nguyên.
* Thiết lập được tư duy kiểm soát chi phí ngay từ đầu thông qua AWS Budgets, hiểu cách tạo ngân sách, đặt ngưỡng cảnh báo và theo dõi chi phí phát sinh trong quá trình thực hành.
* Nắm được vai trò của AWS Support trong quá trình vận hành, biết khi nào cần tra cứu tài liệu, khi nào cần dùng kênh hỗ trợ và vì sao hỗ trợ kỹ thuật quan trọng đối với hệ thống thực tế.
* Hiểu nền tảng phân quyền với IAM, bao gồm user, group, policy và role; bước đầu nhận biết nguyên tắc cấp quyền tối thiểu khi truy cập tài nguyên AWS.
* Nắm được cấu trúc mạng cơ bản trong Amazon VPC, phân biệt được subnet, route table, internet gateway, security group và cách các thành phần này phối hợp để tạo mạng riêng trên AWS.
* Hiểu cách Amazon EC2 hoạt động ở mức cơ bản, bao gồm lựa chọn AMI, instance type, key pair, EBS volume và cấu hình security group khi tạo máy chủ ảo.
* Biết cách cấp quyền an toàn cho EC2 bằng IAM Role, tránh lưu Access Key và Secret Key trực tiếp trong máy chủ hoặc mã nguồn ứng dụng.
* Làm quen với AWS Cloud9 như một môi trường phát triển trên Cloud, hỗ trợ viết code, chạy lệnh và thao tác với tài nguyên AWS ngay trên trình duyệt.
* Cấu hình và sử dụng được AWS CLI cho các thao tác cơ bản như kiểm tra cấu hình, xem thông tin tài khoản, liệt kê region, kiểm tra EC2 và truy vấn thông tin dịch vụ.
* Có khả năng kết hợp giữa giao diện Console và dòng lệnh CLI để quản lý tài nguyên AWS linh hoạt hơn trong các bài thực hành tiếp theo.
* Xây dựng được nền tảng ban đầu để tiếp tục học các nội dung nâng cao hơn như lưu trữ, mạng, bảo mật, tự động hóa và triển khai ứng dụng trên AWS.
