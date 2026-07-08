---
title: "5.4.3 Kiểm tra Interface Endpoint"
weight: 3
---

## Kiểm tra Interface Endpoint

## Lấy regional DNS name của S3 interface endpoint

Trong Amazon VPC menu, chọn Endpoints.

Click tên của endpoint chúng ta mới tạo ở mục 4.2: s3-interface-endpoint. Click details và lưu lại regional DNS name của endpoint, cái đầu tiên, vào text-editor của bạn để dùng ở các bước sau.

<div class="image-holder large">
dns name
</div>

## Kết nối đến EC2 instance ở trong “VPC On-prem”

Đi đến Session manager bằng cách gõ “session manager” vào ô tìm kiếm.

Click Start Session, chọn EC2 instance có tên Test-Interface-Endpoint. EC2 instance này đang chạy trên “VPC On-prem” và sẽ được sử dụng để kiểm tra kết nối đến Amazon S3 thông qua Interface endpoint. Session Manager sẽ mở 1 browser tab mới với shell prompt: sh-4.2 $

<div class="image-holder large">
Start session
</div>

Đi đến ssm-user’s home directory với lệnh “cd ~”

Tạo 1 file tên testfile2.xyz

```bash
fallocate -l 1G testfile2.xyz
