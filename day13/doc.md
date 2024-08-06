# Responsive

- thiết kế web đáp ứng dựa vào kích thước trình duyệt để thay đổi giao diện
- ngoài responsive, có thể dùng adaptive để design

# Breakpoint

- là một điểm dừng mà tại đó giao diện sẽ thay đổi(kích thước màn hình)
- không có breakpoint cố định trong all các dự án mà phụ thuộc vào cấu trúc giao diện của dự án
- dựa vào các breakpoint phổ biến trên các css framework

# Các trường phái Responsive

1. Desktop first
2. Mobile first

# Media query

- dựa vào breakpoint để viết
- dựa vào cách responsive

# Desktop first

- viết 1 chiều sẽ pass qua được lỗi 0.98
- viết ở ngoài sẽ là viết cho màn hình lớn nhất

```css
@media screen and (max-width: 1399px) {
  //selector css
}
@media screen and (max-width: 1199px) {
  //selector css
}
@media screen and (max-width: 991px) {
  //selector css
}
@media screen and (max-width: 767px) {
  //selector css
}
@media screen and (max-width: 575px) {
  //selector css
}
```

# Mobile first

- viết ở ngoài sẽ là viết cho màn hình nhỏ nhất

```css
@media screen and (max-width: 575px) {
  //selector css
}
@media screen and (min-width: 768px) {
  //selector css
}
@media screen and (min-width: 992px) {
  //selector css
}
@media screen and (min-width: 1200px) {
  //selector css
}
@media screen and (min-width: 1400px) {
  //selector css
}
```

# Meta viewport: giữ nguyên tỉ lệ phóng giữa desktop và mobile

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

-> mặc định theo chiều dài thiết bị và tỉ lên phóng là 1.0
