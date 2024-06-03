# các thẻ trong nhóm inline

a:
href: đường dẫn click chuyển hướng
target:
\_blank: click chuyển tab mới
\_self:click mở tab hiện tại (mặc định)
title:hiển thị lên title khi hover

- thẻ đặc biệt có thể bọc được block: a

# các ví dụ

href='fullstack.edu.vn'
->nó sẽ hiểu fullstack.edu.vn là một file trong day2
href='http...'
-> sẽ chuyển thành https do cấu hình trên server
href='//fullstack.edu.vn'
-> lấy giao thức hiện tại của web sau đó nối vào
href=''
->tải lại trang (trỏ đến url hiện tại)
href=#
->trả về đầu trang web mà ko tải lại

# đường dẫn tương đối và tuyệt đối

../:back ra cấp ngoài
./:cùng cấp thư mục hiện tại (mặc định ko cần)
/:đứng từ thư mục gốc của dự án

# 3 thứ để phân biệt trang hiện tại với trang khác:

giao thức, domain và port

# cơ chế bookmark của thẻ a

nó sẽ tự khớp với id tương ứng và chuyển đến địa chỉ element

# thẻ img

width :50%-> tỉ lệ theo kích thước của thành phần cha gần nhất
chỉ set 1 thì cái còn lại sẽ auto
alt:hiển thị text khi ảnh lỗi và liên quan đến seo
title:hiển thị text khi hover
-> làm sao từ khóa tìm kiếm tìm được ảnh liên quan
-> dựa vào alt và nhiều thứ khác

# iss:khoảng trắng giữa các ảnh bên dưới và bên phải

khoảng trắng này là đặc điểm của thẻ inline
bên phải:là do sự cách nhau của các thẻ img tương đương với khoảng cách giữa các text và tối thiểu có 1 dấu cách này
->để 1 thẻ bọc bên ngoài font-size=0 và thẻ img 100%
bên dưới:là do đường base line của chữ và thẻ img nằm trong nhóm inline được trình duyệt đối xử như text
->chuyển ảnh thành block

# thẻ br chỉ sử dụng trong đoạn text

# các thẻ strong em ins del giống các thẻ b i u s nhưng khác ở mặt ngữ nghĩa để nhấn mạnh

-> tìm hiểu web accessibility: chủ yếu là các thị trường nước ngoài

# thẻ pre gần giống thẻ code đều giữ nguyên định dạng text

# thẻ chưa được w3c công nhận thì phải thêm prefix và có thể auto prefix online với các trình duyệt bản cũ

# table

border :độ dày table
width : chiều dài
height:ko set -> auto
colspan: gộp cột
rowspan:gộp hàng

- vẽ table trong code thì phải vẽ theo hàng
  note: muốn gộp hàng hay cột cứ vẽ đủ rồi gộp
