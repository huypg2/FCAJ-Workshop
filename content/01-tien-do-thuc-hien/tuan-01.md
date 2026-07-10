---
title: "Worklog Tuần 1"
date: 2026-04-17
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

{{% notice warning %}}
⚠️ **Lưu ý:** Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /notice %}}


# Tuần 1: Khởi động Đám mây và nền tảng mạng, máy chủ

**Thời gian thực hiện:** 17/04/2026 - 23/04/2026

### Mục tiêu tuần 1:

* Làm quen với nền tảng AWS, các nhóm dịch vụ chính và cách sử dụng AWS Management Console.
* Thiết lập tài khoản AWS, kiểm soát chi phí ban đầu và tìm hiểu các kênh hỗ trợ kỹ thuật.
* Nắm các khái niệm cơ bản về IAM, VPC, EC2, IAM Role, Cloud9 và AWS CLI.
* Chuẩn bị nền tảng để thực hành các dịch vụ AWS nâng cao hơn trong các tuần tiếp theo.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 6 | - Tổng quan về chương trình học AWS <br> - Khám phá các nhóm dịch vụ chính: Compute, Storage, Networking, Database, Security, Monitoring <br> - Ghi nhận các lưu ý khi sử dụng tài khoản AWS | 17/04/2026 | 17/04/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 2 | - Tạo mới AWS Account <br> - Kiểm tra AWS Management Console <br> - Thiết lập cảnh báo chi phí với AWS Budgets <br> - Tìm hiểu các gói hỗ trợ của AWS Support | 20/04/2026 | 20/04/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Tìm hiểu IAM cơ bản <br>&emsp; + User, Group, Policy, Role <br>&emsp; + Nguyên tắc cấp quyền tối thiểu <br> - Thực hành phân quyền cơ bản cho người dùng | 21/04/2026 | 21/04/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Tìm hiểu Amazon VPC và Amazon EC2 <br>&emsp; + Subnet, Route Table, Internet Gateway, Security Group <br>&emsp; + AMI, Instance Type, Key Pair, EBS <br> - Tìm hiểu IAM Roles for EC2 | 22/04/2026 | 22/04/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Làm quen AWS Cloud9 <br> - Cài đặt và cấu hình AWS CLI <br> - Thực hành một số lệnh CLI cơ bản để kiểm tra tài khoản, region và dịch vụ EC2 | 23/04/2026 | 23/04/2026 | <https://cloudjourney.awsstudygroup.com/> |


### Ghi chú thực hiện tuần 1:

* AWS được tiếp cận theo hướng tổng quan trước, sau đó đi vào các dịch vụ nền tảng thường xuất hiện trong hầu hết kiến trúc Cloud.
* IAM, VPC và EC2 là các thành phần quan trọng nên cần nắm chắc khái niệm trước khi triển khai các bài thực hành có nhiều tài nguyên hơn.
* AWS Budgets và cảnh báo chi phí cần được thiết lập sớm để hạn chế rủi ro phát sinh chi phí ngoài dự kiến trong quá trình học.

### Kết quả đạt được tuần 1:

* Nắm được AWS là gì và hiểu vai trò của các nhóm dịch vụ chính như Compute, Storage, Networking, Database, Security và Monitoring.
* Hoàn thành việc tìm hiểu quy trình tạo tài khoản AWS, truy cập AWS Management Console và kiểm tra các thiết lập ban đầu.
* Biết cách sử dụng AWS Budgets để theo dõi chi phí và hiểu vai trò của AWS Support khi cần hỗ trợ kỹ thuật.
* Nắm được các khái niệm IAM cơ bản gồm User, Group, Policy và Role; hiểu lý do cần phân quyền theo nguyên tắc tối thiểu.
* Hiểu nền tảng mạng VPC, máy chủ ảo EC2 và cách IAM Role hỗ trợ cấp quyền an toàn cho ứng dụng chạy trên EC2.
* Làm quen với AWS Cloud9 và AWS CLI để chuẩn bị cho các thao tác tự động hóa ở các tuần sau.
