---
title: "Worklog Tuần 10"
date: 2026-06-19
description: "Thực hành Serverless với hệ thống quản lý tài liệu"
---

# Tuần 10: Thực hành Serverless với hệ thống quản lý tài liệu

**Thời gian:** 19/06/2026 - 25/06/2026

## 1. Mục tiêu trong tuần

Tuần 10 tập trung vào việc thực hành xây dựng hệ thống quản lý tài liệu theo kiến trúc Serverless. Nội dung chính gồm xây dựng chức năng CRUD, lưu trữ dữ liệu, xác thực người dùng, tích hợp frontend, triển khai hệ thống và giám sát ứng dụng.

Các nội dung chính trong tuần gồm: AWS Lambda, Amazon DynamoDB, AWS Amplify, API Gateway, AWS SAM, CloudFront, X-Ray, CloudWatch và Grafana.

## 2. Nội dung thực hiện

### Serverless - Document Management System Series

Tìm hiểu tổng quan về hệ thống quản lý tài liệu theo kiến trúc Serverless. Nội dung này giúp hình dung cách xây dựng một ứng dụng quản lý file và dữ liệu mà không cần tự quản lý máy chủ.

### Xây dựng CRUD Serverless với Lambda và DynamoDB

Tìm hiểu cách xây dựng các chức năng thêm, xem, sửa và xóa dữ liệu bằng AWS Lambda kết hợp với Amazon DynamoDB. Lambda xử lý logic ứng dụng, còn DynamoDB dùng để lưu trữ thông tin tài liệu.

### Lưu trữ và xác thực Serverless với AWS Amplify

Tìm hiểu cách sử dụng AWS Amplify để hỗ trợ lưu trữ, xác thực và kết nối frontend với backend. Nội dung này giúp đơn giản hóa quá trình phát triển ứng dụng Serverless.

### Tích hợp Frontend với API Gateway

Tìm hiểu cách frontend giao tiếp với backend thông qua Amazon API Gateway. API Gateway đóng vai trò tiếp nhận request từ người dùng và chuyển đến các hàm Lambda tương ứng.

### Triển khai hệ thống quản lý tài liệu với AWS SAM

Tìm hiểu cách dùng AWS SAM để định nghĩa và triển khai các tài nguyên Serverless. Nội dung này giúp việc triển khai Lambda, API Gateway và DynamoDB trở nên rõ ràng, dễ quản lý hơn.

### Thiết lập phân phối nội dung với CloudFront

Tìm hiểu cách sử dụng Amazon CloudFront để phân phối nội dung của ứng dụng đến người dùng nhanh hơn. CloudFront giúp giảm độ trễ truy cập và cải thiện trải nghiệm khi tải tài liệu hoặc giao diện web.

### Thêm chức năng tìm kiếm

Tìm hiểu cách bổ sung chức năng tìm kiếm cho hệ thống quản lý tài liệu. Nội dung này giúp người dùng dễ dàng tra cứu tài liệu theo tên, nội dung hoặc thông tin liên quan.

### DevOps cho hệ thống quản lý tài liệu

Tìm hiểu cách áp dụng DevOps vào quá trình phát triển và triển khai hệ thống. Nội dung gồm quản lý mã nguồn, tự động hóa build/deploy và kiểm soát thay đổi khi cập nhật ứng dụng.

### Theo dõi phân tán với X-Ray và CloudWatch

Tìm hiểu AWS X-Ray và Amazon CloudWatch để theo dõi hoạt động của hệ thống. X-Ray hỗ trợ phân tích luồng request giữa các dịch vụ, còn CloudWatch dùng để xem log, metric và cảnh báo lỗi.

### Giám sát nâng cao với CloudWatch và Grafana

Tìm hiểu cách kết hợp CloudWatch và Grafana để xây dựng dashboard giám sát trực quan hơn. Nội dung này giúp theo dõi hiệu năng, lỗi hệ thống và trạng thái hoạt động của ứng dụng dễ dàng hơn.

### Workshop CloudWatch nâng cao

Thực hành các nội dung nâng cao về Amazon CloudWatch như log group, metric, alarm và dashboard. Nội dung này giúp hiểu rõ hơn cách giám sát hệ thống trong môi trường thực tế.

## 3. Kết quả đạt được

Sau tuần 10, đã nắm được cách xây dựng hệ thống quản lý tài liệu theo kiến trúc Serverless. Các thành phần như Lambda, DynamoDB, API Gateway, Amplify, CloudFront và CloudWatch được kết hợp để tạo thành một hệ thống hoàn chỉnh.

Ngoài ra, nội dung về X-Ray, Grafana và CloudWatch nâng cao giúp hiểu rõ hơn cách theo dõi, phân tích lỗi và giám sát hiệu năng khi vận hành ứng dụng trên AWS.

## 4. Nhận xét

Tuần 10 giúp củng cố kiến thức Serverless thông qua một bài thực hành thực tế hơn. Hệ thống quản lý tài liệu có nhiều thành phần như lưu trữ, xác thực, API, tìm kiếm và giám sát, nên giúp hiểu rõ hơn cách các dịch vụ AWS phối hợp với nhau trong một ứng dụng hoàn chỉnh.
