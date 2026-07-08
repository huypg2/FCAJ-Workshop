---
title: "5.3.2 Kiểm tra Gateway Endpoint"
weight: 2
---

## Kiểm tra Gateway Endpoint

Để kiểm tra Gateway Endpoint, trước tiên đi đến **S3 Management Console**. Trong giao diện **Bucket console**, chọn **Create bucket**.

<div class="image-holder large">
Create bucket
</div>

Trong giao diện **Create bucket console**, đặt tên bucket. Tên bucket phải là một tên không bị trùng trong phạm vi toàn cầu. Có thể đặt theo gợi ý như **lab&lt;số-lab&gt;&lt;tên-bạn&gt;**.

<div class="image-holder large">
Bucket name
</div>

Giữ nguyên giá trị mặc định của các field còn lại, sau đó kéo chuột xuống và chọn **Create bucket**.

<div class="image-holder large">
Create
</div>

Sau khi tạo thành công, S3 bucket sẽ xuất hiện trong danh sách bucket.

<div class="image-holder large">
Success
</div>

Trong workshop này, bạn sẽ dùng **AWS Session Manager** để kết nối đến các EC2 instances. Session Manager là một tính năng trong dịch vụ **Systems Manager** được quản lý hoàn toàn bởi AWS. Systems Manager cho phép bạn quản lý Amazon EC2 instances và các máy ảo on-premises thông qua một browser-based shell. Session Manager cung cấp khả năng quản lý phiên kết nối an toàn và có thể kiểm tra mà không cần mở cổng vào, không cần duy trì bastion host hoặc quản lý khóa SSH.

Bạn có thể tham khảo thêm **First Cloud Journey Lab** để hiểu sâu hơn về Session Manager.

Trong **AWS Management Console**, gõ **Systems Manager** trong ô tìm kiếm và nhấn Enter.

<div class="image-holder large">
system manager
</div>

Từ menu **Systems Manager**, tìm phần **Node Management** ở thanh bên trái và chọn **Session Manager**.

<div class="image-holder large">
system manager
</div>

Click **Start Session**, sau đó chọn EC2 instance tên **Test-Gateway-Endpoint**. EC2 instance này đang chạy trong **VPC Cloud** và sẽ được dùng để kiểm tra khả năng kết nối với Amazon S3 thông qua Gateway Endpoint vừa tạo, có tên **s3-gwe**.

<div class="image-holder large">
Start session
</div>

Session Manager sẽ mở một browser tab mới với shell prompt:

```text
sh-4.2$
