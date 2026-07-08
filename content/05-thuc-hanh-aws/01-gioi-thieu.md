---
title: "5.1. Giới thiệu"
weight: 1
---

## Giới thiệu về VPC Endpoint

Điểm cuối VPC hay còn gọi là **VPC Endpoint** là một thiết bị ảo trong Amazon VPC. Đây là thành phần có khả năng mở rộng theo chiều ngang, có tính dự phòng và tính sẵn sàng cao.

VPC Endpoint cho phép tài nguyên điện toán trong VPC giao tiếp với các dịch vụ AWS mà không cần đi qua Internet công cộng. Nhờ đó, hệ thống có thể giảm rủi ro bảo mật, tăng độ ổn định và hạn chế phụ thuộc vào các thành phần mạng công cộng.

Tài nguyên điện toán đang chạy trong VPC có thể truy cập Amazon S3 bằng cách sử dụng **Gateway Endpoint**. Trong khi đó, **Interface Endpoint** dựa trên AWS PrivateLink có thể được sử dụng bởi tài nguyên chạy trong VPC hoặc tại trung tâm dữ liệu truyền thống.

## Tổng quan về workshop

Trong workshop này, bạn sẽ sử dụng hai VPC:

### VPC Cloud

VPC Cloud dành cho các tài nguyên cloud như Gateway Endpoint và EC2 Instance để kiểm tra kết nối đến Amazon S3.

### VPC On-Prem

VPC On-Prem mô phỏng môi trường truyền thống như nhà máy hoặc trung tâm dữ liệu của công ty. Một EC2 Instance chạy phần mềm StrongSwan VPN được triển khai trong VPC On-Prem và được cấu hình tự động để thiết lập đường hầm VPN Site-to-Site với AWS Transit Gateway.

VPN này mô phỏng kết nối từ một vị trí on-premises đến AWS Cloud. Để giảm thiểu chi phí, chỉ một phiên bản VPN được cung cấp trong workshop này. Khi triển khai production workloads, nên sử dụng nhiều thiết bị VPN để đảm bảo tính sẵn sàng cao.

## Mục tiêu

- Hiểu khái niệm VPC Endpoint.
- Phân biệt Gateway Endpoint và Interface Endpoint.
- Hiểu cách truy cập Amazon S3 từ VPC.
- Hiểu cách mô phỏng môi trường on-premises kết nối đến AWS.
- Nắm được luồng thực hành chính của workshop.
