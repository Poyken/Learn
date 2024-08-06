# Skeleton-loading

# SCSS:tiền thân là sass : sử dụng để kế thừa css

1. code . ở terminal tại folder scss
2. chọn gitbash chỗ terminal
3. npm i sass -g
4. Biên dịch cả folder css:
   sass scss:css
5. Lắng nghe : sass scss:css --watch

6. Biên dịch 1 file :sass scss/ex.css css/ex.css --watch
7. Nén file:chuyển thành 1 dòng loại bỏ khoảng trắng và comment
   //comment scss:sẽ ko bị nén
   /\*\*/comment css: bị nén theo luôn
8. Nén: sass scss:ex.scss css:style.min.css --style compressed

9. Cú pháp lồng selector(nên), thuộc tính ko nên dùng

- li{ >a{}
  }
  -> li>a{}(có dấu cách và giống viết css)
- a{
  &:hover(& loại bỏ dấu cách-> selector cùng cấp)
  }
  ->a:hover
- text:{
  decoration:...
  align:...
  }
  ->text-decoration:... và text-align:...(ko nên)

10. Tách file ví dụ header,footer

- folder parts chứa file \_headed.scss
  -> trình biên dịch ko biên dịch file có \_ sang css
- gọi file header.scss vào ex.scss:
  @import url:css
  @import "parts/header":scss

11. Variable scss: nên gọi ở đầu file để các component import sau có thể gọi được

- gọi biến scss ko cần thêm var

- tên file \_variables.scss sau đó import vào ex.scss
- bắt đầu bằng $
- đặt tên theo quy tắc camelCase
  ví dụ: $primaryColor,$secondaryColor...
- khác với biến css: scss nhận ngay giá trị còn css cần về trình duyệt tính toán rồi mới ra kq

12. Biến của css thì có thể lưu trữ các giá trị tại thời điểm còn biến của scss thì ko nó chỉ có thể lưu trữ giá trị cuối cùng

# Các toán tử so sánh ==:,>:,>=:,<:,<=:,!=:

# Các toán tử kết hợp: and, or,not

# Các toán tử số học:+,-,\*,/,%:chia lấy dư

# Các giá trị đúng sai: true và false

# 2 cách xử lý kế thừa trong scss

c1: sửa html thêm class
c2: sửa css thêm các class cách nhau ,

- > với scss: gọi @extend .class trong selector
- > nhược điểm: định nghĩa 1 class có thể ko dùng (.class)
- > chuyển .class-> %section-base
- > placeholder: sẽ ko xuất hiện thêm .class ko cần thiết nữa

# mixin section-base

- > khi gọi trong selector mixin sẽ bê toàn bộ code trong mixin ra selector và gọi bằng @include section-base

1. Ưu điểm: hỗ trợ cú pháp lồng và có tham số

# Nối biến

#{$var}px

- > riêng % thì ko được bởi nó sẽ trùng với placeholder
- > #{$var + 0%} hoặc #{$var}\*1%

# Đưa biến thành 1 thuộc tính

$var=color

- > #{$var}:#ccc

# đưa biến thành 1 selector

#{'.'+var} hoặc .#{var}

# Câu lệnh rẽ nhánh

@if dieukien{} @else if{}

# Vòng lặp for,each,while

1. for $i from 1 through 12-> từ 1 đến 12
   for $i from 1 to 12-> từ 1 đến 11(bỏ giá trị cuối)
2.

# Xây Gird system

# Cấu trúc folder của dự án chứa scss

- scss:
  - style.scss
  - partials
    - \_base.scss
    - \_reset.scss
    - \_mixins.scss
    - \_variables.scss
    - \_placeholder.scss
  - page
    - home
      - \_carousel.scss
      - \_product.scss
      - \_posts.scss
    - about
      - \_about.scss
  - components
    - \_footer.scss
    - \_header.scss

index.html

- images
  - icon
  - image

# Làm dự án

1. chia cột main menu->view -> show left sidebar
2. ẩn cursor:-> view>multilcursor
3. GreenChop
