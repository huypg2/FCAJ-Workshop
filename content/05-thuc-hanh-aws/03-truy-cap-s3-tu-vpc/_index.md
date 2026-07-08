---
title: "5.3. Truy cập S3 từ VPC"
weight: 3
---

## Truy cập S3 từ VPC

## Sử dụng Gateway endpoint

Trong phần này, bạn sẽ tạo một **Gateway endpoint** để truy cập Amazon S3 từ một EC2 instance. Gateway endpoint cho phép EC2 tải một object lên S3 bucket mà không cần sử dụng Internet công cộng.

Để tạo endpoint, bạn cần chỉ định VPC muốn tạo endpoint và dịch vụ AWS muốn thiết lập kết nối. Trong trường hợp này, dịch vụ được sử dụng là **Amazon S3**.

<div class="image-holder large">
Khu vực ảnh: Overview truy cập S3 từ VPC
</div>

## Nội dung

<ol class="toc-list">
  <li><a href="./01-tao-mot-gateway-endpoint/">Tạo gateway endpoint</a></li>
  <li><a href="./02-kiem-tra-gateway-endpoint/">Test gateway endpoint</a></li>
</ol>

## Tóm tắt

Gateway endpoint giúp các tài nguyên trong VPC truy cập Amazon S3 thông qua mạng riêng của AWS thay vì đi qua public Internet. Đây là một cách triển khai an toàn, ổn định và phù hợp cho các workload cần truy cập S3 từ bên trong VPC.
