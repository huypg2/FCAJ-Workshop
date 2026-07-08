---
title: "5.4. Truy cập S3 từ môi trường truyền thống"
weight: 4
---

## Truy cập S3 từ môi trường truyền thống

## Tổng quan

Trong phần này, bạn sẽ tạo một **Interface Endpoint** để truy cập **Amazon S3** từ môi trường truyền thống mô phỏng. Interface Endpoint sẽ cho phép bạn định tuyến đến Amazon S3 thông qua kết nối VPN từ môi trường truyền thống mô phỏng của bạn.

Interface Endpoint phù hợp trong trường hợp tài nguyên không chỉ nằm trong VPC mà còn có thể đến từ môi trường bên ngoài AWS, ví dụ như trung tâm dữ liệu, văn phòng công ty hoặc hệ thống on-premises.

<div class="image-holder large">
Interface endpoint architecture
</div>

## Tại sao nên sử dụng Interface Endpoint

Các **Gateway Endpoint** chỉ hoạt động với các tài nguyên đang chạy trong chính VPC nơi chúng được tạo. Điều này có nghĩa là nếu tài nguyên nằm ngoài VPC, ví dụ trong môi trường truyền thống hoặc trung tâm dữ liệu on-premises, Gateway Endpoint sẽ không phù hợp để sử dụng trực tiếp.

Trong khi đó, **Interface Endpoint** có thể hoạt động với tài nguyên chạy trong VPC và cả tài nguyên chạy trong môi trường truyền thống. Khả năng kết nối từ môi trường truyền thống đến AWS Cloud có thể được cung cấp thông qua **AWS Site-to-Site VPN** hoặc **AWS Direct Connect**.

Interface Endpoint cho phép bạn kết nối với các dịch vụ được cung cấp bởi **AWS PrivateLink**. Các dịch vụ này bao gồm một số dịch vụ AWS, dịch vụ do đối tác và khách hàng AWS lưu trữ trong VPC riêng của họ, còn được gọi là **PrivateLink endpoint services**, và các dịch vụ đối tác trên AWS Marketplace.

Trong phạm vi workshop này, chúng ta sẽ tập trung vào việc sử dụng Interface Endpoint để kết nối với **Amazon S3**.

## Nội dung

<ol class="toc-list">
  <li><a href="./01-chuan-bi-tai-nguyen/">Chuẩn bị tài nguyên</a></li>
  <li><a href="./02-tao-mot-s3-interface-endpoint/">Tạo một S3 Interface Endpoint</a></li>
  <li><a href="./03-kiem-tra-interface-endpoint/">Kiểm tra Interface Endpoint</a></li>
  <li><a href="./04-mo-phong-on-premises-dns/">Mô phỏng On-premises DNS</a></li>
</ol>

## Tóm tắt

Trong phần này, bạn sẽ cấu hình Interface Endpoint để cho phép môi trường truyền thống mô phỏng truy cập Amazon S3 thông qua kết nối riêng tư. Cách làm này giúp hạn chế việc truy cập qua Internet công cộng, đồng thời thể hiện cách AWS PrivateLink hỗ trợ mô hình kết nối hybrid giữa on-premises và AWS Cloud.
