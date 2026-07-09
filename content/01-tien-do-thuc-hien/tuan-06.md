---
title: "Worklog Tuần 6"
date: 2026-05-22
description: "Độ tin cậy, hiệu suất và tối ưu chi phí"
---

# Tuần 6: Độ tin cậy, hiệu suất và tối ưu chi phí

**Thời gian:** 22/05/2026 - 28/05/2026

## 1. Mục tiêu trong tuần

Tuần 6 tập trung vào các giải pháp giúp hệ thống hoạt động ổn định, có khả năng phục hồi khi xảy ra sự cố, cải thiện hiệu suất và tối ưu chi phí sử dụng tài nguyên trên AWS.

Các nội dung chính trong tuần gồm: AWS Backup, Amazon EBS Data Lifecycle Manager, EC2 Image Builder, VPC Peering, AWS Transit Gateway, SQS, SNS, EBS Multi-Attach, Service Quotas, EC2 Resource Optimization, Savings Plans, Reserved Instances, AWS Glue và Amazon Athena.

## 2. Nội dung thực hiện

### Bảo vệ dữ liệu với AWS Backup

Tìm hiểu AWS Backup và cách dịch vụ này hỗ trợ sao lưu dữ liệu tập trung cho nhiều tài nguyên AWS. Nội dung này giúp nắm được cách tạo backup plan, thiết lập lịch sao lưu và quản lý bản sao lưu để phục hồi khi cần thiết.

### Tự động hóa snapshot với Amazon EBS Data Lifecycle Manager

Tìm hiểu cách sử dụng Amazon EBS Data Lifecycle Manager để tự động tạo, quản lý và xóa snapshot của EBS Volume. Nội dung này giúp giảm thao tác thủ công và đảm bảo dữ liệu được sao lưu định kỳ.

### Phát hiện bất thường cho EBS Backups

Tìm hiểu cách theo dõi và phát hiện các dấu hiệu bất thường trong quá trình sao lưu EBS. Nội dung này giúp tăng khả năng kiểm soát dữ liệu backup và hạn chế rủi ro khi hệ thống gặp sự cố.

### Vá lỗi hệ thống với EC2 Image Builder

Tìm hiểu EC2 Image Builder và cách tạo image máy chủ đã được cấu hình sẵn. Dịch vụ này giúp tự động hóa việc cập nhật, vá lỗi và chuẩn hóa môi trường EC2 trước khi triển khai.

### Tích hợp mạng với VPC Peering

Tìm hiểu VPC Peering để kết nối hai VPC với nhau bằng mạng riêng của AWS. Nội dung này giúp hiểu cách các hệ thống trong nhiều VPC có thể giao tiếp an toàn mà không cần đi qua Internet.

### Quản lý mạng tập trung với AWS Transit Gateway

Tìm hiểu AWS Transit Gateway và vai trò của dịch vụ này trong việc kết nối nhiều VPC hoặc hệ thống on-premises. Transit Gateway giúp đơn giản hóa kiến trúc mạng khi số lượng kết nối tăng lên.

### Hệ thống nhắn tin với Amazon SQS

Tìm hiểu Amazon SQS và cách hàng đợi giúp tách rời các thành phần trong hệ thống. Nội dung này giúp hiểu cách xử lý tác vụ bất đồng bộ, giảm tải cho service chính và tăng độ ổn định khi lưu lượng tăng cao.

### Gửi thông báo với Amazon SNS

Tìm hiểu Amazon SNS và cách dịch vụ này hỗ trợ gửi thông báo theo mô hình publish/subscribe. SNS thường được dùng để gửi cảnh báo, thông báo sự kiện hoặc kết hợp với các dịch vụ khác như SQS và Lambda.

### Chia sẻ dữ liệu lưu trữ với Amazon EBS Multi-Attach

Tìm hiểu EBS Multi-Attach và cách một EBS Volume có thể được gắn vào nhiều EC2 instance trong một số trường hợp nhất định. Nội dung này giúp hiểu thêm về các mô hình lưu trữ cần tính sẵn sàng cao.

### Tính sẵn sàng cao cho cơ sở dữ liệu

Tìm hiểu cách kết hợp EBS Multi-Attach và Systems Manager trong các mô hình cần tính sẵn sàng cao. Nội dung này giúp hiểu thêm cách hệ thống có thể duy trì hoạt động khi một thành phần gặp sự cố.

### Lựa chọn kích thước phù hợp với EC2 Resource Optimization

Tìm hiểu EC2 Resource Optimization để đánh giá mức sử dụng tài nguyên của instance. Nội dung này giúp nhận biết instance nào đang dùng dư tài nguyên để điều chỉnh kích thước phù hợp hơn.

### Quản lý hạn ngạch với Service Quotas

Tìm hiểu AWS Service Quotas và cách kiểm tra giới hạn tài nguyên trong tài khoản AWS. Nội dung này giúp tránh lỗi khi triển khai hệ thống vượt quá hạn mức cho phép.

### Tối ưu chi phí với Savings Plans và Reserved Instances

Tìm hiểu Savings Plans và Reserved Instances như các phương án tiết kiệm chi phí khi sử dụng tài nguyên ổn định trong thời gian dài. Nội dung này giúp hiểu cách lựa chọn mô hình thanh toán phù hợp với nhu cầu sử dụng.

### Phân tích chi phí với AWS Glue và Amazon Athena

Tìm hiểu cách sử dụng AWS Glue và Amazon Athena để phân tích dữ liệu chi phí. Nội dung này giúp trực quan hóa, truy vấn và đánh giá chi phí sử dụng tài nguyên AWS theo từng nhóm dịch vụ hoặc mục đích sử dụng.

### Ủy quyền truy cập Console thanh toán

Tìm hiểu cách phân quyền truy cập vào phần Billing Console. Nội dung này giúp kiểm soát người dùng nào được xem hoặc quản lý thông tin chi phí trong tài khoản AWS.

## 3. Kết quả đạt được

Sau tuần 6, đã nắm được các giải pháp giúp tăng độ tin cậy, cải thiện hiệu suất và tối ưu chi phí cho hệ thống trên AWS.

Các nội dung về backup, snapshot, high availability, messaging, quota và cost optimization giúp hiểu rõ hơn cách vận hành hệ thống Cloud an toàn, ổn định và tiết kiệm hơn.

## 4. Nhận xét

Tuần 6 cung cấp nhiều kiến thức quan trọng cho giai đoạn vận hành hệ thống. Bên cạnh việc triển khai ứng dụng, cần quan tâm đến sao lưu dữ liệu, khả năng phục hồi, giới hạn tài nguyên và chi phí sử dụng để hệ thống hoạt động bền vững hơn.
