---
title: "Worklog Tuần 2"
date: 2026-04-24
description: "Lưu trữ, cơ sở dữ liệu và mở rộng quy mô"
---

# Tuần 2: Lưu trữ, cơ sở dữ liệu và mở rộng quy mô

**Thời gian:** 24/04/2026 - 30/04/2026

## 1. Mục tiêu trong tuần

Tuần 2 tập trung vào các dịch vụ lưu trữ, cơ sở dữ liệu, bộ nhớ đệm, giám sát hệ thống và mở rộng quy mô ứng dụng trên AWS.

Các nội dung chính trong tuần gồm: Amazon S3, Amazon RDS, Amazon DynamoDB, Amazon ElastiCache, Amazon Lightsail, EC2 Auto Scaling, Amazon CloudWatch và Amazon Route 53.

## 2. Nội dung thực hiện

### Hosting website tĩnh với Amazon S3

Tìm hiểu cách sử dụng Amazon S3 để lưu trữ và triển khai website tĩnh. Nội dung này giúp nắm được cách tạo bucket, cấu hình quyền truy cập, bật static website hosting và quản lý dữ liệu trên S3.

### Cơ sở dữ liệu quan hệ với Amazon RDS

Tìm hiểu Amazon RDS và cách dịch vụ này hỗ trợ triển khai cơ sở dữ liệu quan hệ trên AWS. Các nội dung chính gồm tạo database instance, chọn engine phù hợp, cấu hình bảo mật, backup và kết nối ứng dụng với cơ sở dữ liệu.

### Cơ sở dữ liệu NoSQL với Amazon DynamoDB

Tìm hiểu Amazon DynamoDB, một dịch vụ cơ sở dữ liệu NoSQL được quản lý hoàn toàn bởi AWS. Nội dung này giúp hiểu cách lưu trữ dữ liệu dạng key-value, thiết kế bảng, khóa chính và cách DynamoDB hỗ trợ hệ thống cần khả năng mở rộng cao.

### Bộ nhớ đệm với Amazon ElastiCache

Tìm hiểu Amazon ElastiCache và vai trò của cache trong việc tăng tốc độ truy xuất dữ liệu. Nội dung này giúp nắm được cách sử dụng Redis hoặc Memcached để giảm tải cho database và cải thiện hiệu năng ứng dụng.

### Triển khai ứng dụng với Amazon Lightsail

Tìm hiểu Amazon Lightsail như một giải pháp đơn giản để triển khai website, máy chủ ảo hoặc ứng dụng nhỏ. Nội dung này phù hợp với các hệ thống cần triển khai nhanh, dễ quản lý và có chi phí rõ ràng.

### Triển khai container với Lightsail Containers

Tìm hiểu cách sử dụng Lightsail Containers để chạy ứng dụng đã được đóng gói bằng container. Nội dung này giúp làm quen với việc triển khai container ở mức đơn giản trước khi học các dịch vụ nâng cao hơn như Amazon ECS.

### Mở rộng quy mô với EC2 Auto Scaling

Tìm hiểu EC2 Auto Scaling và cách tự động tăng hoặc giảm số lượng EC2 instance dựa trên nhu cầu sử dụng. Nội dung này giúp hệ thống có thể đáp ứng lưu lượng truy cập thay đổi mà vẫn tối ưu chi phí.

### Giám sát hệ thống với Amazon CloudWatch

Tìm hiểu Amazon CloudWatch để theo dõi tài nguyên và trạng thái hoạt động của hệ thống. Các nội dung chính gồm metric, log, alarm và cách CloudWatch hỗ trợ phát hiện sự cố trong quá trình vận hành.

### Quản lý DNS với Amazon Route 53

Tìm hiểu Amazon Route 53 và vai trò của DNS trong hệ thống Cloud. Nội dung này giúp nắm được cách quản lý domain, bản ghi DNS và định tuyến truy cập đến các tài nguyên trên AWS.

## 3. Kết quả đạt được

Sau tuần 2, đã nắm được các dịch vụ quan trọng liên quan đến lưu trữ, cơ sở dữ liệu, cache và giám sát hệ thống trên AWS.

Ngoài ra, nội dung về EC2 Auto Scaling và CloudWatch giúp hiểu rõ hơn cách xây dựng hệ thống có khả năng mở rộng, theo dõi được trạng thái hoạt động và tối ưu tài nguyên khi vận hành.

## 4. Nhận xét

Tuần 2 cung cấp kiến thức quan trọng về phần dữ liệu và khả năng mở rộng của hệ thống. Các dịch vụ như S3, RDS, DynamoDB, ElastiCache và CloudWatch thường xuất hiện trong nhiều kiến trúc ứng dụng thực tế trên AWS.
