---
title: "5.4.1 Chuẩn bị tài nguyên"
weight: 1
---

## Chuẩn bị tài nguyên

Để chuẩn bị cho phần này của workshop, bạn sẽ cần phải:

- Triển khai CloudFormation stack
- Sửa đổi bảng định tuyến VPC.

Các thành phần này hoạt động cùng nhau để mô phỏng DNS forwarding và name resolution.

## Triển khai CloudFormation stack

Mẫu CloudFormation sẽ tạo các dịch vụ bổ sung để hỗ trợ mô phỏng môi trường truyền thống:

- Một Route 53 Private Hosted Zone lưu trữ các bản ghi Bí danh (Alias records) cho điểm cuối PrivateLink S3
- Một Route 53 Inbound Resolver endpoint cho phép “VPC Cloud” giải quyết các yêu cầu resolve DNS gửi đến Private Hosted Zone
- Một Route 53 Outbound Resolver endpoint cho phép “VPC On-prem” chuyển tiếp các yêu cầu DNS cho S3 sang “VPC Cloud”

<div class="image-holder large">
route 53 diagram
</div>

Click link sau để mở AWS CloudFormation console. Mẫu yêu cầu sẽ được tải sẵn vào menu. Chấp nhận tất cả mặc định và nhấp vào Tạo stack.

<div class="image-holder large">
Create stack
</div>

<div class="image-holder large">
Button
</div>

Có thể mất vài phút để triển khai stack hoàn tất. Bạn có thể tiếp tục với bước tiếp theo mà không cần đợi quá trình triển khai kết thúc.

## Cập nhật bảng định tuyến private on-premise

Workshop này sử dụng StrongSwan VPN chạy trên EC2 instance để mô phỏng khả năng kết nối giữa trung tâm dữ liệu truyền thống và môi trường cloud AWS. Hầu hết các thành phần bắt buộc đều được cung cấp trước khi bạn bắt đầu. Để hoàn tất cấu hình VPN, bạn sẽ sửa đổi bảng định tuyến “VPC on-prem” để hướng lưu lượng đến cloud đi qua StrongSwan VPN instance.

Mở Amazon EC2 console

Chọn instance tên infra-vpngw-test. Từ Details tab, copy Instance ID và paste vào text editor của bạn để sử dụng ở những bước tiếp theo

<div class="image-holder large">
ec2 id
</div>

Đi đến VPC menu bằng cách gõ “VPC” vào Search box

Click vào Route Tables, chọn RT Private On-prem route table, chọn Routes tab, và click Edit Routes.

<div class="image-holder large">
rt
</div>

Click Add route.

Destination: CIDR block của Cloud VPC

Target: ID của infra-vpngw-test instance (bạn đã lưu lại ở bước trên)

<div class="image-holder large">
add route
</div>

Click Save changes
