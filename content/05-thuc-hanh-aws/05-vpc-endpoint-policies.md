---
title: "5.5 VPC Endpoint Policies"
weight: 5
---

## VPC Endpoint Policies

Khi bạn tạo một **Interface Endpoint** hoặc **Gateway Endpoint**, bạn có thể đính kèm một chính sách endpoint để kiểm soát quyền truy cập vào dịch vụ mà bạn đang kết nối.

Chính sách **VPC Endpoint Policy** là một chính sách tài nguyên IAM được gắn trực tiếp vào endpoint. Nếu bạn không đính kèm policy khi tạo endpoint, AWS sẽ tự động gắn policy mặc định cho phép toàn quyền truy cập vào dịch vụ thông qua endpoint.

Bạn có thể tạo policy để giới hạn quyền truy cập chỉ đến một số S3 bucket cụ thể. Điều này hữu ích khi bạn chỉ muốn một vài bucket nhất định có thể truy cập được thông qua VPC Endpoint.

Trong phần này, bạn sẽ tạo một **VPC Endpoint Policy** để hạn chế quyền truy cập vào S3 bucket được chỉ định trong policy.

<div class="image-holder large">
endpoint diagram
</div>

## 1. Kết nối tới EC2 và xác minh kết nối tới S3

### Bước 1: Mở AWS Session Manager

Bắt đầu một phiên **AWS Session Manager** mới trên máy chủ có tên:

```text
Test-Gateway-Endpoint
```

### Bước 2: Kiểm tra truy cập đến bucket đầu tiên

Từ phiên kết nối này, xác minh rằng bạn có thể liệt kê nội dung của bucket đã tạo trong phần **Truy cập S3 từ VPC** bằng lệnh:

```bash
aws s3 ls s3://<your-bucket-name>
```

<div class="image-holder large">
test
</div>

### Bước 3: Kiểm tra kết quả

Nội dung của bucket sẽ hiển thị hai tệp có dung lượng **1GB** đã được tải lên trước đó.

## 2. Tạo S3 bucket thứ hai

### Bước 1: Mở S3 Console

Đi đến **Amazon S3 Console**, sau đó chọn:

```text
Create bucket
```

### Bước 2: Đặt tên bucket

Tạo một bucket S3 mới, tuân thủ mẫu đặt tên đã sử dụng ở phần trước nhưng thêm hậu tố:

```text
-2
```

Ví dụ:

```text
lab01huy-2
```

### Bước 3: Giữ nguyên cấu hình mặc định

Để các trường khác ở giá trị mặc định, sau đó nhấp:

```text
Create
```

<div class="image-holder large">
create bucket
</div>

### Bước 4: Kiểm tra kết quả

Bucket thứ hai được tạo thành công.

<div class="image-holder large">
Success
</div>

## 3. Cập nhật VPC Endpoint Policy

Policy mặc định cho phép truy cập vào tất cả các S3 bucket thông qua VPC Endpoint. Trong bước này, bạn sẽ thay policy mặc định bằng một policy mới chỉ cho phép truy cập vào bucket thứ hai.

### Bước 1: Mở giao diện Edit Policy

Đi đến Gateway Endpoint đã tạo trước đó cho Amazon S3, sau đó mở phần chỉnh sửa policy.

### Bước 2: Dán policy mới

Trong giao diện **Edit Policy**, sao chép và dán policy sau. Thay:

```text
yourbucketname-2
```

bằng tên bucket thứ hai của bạn.

```json
{
  "Id": "Policy1631305502445",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1631305501021",
      "Action": "s3:*",
      "Effect": "Allow",
      "Resource": [
        "arn:aws:s3:::yourbucketname-2",
        "arn:aws:s3:::yourbucketname-2/*"
      ],
      "Principal": "*"
    }
  ]
}
```

### Bước 3: Lưu policy

Chọn:

```text
Save
```

để kích hoạt policy.

<div class="image-holder large">
custom policy
</div>

### Bước 4: Kiểm tra kết quả

Policy được cấu hình thành công.

<div class="image-holder large">
success
</div>

## 4. Kiểm tra truy cập đến bucket đầu tiên

### Bước 1: Quay lại phiên Session Manager

Từ session đang mở trên EC2 instance:

```text
Test-Gateway-Endpoint
```

kiểm tra truy cập đến S3 bucket đầu tiên bằng lệnh:

```bash
aws s3 ls s3://<yourbucketname>
```

### Bước 2: Kiểm tra kết quả lỗi

Câu lệnh sẽ trả về lỗi vì bucket đầu tiên không được cấp quyền trong VPC Endpoint Policy.

<div class="image-holder large">
error
</div>

## 5. Tạo file mới trên EC2 instance

### Bước 1: Trở lại home directory

Trở lại thư mục home trên EC2 instance bằng lệnh:

```bash
cd ~
```

### Bước 2: Tạo file kiểm tra

Tạo một file mới bằng lệnh:

```bash
fallocate -l 1G test-bucket2.xyz
```

Lệnh này sẽ tạo file:

```text
test-bucket2.xyz
```

với dung lượng **1GB**.

## 6. Upload file lên bucket thứ hai

### Bước 1: Copy file lên bucket thứ hai

Sao chép file vừa tạo lên bucket thứ hai bằng lệnh:

```bash
aws s3 cp test-bucket2.xyz s3://<your-2nd-bucket-name>
```

### Bước 2: Kiểm tra kết quả thành công

Thao tác này được cho phép bởi VPC Endpoint Policy vì policy hiện tại chỉ cho phép truy cập đến bucket thứ hai.

<div class="image-holder large">
success
</div>

<div class="image-holder large">
success
</div>

## 7. Kiểm tra upload file lên bucket đầu tiên

### Bước 1: Thử copy file lên bucket đầu tiên

Tiếp tục kiểm tra truy cập vào S3 bucket đầu tiên bằng lệnh:

```bash
aws s3 cp test-bucket2.xyz s3://<your-1st-bucket-name>
```

### Bước 2: Kiểm tra kết quả thất bại

Câu lệnh sẽ xảy ra lỗi vì bucket đầu tiên không có quyền truy cập trong VPC Endpoint Policy.

<div class="image-holder large">
fail
</div>

## 8. Tóm tắt

Trong phần này, bạn đã tạo chính sách **VPC Endpoint Policy** cho Amazon S3 và sử dụng AWS CLI để kiểm tra policy.

Các thao tác AWS CLI liên quan đến bucket S3 ban đầu bị thất bại vì bạn đã áp dụng policy chỉ cho phép truy cập đến bucket thứ hai.

Các thao tác AWS CLI nhắm vào bucket thứ hai thành công vì policy cho phép truy cập đến bucket này.

VPC Endpoint Policy rất hữu ích trong các tình huống cần kiểm soát quyền truy cập vào tài nguyên thông qua VPC Endpoint. Nhờ đó, bạn có thể giới hạn những bucket nào được phép truy cập qua endpoint và tăng cường bảo mật cho hệ thống.
