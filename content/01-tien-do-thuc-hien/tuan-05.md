---
title: "Worklog Tuần 5"
date: 2026-05-15
description: "Bảo mật đám mây chuyên sâu và quản lý truy cập"
---

# Tuần 5: Bảo mật đám mây chuyên sâu và quản lý truy cập

**Thời gian:** 15/05/2026 - 21/05/2026

## 1. Mục tiêu trong tuần

Tuần 5 tập trung vào các nội dung bảo mật trên AWS, bao gồm quản lý danh tính, kiểm soát quyền truy cập, bảo vệ dữ liệu, giám sát an ninh và phát hiện mối đe dọa.

Các nội dung chính trong tuần gồm: AWS Single Sign-On, IAM Permission Boundaries, IAM Policies, AWS Security Hub, VPC Endpoints, AWS WAF, AWS KMS, Amazon Macie, AWS Secrets Manager, AWS Firewall Manager, Amazon GuardDuty và Amazon Cognito.

## 2. Nội dung thực hiện

### Liên kết danh tính với AWS Single Sign-On

Tìm hiểu cách AWS Single Sign-On hỗ trợ quản lý đăng nhập tập trung cho nhiều tài khoản và ứng dụng. Nội dung này giúp đơn giản hóa việc quản lý người dùng, phân quyền và truy cập trong môi trường AWS.

### Quản lý quyền hạn với IAM Permission Boundaries

Tìm hiểu IAM Permission Boundaries và cách giới hạn quyền tối đa mà một user hoặc role có thể sử dụng. Nội dung này giúp kiểm soát quyền truy cập chặt chẽ hơn, đặc biệt trong các môi trường có nhiều nhóm cùng làm việc.

### Kiểm soát truy cập với IAM Policies và Conditions

Tìm hiểu cách sử dụng IAM Policies để cấp quyền cho tài nguyên AWS. Ngoài ra, IAM Conditions giúp bổ sung điều kiện truy cập theo IP, thời gian, tag hoặc một số thuộc tính khác để tăng mức độ bảo mật.

### Tuân thủ bảo mật với AWS Security Hub

Tìm hiểu AWS Security Hub và vai trò của dịch vụ này trong việc tổng hợp, đánh giá và cảnh báo các vấn đề bảo mật. Nội dung này giúp có cái nhìn tập trung hơn về trạng thái bảo mật của hệ thống.

### Truy cập riêng tư đến S3 với VPC Endpoints

Tìm hiểu cách sử dụng VPC Endpoints để truy cập Amazon S3 mà không cần đi qua Internet. Cách này giúp tăng tính bảo mật và phù hợp với các hệ thống yêu cầu truy cập riêng tư trong VPC.

### Các phương pháp bảo mật tốt nhất cho S3

Tìm hiểu các cách bảo vệ dữ liệu trên Amazon S3 như cấu hình quyền truy cập, bucket policy, mã hóa dữ liệu, chặn public access và theo dõi hoạt động truy cập.

### Bảo vệ ứng dụng với AWS WAF

Tìm hiểu AWS WAF và cách dịch vụ này bảo vệ ứng dụng web khỏi các kiểu tấn công phổ biến như SQL Injection, Cross-Site Scripting và bot traffic. Nội dung này giúp hiểu rõ hơn về lớp bảo vệ ở tầng ứng dụng.

### Mã hóa dữ liệu với AWS KMS

Tìm hiểu AWS Key Management Service và vai trò của khóa mã hóa trong việc bảo vệ dữ liệu. Nội dung này giúp nắm được cách quản lý key, phân quyền sử dụng key và mã hóa dữ liệu trong các dịch vụ AWS.

### Bảo vệ dữ liệu với Amazon Macie

Tìm hiểu Amazon Macie và khả năng phát hiện dữ liệu nhạy cảm trong Amazon S3. Dịch vụ này hỗ trợ kiểm tra, phân loại và cảnh báo khi phát hiện dữ liệu có rủi ro bảo mật.

### Quản lý thông tin xác thực với AWS Secrets Manager

Tìm hiểu AWS Secrets Manager để lưu trữ và quản lý các thông tin nhạy cảm như mật khẩu database, API key và token. Nội dung này giúp tránh việc lưu thông tin xác thực trực tiếp trong mã nguồn.

### Quản trị bảo mật với AWS Firewall Manager

Tìm hiểu AWS Firewall Manager và cách quản lý chính sách bảo mật tập trung cho nhiều tài khoản AWS. Dịch vụ này phù hợp với môi trường có nhiều tài khoản hoặc nhiều ứng dụng cần áp dụng chính sách bảo mật thống nhất.

### Phát hiện mối đe dọa với Amazon GuardDuty

Tìm hiểu Amazon GuardDuty và khả năng phân tích log để phát hiện hành vi bất thường hoặc nguy cơ tấn công. Nội dung này giúp hiểu cách AWS hỗ trợ giám sát bảo mật tự động.

### Xác thực liên miền với Amazon Cognito

Tìm hiểu Amazon Cognito và cách dịch vụ này hỗ trợ xác thực người dùng cho ứng dụng. Nội dung gồm đăng ký, đăng nhập, quản lý user pool và tích hợp xác thực với ứng dụng web hoặc mobile.

## 3. Kết quả đạt được

Sau tuần 5, đã nắm được các nhóm dịch vụ bảo mật quan trọng trên AWS, từ quản lý danh tính, phân quyền, mã hóa dữ liệu đến giám sát và phát hiện mối đe dọa.

Ngoài ra, các nội dung về IAM, WAF, KMS, Secrets Manager và GuardDuty giúp hiểu rõ hơn cách xây dựng một hệ thống Cloud an toàn, hạn chế rủi ro và bảo vệ dữ liệu tốt hơn.

## 4. Nhận xét

Tuần 5 là một tuần quan trọng vì bảo mật là yếu tố cần được xem xét trong mọi hệ thống Cloud. Các dịch vụ bảo mật của AWS giúp kiểm soát quyền truy cập, bảo vệ dữ liệu và phát hiện sớm các nguy cơ có thể ảnh hưởng đến hệ thống.
