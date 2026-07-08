---
title: "5.3.1 Tạo một Gateway Endpoint"
weight: 1
---

## Tạo một Gateway Endpoint

Mở **Amazon VPC console** trên AWS Management Console. Trong thanh điều hướng bên trái, chọn **Endpoints**, sau đó click **Create endpoint**. Tại đây, bạn sẽ thấy có sẵn 6 điểm cuối VPC hiện có hỗ trợ **AWS Systems Manager (SSM)**. Các điểm cuối này đã được mẫu **CloudFormation** triển khai tự động cho workshop này.

<div class="image-holder large">
endpoint
</div>

Trong giao diện **Create endpoint console**, đặt tên cho endpoint là **s3-gwe**. Ở phần **Service category**, chọn **AWS services**.

<div class="image-holder large">
endpoint
</div>

Trong phần **Services**, gõ **s3** vào hộp tìm kiếm và chọn dịch vụ **Amazon S3** với loại endpoint là **Gateway**.

<div class="image-holder large">
endpoint
</div>

Đối với phần **VPC**, chọn **VPC Cloud** từ danh sách drop-down menu. Đối với phần **Route tables**, chọn bảng định tuyến đã được liên kết với 2 subnets. Lưu ý, đây không phải là bảng định tuyến chính của VPC mà là bảng định tuyến thứ hai do CloudFormation tạo ra.

<div class="image-holder large">
endpoint
</div>

Đối với phần **Policy**, để tùy chọn mặc định là **Full access** để cho phép toàn quyền truy cập vào dịch vụ Amazon S3. Trong phần sau của workshop, bạn sẽ triển khai **VPC Endpoint Policy** để chứng minh việc hạn chế quyền truy cập vào S3 bucket dựa trên các policies.

<div class="image-holder large">
endpoint
</div>

Không thêm tag vào VPC endpoint. Sau đó click **Create endpoint**. Khi nhận được thông báo tạo endpoint thành công, click dấu **X** để đóng thông báo.

<div class="image-holder large">
endpoint
</div>

Sau khi hoàn thành, Gateway Endpoint tên **s3-gwe** đã được tạo thành công. Endpoint này sẽ cho phép EC2 instance trong **VPC Cloud** truy cập Amazon S3 mà không cần sử dụng Internet công cộng.
