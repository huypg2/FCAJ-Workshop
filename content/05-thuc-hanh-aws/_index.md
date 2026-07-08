---
title: "Workshop"
weight: 5
---

{{% warning %}}
Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /warning %}}

<div class="workshop-big-title">
ĐẢM BẢO TRUY CẬP HYBRID AN TOÀN ĐẾN S3 BẰNG CÁCH SỬ DỤNG VPC ENDPOINT
</div>

## Tổng quan

**AWS PrivateLink** cung cấp kết nối riêng tư đến các dịch vụ AWS từ VPCs hoặc trung tâm dữ liệu mà không làm lộ lưu lượng truy cập ra ngoài public internet.

Trong bài lab này, chúng ta sẽ học cách tạo, cấu hình, và kiểm tra VPC endpoints để cho phép workload tiếp cận các dịch vụ AWS mà không cần đi qua Internet công cộng.

Chúng ta sẽ tạo hai loại endpoints để truy cập đến Amazon S3: gateway vpc endpoint và interface vpc endpoint.

- **Gateway** - Tạo gateway endpoint để gửi lưu lượng đến Amazon S3 hoặc DynamoDB.
- **Interface** - Tạo interface endpoint để gửi lưu lượng đến các dịch vụ điểm cuối sử dụng Network Load Balancer.

## Nội dung

<ol class="toc-list">
  <li><a href="./1-introduction/">Tổng quan về workshop</a></li>
  <li><a href="./2-preparation/">Chuẩn bị</a></li>
  <li><a href="./3-access-s3-from-vpc/">Truy cập đến S3 từ VPC</a></li>
  <li><a href="./4-access-s3-from-traditional/">Truy cập đến S3 từ môi trường truyền thống</a></li>
  <li><a href="./5-vpc-endpoint-policies/">VPC Endpoint Policies</a></li>
  <li><a href="./6-clean-up/">Dọn dẹp tài nguyên</a></li>
</ol>
