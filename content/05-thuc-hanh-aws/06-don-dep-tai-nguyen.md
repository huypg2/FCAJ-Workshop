---
title: "5.6. Dọn dẹp tài nguyên"
weight: 6
---

## Dọn dẹp tài nguyên

Dọn dẹp tài nguyên

Xin chúc mừng bạn đã hoàn thành xong lab này! Trong lab này, bạn đã học về các mô hình kiến trúc để truy cập Amazon S3 mà không sử dụng Public Internet.

Bằng cách tạo Gateway endpoint, bạn đã cho phép giao tiếp trực tiếp giữa các tài nguyên EC2 và Amazon S3, mà không đi qua Internet Gateway. Bằng cách tạo Interface endpoint, bạn đã mở rộng kết nối S3 đến các tài nguyên chạy trên trung tâm dữ liệu trên chỗ của bạn thông qua AWS Site-to-Site VPN hoặc Direct Connect.

## Dọn dẹp

Điều hướng đến Hosted Zones trên phía trái của bảng điều khiển Route 53. Nhấp vào tên của s3.us-east-1.amazonaws.com zone. Nhấp vào Delete và xác nhận việc xóa bằng cách nhập từ khóa “delete”.

<div class="image-holder large">
hosted zone
</div>

Disassociate Route 53 Resolver Rule - myS3Rule from “VPC Onprem” and Delete it.

<div class="image-holder large">
hosted zone
</div>

4.Mở console của CloudFormation và xóa hai stack CloudFormation mà bạn đã tạo cho bài thực hành này:

PLOnpremSetup

PLCloudSetup

<div class="image-holder large">
delete stack
</div>

## Xóa các S3 bucket

Mở bảng điều khiển S3

Chọn bucket chúng ta đã tạo cho lab, nhấp chuột và xác nhận là empty. Nhấp Delete và xác nhận delete.

<div class="image-holder large">
delete s3
</div>
