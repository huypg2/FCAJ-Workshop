---
title: "Blog 2"
weight: 2
---

<div class="workshop-big-title">
TỐI ƯU QUY TRÌNH DISASTER RECOVERY CHO STATEFUL SERVICES TRÊN AMAZON EKS BẰNG VELERO
</div>

Việc đảm bảo tính sẵn sàng cao và an toàn dữ liệu luôn là bài toán sống còn đối với các hệ thống chạy trên nền tảng Kubernetes. Khi vô tình xóa nhầm một không gian tên trên môi trường production hoặc quá trình nâng cấp cụm máy chủ gặp lỗi, việc tái thiết lập thủ công toàn bộ tài nguyên sẽ gây tiêu tốn rất nhiều thời gian và công sức của đội ngũ vận hành.

Giải pháp sao lưu và phục hồi thảm họa sử dụng công cụ mã nguồn mở Velero giúp tự động hóa việc đóng gói cấu hình logic lên Amazon S3, đồng thời chụp ảnh đĩa vật lý của các ứng dụng có trạng thái dưới dạng Amazon EBS Snapshots. Bài viết này tổng hợp chi tiết kiến trúc, quy trình hoạt động và những lưu ý kỹ thuật quan trọng rút ra từ quá trình triển khai thực tế giải pháp trên Amazon EKS.

## 1. Các ưu điểm cốt lõi của giải pháp

Kiến trúc triển khai tập trung tối ưu hóa hệ thống dựa trên hai khía cạnh quan trọng: khả năng bảo toàn vẹn toàn dữ liệu và siết chặt tiêu chuẩn an toàn hạ tầng.

- **Bảo mật qua EKS Pod Identity:** Thay vì sử dụng các thông tin xác thực tĩnh hoặc lạm dụng quyền `cluster-admin`, giải pháp thiết lập cơ chế ủy quyền ngắn hạn qua EKS Pod Identity. Kết hợp với một ClusterRole tùy chỉnh, Velero chỉ được phép tương tác tối thiểu với các `apiGroups` thực sự cần thiết theo nguyên tắc Least Privilege.
- **Sao lưu đồng bộ hai thành phần:** Velero xử lý song song cả file cấu hình logic như Deployments, PVCs, Secrets được nén và đẩy về Amazon S3, lẫn dữ liệu thực tế lưu trong ổ đĩa gp3 được đóng băng thành các bản Amazon EBS Snapshots.
- **Khôi phục linh hoạt chéo Namespace:** Tính năng `namespaceMapping` cho phép tái thiết lập nhanh chóng toàn bộ ứng dụng và kéo ngược dữ liệu lịch sử từ bản snapshot cũ sang một phân vùng độc lập mới mà không gây ảnh hưởng đến môi trường gốc.

## 2. Quy trình hoạt động của hệ thống

Luồng xử lý dữ liệu của giải pháp được chia tách rõ ràng thành hai giai đoạn độc lập thông qua Kubernetes Custom Resource:

- **Khi sao lưu:** Velero controller tiếp nhận yêu cầu, quét qua Kubernetes API để thu thập toàn bộ định nghĩa tài nguyên trong không gian tên chỉ định và đẩy tệp nén về S3 Bucket. Đối với phân vùng đĩa vật lý bền vững, hệ thống đồng thời gọi API của AWS để kích hoạt tiến trình chụp ảnh đĩa vật lý nhằm đóng băng trạng thái dữ liệu tại thời điểm sao lưu.
- **Khi phục hồi:** Khi thực hiện khôi phục sang namespace mới, AWS tự động phân tích dữ liệu cấu hình lưu trên S3, đọc thông tin snapshot cũ từ tiến trình backup trước đó để tạo thành một ổ đĩa gp3 mới. Ổ đĩa này tự động được gắn vào Worker Node để ứng dụng tiếp tục ghi dữ liệu nối tiếp vào tệp lịch sử mà không bị gián đoạn.

<div class="image-holder large">
Backup Restore
</div>

## 3. Lựa chọn công nghệ và phạm vi lưu trữ

<table class="work-table">
  <thead>
    <tr>
      <th>Thành phần hệ thống</th>
      <th>Công nghệ sử dụng</th>
      <th>Vai trò trong kiến trúc</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Control Plane Backup</td>
      <td>Amazon S3</td>
      <td>Lưu trữ tập trung các tệp định nghĩa tài nguyên logic dạng .tar.gz.</td>
    </tr>
    <tr>
      <td>Data Plane Backup</td>
      <td>Amazon EBS Snapshots</td>
      <td>Lưu trữ dữ liệu thực tế của ứng dụng Stateful theo cơ chế Block Storage.</td>
    </tr>
    <tr>
      <td>Identity & Access</td>
      <td>EKS Pod Identity</td>
      <td>Quản lý định danh và cấp quyền hạn ngắn hạn cho Pod thông qua IAM Role.</td>
    </tr>
    <tr>
      <td>Orchestration</td>
      <td>Velero Server & Helm</td>
      <td>Quản lý vòng đời tiến trình sao lưu và phục hồi tài nguyên trong cụm.</td>
    </tr>
  </tbody>
</table>

## 4. Lưu ý kỹ thuật khi triển khai thực tế

Trong quá trình thực hành cấu hình giải pháp, hệ thống phát sinh một số vấn đề đặc thù cần phải tối chỉnh trực tiếp trên hạ tầng.

### Đặc thù môi trường Windows CMD

Do tài liệu hướng dẫn gốc được tối ưu cho môi trường Linux, khi thực thi các câu lệnh trên Windows CMD cần chuyển đổi toàn bộ cú pháp biến môi trường sang định dạng `%VARIABLE%`. Ngoài ra, quá trình sinh các file manifest cấu hình YAML từ terminal cần được bọc trong cụm câu lệnh đóng mở ngoặc hoặc sử dụng PowerShell để tránh lỗi vỡ ký tự đặc biệt.

<div class="image-holder medium">
EKS Pod Identity Association
</div>

### Lỗi kẹt Pod ở trạng thái Pending

Lỗi này xuất hiện do file deployment mẫu của AWS mặc định cấu hình thuộc tính kén node, ràng buộc với EKS Auto Mode. Nếu hạ tầng thực tế đang vận hành cụm Standard Node Group thông thường, Pod sẽ không thể lập lịch. Việc chủ động lược bỏ dòng cấu hình lọc node này trong file deployment sẽ giúp ứng dụng nhanh chóng chuyển sang trạng thái Running và nhận ổ đĩa mượt mà.

<div class="image-holder medium">
Velero Backup Completed
</div>

## 5. Lời kết

Sự kết hợp giữa Velero và Amazon EKS thông qua cơ chế xác thực Pod Identity mang lại một giải pháp khôi phục thảm họa toàn diện cho các ứng dụng có trạng thái trên môi trường Cloud. Phương án tiếp cận này không chỉ đáp ứng tốt các tiêu chuẩn an toàn bảo mật nghiêm ngặt của doanh nghiệp mà còn giảm thiểu đáng kể gánh nặng vận hành cho đội ngũ Operations khi hệ thống đối mặt với các sự cố lớn.

**Bài viết gốc:** https://aws.amazon.com/blogs/containers/back-up-and-restore-your-amazon-eks-cluster-resources-using-velero/
