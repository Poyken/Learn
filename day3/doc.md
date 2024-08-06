# Table: thead, tbody,tfoot

# Form

Phương thức mặc định là get:
-> link sẽ bổ sung thêm ? sau đó là query string và dữ liệu được đẩy lên url
nếu ko có action thì form sẽ xử lý ngay trên link đó
có action thì chuyển hướng đến action

Action:Post
->ko có query string trên url và payload là form data

là 1 biểu mẫu được tạo ra để người dùng nhập liệu hoặc tương tác với website
->trình duyệt sẽ gửi dữ liệu của các trường lên server

- trong 1 trang web có thể có nhiều form
- form không được lồng nhau

# thẻ label: nhãn dán cho field

for của lable sẽ focus vào id của field khi click

# server phân biệt giá trị các trường bằng thuộc tính name và đặt name theo quy tắc underscore

và thuộc tính placeholder chú thích giá trị nhập

# inline replace và non replace

img là inline replace nên được trình duyệt đối xử như block
-> có thể set width hight

# button mặc định là submit

type=button thường sử dụng bên js
type=reset xóa all dữ liệu form

# nếu form chỉ có 1 trường có thể dử dụng enter để submit, còn từ 2 trường trở nên thì cần nút gì cx được và ko cần content

# CSS

inline: thuộc tính style
internal:thẻ style
external:link

- các css ngang hàng với nhau và nó sẽ ko báo lỗi

  .a.b#c-> chọn element có đồng thời class a b và id c
  .a .b-> chọn class b nằm sau class a(là con lồng bn cấp cũng được)
  .a>.b-> chọn class b là con trực tiếp của class a
  .a~.b-> cùng cấp cùng cha chọn class b nằm sau a
  .a~.b .c -> ab cùng cấp chọn c là con của b nằm sau a
  .a+.b->chọn 1 class b nằm sau cùng cấp với a
  .a +.b+.c-> chọn class c nằm sau class b nằm sau class a

# độ ưu tiên : id>class>tagname

# selector attribute

.a a[target='_blank']->chọn thẻ a có target=blank trong class a
.a a[target]-> chọn thẻ a trong class a chỉ cần có thuộc tính target
.a [target]-> chọn tất cả các thẻ html có thuộc tính target
.a a[href^='abc']-> chọn tất cả thẻ a nằm trong class a có href bắt đầu bằng abc
.a a[href*='abc']->chỉ cần chứa abc trong href là được chọn
a. a[title~='abc']-> trong title phải có từ khóa abc(có dấu cách trước và sau từ) thì được chọn
.a a[href$='.vn']-> chọn all thẻ a kết thúc bằng .vn

[class^='col-']-> chọn các class bắt đầu bằng col-
\*->chọn all element
.a \*-> chọn all element là con của class a
và thường chỉ nên chỉ định ở cấp trực tiếp: .a>\*

# Thành phần giả và lớp giả

# phần tử giả

selector::tenphantu

1. before,after

- thêm phần tử vào trước và sau thẻ html
- điều kiện: phải có thuộc tính content
- before,after đều ở dạng inline

2. first-letter-> chọn kí tự đầu tiên
3. first-line-> chọn dòng đầu tiên
4. selection->chọn văn bản: chỉ chỉnh được màu nền và màu chữ
5. placeholder-> thay đổi định dạng của placeholder trong form

# Lớp giả

selector:lopgia

1. active:click và giữ chuột,focus:chỉ tác dụng trong form và các thẻ liên quan,hover:đưa chuột vào vùng đó
2. biến thẻ html thông thường có thểm focus-> thêm tabindex
3. có 1 lớp giả là checked dùng để check trạng thái của input:checkbox
   vd: input:checked+span->thay đổi style span khi input:checked
4. disable chỉ xuất hiện trong các thẻ liên quan đến form

- c1:input:[disable]+span->dùng theo kiểu attribute
- c2:input:disabled +span->dùng theo kiểu lớp giả

5. div :not (.a) span-> chọn all div loại trừ div có class a

6. div:first-child-> chọn thành phần đầu tiên trong các div

7. div:last-child-> chọn thành phần cuối cùng trong các div
   (các thành phần div phải ngang hàng và cùng cấp)
8. div:first-of-type-> chọn thành phần đầu tiên cùng type(kể cả có các thẻ khác div)-> type là loại thẻ k thể dùng cho selecttor
9. div:last-of-type :tương tự như 8. nhưng chọn element cuối cùng
10. div:nth-child(n)-> lấy phần tử thứ n(nếu n là số tự nhiên)

- nếu đối số là n hoặc 2n+1 hoặc tương tự thì n sẽ tính từ 0 và chọn các phần tử tương ứng

# Text

1. color:value

- tên màu
- mã màu
- rgba
- hsl

2. color opacity: độ đậm nhạt của color(từ 0 đến 1)
3. color transparent : màu trong suốt
4. các giá trị mặc định trong all các thuộc tính css

- initial:giá trị mặc định của trình duyệt
- inherit:giá trị kế thừa từ thành phần cha gần nhất
- unset:

# Font-size:value

1. đơn vị tuyệt đối: px và pt

- 1pt=1.3px
- mm,cm,m,inch...

2. đơn vị tương đối:

- em,rem,%,vh,vw...
- em: tương đối với thành phần cha gần nhất
- rem: tương đối với mặc định của trình duyệt
- %: tương đôi với thành phần cha gần nhất

3. có 2 cách thay đổi font-size trình duyệt

- c1:vào trình duyệt sửa
- c2: html{ font-size:10px}
  -> thường thì sẽ để 62.5% (10/16) cho phép tăng giảm theo kích thước trình duyệt

# Font-family

1. nạp font bằng @font-face-> selector đặc biệt để nhúng font khác vào và mỗi lần @font-face chỉ nạp được 1 font và nếu tên font có từ 2 từ trở lên cần bọc ""vào

- font-family:"tên font tự đặt"
- src:url("link")
  -> font quốc dân: Roboto

2. serif và sans-serif

- nếu font đầu tiên ko tải được nó sẽ chuyển về họ font mà nó tìm được gần nhất
  -> window mặc định: time new romen

3. font-weight nhận từ 100 đến 900

- light:300,reguler:400,bold:700 cũng có giá trị mặc định nên muốn gọi font light,reguler,bold ko cần @font-face từng cái mà có thể gọi theo font-weight
- mặc định font-weight của trình duyệt là 400 hoặc nó sẽ tìm cái nào gần 400 nhất để dùng và giữa 300 và 500 nó sẽ lấy cái 300

4. google font có thể download về và sử dụng bình thường qua font-face và nếu thêm bằng link thì cần thêm trước file css
5. hoặc có thể dùng @ import
6. tham khảo các bản thiết kế chứ đừng tự thiết kế : themefores,....
