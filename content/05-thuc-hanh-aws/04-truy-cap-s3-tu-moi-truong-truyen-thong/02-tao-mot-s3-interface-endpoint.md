---
title: "5.4.2 Tạo một S3 Interface endpoint"
weight: 2
---

## Tạo một S3 Interface endpoint

Trong phần này, bạn sẽ tạo và kiểm tra Interface Endpoint S3 bằng cách sử dụng môi trường truyền thống mô phỏng.

Quay lại Amazon VPC menu. Trong thanh điều hướng bên trái, chọn Endpoints, sau đó click Create Endpoint.

Trong Create endpoint console:

Đặt tên interface endpoint

Trong Service category, chọn aws services

<div class="image-holder large">
name
</div>

Trong Search box, gõ S3 và nhấn Enter. Chọn endpoint có tên com.amazonaws.us-east-1.s3. Đảm bảo rằng cột Type có giá trị Interface.

<div class="image-holder large">
service
</div>

Đối với VPC, chọn VPC Cloud từ drop-down.

Đảm bảo rằng bạn chọn “VPC Cloud” và không phải “VPC On-prem”

Mở rộng Additional settings và đảm bảo rằng Enable DNS name không được chọn (sẽ sử dụng điều này trong phần tiếp theo của workshop)

<div class="image-holder large">
vpc
</div>

Chọn 2 subnets trong AZs sau: us-east-1a and us-east-1b

<div class="image-holder large">
subnets
</div>

Đối với Security group, chọn SGforS3Endpoint:

<div class="image-holder large">
sg
</div>

Giữ default policy - full access và click Create endpoint

<div class="image-holder large">
success
</div>

Chúc mừng bạn đã tạo thành công S3 interface endpoint. Ở bước tiếp theo, chúng ta sẽ kiểm tra interface endpoint.
