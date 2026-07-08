---
title: "Bản đề xuất"
weight: 2
---

{{% warning %}}
⚠️ Khuyến cáo: Toàn bộ nội dung bên dưới chỉ mang tính chất định hướng và tham khảo. Bạn vui lòng tự diễn đạt lại bằng văn phong của mình, tuyệt đối không sao chép y nguyên bất kỳ đoạn nào (bao gồm cả dòng nhắc nhở này) vào bài báo cáo chính thức.
{{% /warning %}}

<p class="intro-note">
Tại phần này, bạn cần tóm tắt các nội dung trong workshop mà bạn dự tính sẽ làm.
</p>

<div class="workshop-big-title">
IOT WEATHER PLATFORM FOR LAB RESEARCH
</div>

## Giải pháp AWS Serverless hợp nhất cho giám sát thời tiết thời gian thực

## 1. Tóm tắt điều hành

IoT Weather Platform được thiết kế dành cho nhóm ITea Lab tại TP. Hồ Chí Minh nhằm nâng cao khả năng thu thập và phân tích dữ liệu thời tiết. Nền tảng hỗ trợ tối đa 5 trạm thời tiết, có khả năng mở rộng lên 10–15 trạm, sử dụng thiết bị biên Raspberry Pi kết hợp cảm biến ESP32 để truyền dữ liệu qua MQTT.

Nền tảng tận dụng các dịch vụ AWS Serverless để cung cấp giám sát thời gian thực, phân tích dự đoán và tiết kiệm chi phí, với quyền truy cập giới hạn cho 5 thành viên phòng lab thông qua Amazon Cognito.

## 2. Tuyên bố vấn đề

### Vấn đề hiện tại

Các trạm thời tiết hiện tại yêu cầu thu thập dữ liệu thủ công, khó quản lý khi có nhiều trạm. Không có hệ thống tập trung cho dữ liệu hoặc phân tích thời gian thực, và các nền tảng bên thứ ba thường tốn kém và quá phức tạp.

### Giải pháp

Nền tảng sử dụng AWS IoT Core để tiếp nhận dữ liệu MQTT, AWS Lambda và API Gateway để xử lý, Amazon S3 để lưu trữ bao gồm data lake, và AWS Glue Crawlers cùng các tác vụ ETL để trích xuất, chuyển đổi, tải dữ liệu từ S3 data lake sang một S3 bucket khác để phân tích.

AWS Amplify với Next.js cung cấp giao diện web, và Amazon Cognito đảm bảo quyền truy cập an toàn. Tương tự như Thingsboard và CoreIoT, người dùng có thể đăng ký thiết bị mới và quản lý kết nối, nhưng nền tảng này hoạt động ở quy mô nhỏ hơn và phục vụ mục đích sử dụng nội bộ.

Các tính năng chính bao gồm bảng điều khiển thời gian thực, phân tích xu hướng và chi phí vận hành thấp.

### Lợi ích và hoàn vốn đầu tư

Giải pháp tạo nền tảng cơ bản để các thành viên phòng lab phát triển một nền tảng IoT lớn hơn, đồng thời cung cấp nguồn dữ liệu cho những người nghiên cứu AI phục vụ huấn luyện mô hình hoặc phân tích.

Nền tảng giảm bớt báo cáo thủ công cho từng trạm thông qua hệ thống tập trung, đơn giản hóa quản lý và bảo trì, đồng thời cải thiện độ tin cậy dữ liệu.

Chi phí hàng tháng ước tính khoảng 0,66 USD theo AWS Pricing Calculator, tổng cộng khoảng 7,92 USD cho 12 tháng. Tất cả thiết bị IoT đã được trang bị từ hệ thống trạm thời tiết hiện tại, không phát sinh chi phí phát triển thêm. Thời gian hoàn vốn dự kiến từ 6–12 tháng nhờ tiết kiệm đáng kể thời gian thao tác thủ công.

## 3. Kiến trúc giải pháp

Nền tảng áp dụng kiến trúc AWS Serverless để quản lý dữ liệu từ 5 trạm dựa trên Raspberry Pi, có thể mở rộng lên 15 trạm. Dữ liệu được tiếp nhận qua AWS IoT Core, lưu trữ trong S3 data lake và xử lý bởi AWS Glue Crawlers và ETL jobs để chuyển đổi và tải vào một S3 bucket khác cho mục đích phân tích.

Lambda và API Gateway xử lý bổ sung, trong khi Amplify với Next.js cung cấp bảng điều khiển được bảo mật bởi Cognito.

<div class="image-holder large">
Khu vực đặt hình: IoT Weather Station Architecture
</div>

<div class="image-holder large">
Khu vực đặt hình: IoT Weather Platform Architecture
</div>

### Dịch vụ AWS sử dụng

<ul>
  <li><strong>AWS IoT Core:</strong> Tiếp nhận dữ liệu MQTT từ 5 trạm, có thể mở rộng lên 15 trạm.</li>
  <li><strong>AWS Lambda:</strong> Xử lý dữ liệu và kích hoạt Glue jobs.</li>
  <li><strong>Amazon API Gateway:</strong> Giao tiếp với ứng dụng web.</li>
  <li><strong>Amazon S3:</strong> Lưu trữ dữ liệu thô và dữ liệu đã xử lý.</li>
  <li><strong>AWS Glue:</strong> Crawlers lập chỉ mục dữ liệu, ETL jobs chuyển đổi và tải dữ liệu.</li>
  <li><strong>AWS Amplify:</strong> Lưu trữ giao diện web Next.js.</li>
  <li><strong>Amazon Cognito:</strong> Quản lý quyền truy cập cho người dùng phòng lab.</li>
</ul>

### Thiết kế thành phần

<ul>
  <li><strong>Thiết bị biên:</strong> Raspberry Pi thu thập và lọc dữ liệu cảm biến, gửi tới IoT Core.</li>
  <li><strong>Tiếp nhận dữ liệu:</strong> AWS IoT Core nhận tin nhắn MQTT từ thiết bị biên.</li>
  <li><strong>Lưu trữ dữ liệu:</strong> Dữ liệu thô lưu trong S3 data lake, dữ liệu đã xử lý lưu ở một S3 bucket khác.</li>
  <li><strong>Xử lý dữ liệu:</strong> AWS Glue Crawlers lập chỉ mục dữ liệu, ETL jobs chuyển đổi để phân tích.</li>
  <li><strong>Giao diện web:</strong> AWS Amplify lưu trữ ứng dụng Next.js cho bảng điều khiển và phân tích thời gian thực.</li>
  <li><strong>Quản lý người dùng:</strong> Amazon Cognito giới hạn 5 tài khoản hoạt động.</li>
</ul>

## 4. Triển khai kỹ thuật

### Các giai đoạn triển khai

Dự án gồm 2 phần: thiết lập trạm thời tiết biên và xây dựng nền tảng thời tiết. Mỗi phần trải qua 4 giai đoạn:

<table class="work-table">
  <thead>
    <tr>
      <th>Giai đoạn</th>
      <th>Nội dung thực hiện</th>
      <th>Thời gian dự kiến</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Nghiên cứu Raspberry Pi với cảm biến ESP32 và thiết kế kiến trúc AWS Serverless.</td>
      <td>1 tháng trước kỳ thực tập</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Sử dụng AWS Pricing Calculator để ước tính chi phí và kiểm tra tính khả thi.</td>
      <td>Tháng 1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Tinh chỉnh kiến trúc để tối ưu chi phí và đảm bảo hiệu quả giải pháp.</td>
      <td>Tháng 2</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Lập trình Raspberry Pi, AWS services với CDK/SDK và ứng dụng Next.js, sau đó kiểm thử và đưa vào vận hành.</td>
      <td>Tháng 2–3</td>
    </tr>
  </tbody>
</table>

### Yêu cầu kỹ thuật

<ul>
  <li><strong>Trạm thời tiết biên:</strong> Cảm biến nhiệt độ, độ ẩm, lượng mưa, tốc độ gió, vi điều khiển ESP32, Raspberry Pi làm thiết bị biên.</li>
  <li><strong>Hệ điều hành:</strong> Raspberry Pi chạy Raspbian, sử dụng Docker để lọc dữ liệu.</li>
  <li><strong>Truyền dữ liệu:</strong> Gửi khoảng 1 MB/ngày/trạm qua MQTT thông qua Wi-Fi.</li>
  <li><strong>Nền tảng AWS:</strong> AWS Amplify, Lambda, AWS Glue, S3, IoT Core và Cognito.</li>
  <li><strong>Công cụ triển khai:</strong> Sử dụng AWS CDK/SDK để lập trình và cấu hình tài nguyên.</li>
</ul>

## 5. Lộ trình & Mốc triển khai

<ul>
  <li><strong>Trước thực tập:</strong> 1 tháng lên kế hoạch và đánh giá trạm cũ.</li>
  <li><strong>Tháng 1:</strong> Học AWS và nâng cấp phần cứng.</li>
  <li><strong>Tháng 2:</strong> Thiết kế và điều chỉnh kiến trúc.</li>
  <li><strong>Tháng 3:</strong> Triển khai, kiểm thử và đưa vào sử dụng.</li>
  <li><strong>Sau triển khai:</strong> Nghiên cứu thêm trong vòng 1 năm.</li>
</ul>

## 6. Ước tính ngân sách

Có thể xem chi phí trên AWS Pricing Calculator hoặc tải tệp ước tính ngân sách.

### Chi phí hạ tầng

<table class="work-table">
  <thead>
    <tr>
      <th>Dịch vụ</th>
      <th>Mục đích sử dụng</th>
      <th>Chi phí ước tính</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AWS Lambda</td>
      <td>1.000 request, 512 MB lưu trữ</td>
      <td>0,00 USD/tháng</td>
    </tr>
    <tr>
      <td>Amazon S3 Standard</td>
      <td>6 GB, 2.100 request, 1 GB quét</td>
      <td>0,15 USD/tháng</td>
    </tr>
    <tr>
      <td>Truyền dữ liệu</td>
      <td>1 GB vào, 1 GB ra</td>
      <td>0,02 USD/tháng</td>
    </tr>
    <tr>
      <td>AWS Amplify</td>
      <td>256 MB, request 500 ms</td>
      <td>0,35 USD/tháng</td>
    </tr>
    <tr>
      <td>Amazon API Gateway</td>
      <td>2.000 request</td>
      <td>0,01 USD/tháng</td>
    </tr>
    <tr>
      <td>AWS Glue ETL Jobs</td>
      <td>2 DPU</td>
      <td>0,02 USD/tháng</td>
    </tr>
    <tr>
      <td>AWS Glue Crawlers</td>
      <td>1 crawler</td>
      <td>0,07 USD/tháng</td>
    </tr>
    <tr>
      <td>AWS IoT Core MQTT</td>
      <td>5 thiết bị, 45.000 tin nhắn</td>
      <td>0,08 USD/tháng</td>
    </tr>
    <tr>
      <td><strong>Tổng</strong></td>
      <td><strong>Chi phí hạ tầng AWS</strong></td>
      <td><strong>0,7 USD/tháng, khoảng 8,40 USD/12 tháng</strong></td>
    </tr>
  </tbody>
</table>

### Chi phí phần cứng

Phần cứng dự kiến khoảng **265 USD một lần**, bao gồm Raspberry Pi 5 và các cảm biến cần thiết.

## 7. Đánh giá rủi ro

### Ma trận rủi ro

<table class="work-table">
  <thead>
    <tr>
      <th>Rủi ro</th>
      <th>Mức ảnh hưởng</th>
      <th>Xác suất</th>
      <th>Chiến lược giảm thiểu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mất mạng</td>
      <td>Trung bình</td>
      <td>Trung bình</td>
      <td>Lưu trữ cục bộ trên Raspberry Pi với Docker.</td>
    </tr>
    <tr>
      <td>Hỏng cảm biến</td>
      <td>Cao</td>
      <td>Thấp</td>
      <td>Kiểm tra định kỳ và dự phòng linh kiện.</td>
    </tr>
    <tr>
      <td>Vượt ngân sách</td>
      <td>Trung bình</td>
      <td>Thấp</td>
      <td>Cảnh báo ngân sách AWS và tối ưu dịch vụ.</td>
    </tr>
  </tbody>
</table>

### Kế hoạch dự phòng

<ul>
  <li>Quay lại thu thập thủ công nếu AWS gặp sự cố.</li>
  <li>Sử dụng CloudFormation để khôi phục cấu hình liên quan đến chi phí.</li>
</ul>

## 8. Kết quả kỳ vọng

### Cải tiến kỹ thuật

Dữ liệu và phân tích thời gian thực thay thế quy trình thủ công. Hệ thống có thể mở rộng từ 5 trạm lên 10–15 trạm trong tương lai.

### Giá trị dài hạn

Nền tảng có thể cung cấp dữ liệu trong 1 năm cho nghiên cứu AI và có thể tái sử dụng cho các dự án IoT khác trong tương lai.
