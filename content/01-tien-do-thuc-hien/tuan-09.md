---
title: "Worklog Tuần 9"
date: 2026-06-12
description: "Thực hành Serverless với dự án Book Store"
---

# Tuần 9: Thực hành Serverless với dự án Book Store

**Thời gian:** 12/06/2026 - 18/06/2026

## 1. Mục tiêu trong tuần

Tuần 9 tập trung vào việc thực hành kiến trúc Serverless thông qua dự án **Book Store**. Nội dung chính là xây dựng backend, frontend, xác thực người dùng, xử lý sự kiện, triển khai tự động và giám sát ứng dụng.

Các nội dung chính trong tuần gồm: AWS Lambda, Amazon S3, Amazon DynamoDB, AWS SAM, Amazon Cognito, SQS, SNS, CI/CD, CloudWatch và AWS AppSync.

## 2. Nội dung thực hiện

### Serverless - Book Store Series

Tìm hiểu tổng quan về dự án Book Store theo kiến trúc Serverless. Nội dung này giúp hình dung cách một ứng dụng thực tế được xây dựng bằng các dịch vụ AWS mà không cần quản lý máy chủ trực tiếp.

### Backend Serverless với Lambda, S3 và DynamoDB

Tìm hiểu cách xây dựng backend bằng AWS Lambda, Amazon S3 và Amazon DynamoDB. Lambda dùng để xử lý logic, S3 dùng để lưu trữ dữ liệu tĩnh hoặc file, còn DynamoDB dùng để lưu trữ dữ liệu của ứng dụng.

### Phát triển Frontend cho API Serverless

Tìm hiểu cách xây dựng frontend và kết nối với API Serverless. Nội dung này giúp nắm được cách frontend gửi request đến backend, nhận dữ liệu trả về và hiển thị thông tin cho người dùng.

### Tự động hóa triển khai với AWS SAM

Tìm hiểu AWS SAM và cách sử dụng công cụ này để định nghĩa, build và deploy ứng dụng Serverless. Nội dung này giúp việc triển khai Lambda, API và các tài nguyên liên quan trở nên nhất quán hơn.

### Xác thực người dùng với Amazon Cognito

Tìm hiểu Amazon Cognito để quản lý đăng ký, đăng nhập và xác thực người dùng. Nội dung này giúp ứng dụng có thể kiểm soát truy cập và bảo vệ các API yêu cầu người dùng đăng nhập.

### Tên miền tùy chỉnh và SSL cho ứng dụng Serverless

Tìm hiểu cách cấu hình tên miền tùy chỉnh và SSL cho ứng dụng Serverless. Nội dung này giúp ứng dụng có địa chỉ truy cập rõ ràng hơn và đảm bảo kết nối an toàn thông qua HTTPS.

### Xử lý sự kiện với SQS và SNS

Tìm hiểu cách sử dụng Amazon SQS và Amazon SNS trong hệ thống Serverless. SQS hỗ trợ xử lý hàng đợi bất đồng bộ, còn SNS hỗ trợ gửi thông báo theo mô hình publish/subscribe.

### CI/CD cho ứng dụng Serverless

Tìm hiểu quy trình CI/CD để tự động hóa việc build, test và deploy ứng dụng Serverless. Nội dung này giúp giảm thao tác thủ công và hạn chế lỗi khi cập nhật ứng dụng.

### Giám sát ứng dụng Serverless

Tìm hiểu cách giám sát ứng dụng Serverless bằng Amazon CloudWatch. Nội dung gồm theo dõi log, metric, lỗi thực thi Lambda và thiết lập cảnh báo khi hệ thống có vấn đề.

### Xây dựng API GraphQL với AWS AppSync

Tìm hiểu AWS AppSync và cách xây dựng API GraphQL cho ứng dụng. Nội dung này giúp nắm được cách frontend truy vấn dữ liệu linh hoạt hơn và kết nối với các nguồn dữ liệu như DynamoDB.

## 3. Kết quả đạt được

Sau tuần 9, đã nắm được cách xây dựng một ứng dụng Serverless cơ bản theo mô hình thực tế. Các thành phần như backend, frontend, xác thực, xử lý sự kiện, triển khai và giám sát được kết hợp thành một hệ thống hoàn chỉnh hơn.

Ngoài ra, nội dung về AWS SAM, Cognito, SQS, SNS và AppSync giúp hiểu rõ hơn cách triển khai ứng dụng Serverless có khả năng mở rộng và dễ quản lý trên AWS.

## 4. Nhận xét

Tuần 9 giúp củng cố kiến thức Serverless thông qua một dự án cụ thể. Việc thực hành với Book Store giúp dễ hình dung hơn cách các dịch vụ AWS phối hợp với nhau để xây dựng một ứng dụng hoàn chỉnh, từ xử lý dữ liệu đến xác thực và giám sát.
