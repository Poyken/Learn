# Khởi đầu mới

- Lập trình web là công việc sử dụng các kĩ thuật lập trình thông qua các ngôn ngữ lập trình web để tạo ra hệ thống website hoàn chỉnh có tương tác với csdl và tương tác với người dùng
  ->developer
- Trong web có 2 phần frontend và backend
- Frontend: là phần giao diện người dùng nhìn thấy và có thể tương tác
- nhiệm vụ của frontend là xây dựng giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng
- Backend là những tính năng ở phía sau web mà ko nhìn thấy là nơi lưu trữ và xử lý dữ liệu
- Backend sẽ tiếp nhận yêu cầu dữ liệu frontend và trả về frontend

# Lộ trình học Frontend

html: nội dung hiển thị
css:style,layout
sass/less:ngôn ngữ tiền xử lý css
css framework:dựng sẵn các class-> lấy về sử dụng
javascript: ngôn ngữ lập trình
js framework: nextjs và thư viện :react
-> project->deploy

# Lộ trình học backend

Javascript-> SQL-> Framework->Project->deploy
js chạy thông qua môi trường runtime là nodejs

# Phương pháp học

gõ lại->hiểu->tự làm->tăng độ khó-> tư duy làm ra sản phẩm

# website hoạt động thế nào

hoạt động theo mô hình client-server :máy khách và máy chủ
client: gửi 1 req qua internet->server ->hiển thị res
server :tiếp nhận req trả vể res
User->browser->enter url(req domain)->dns server->ip -> req ip->server res->client display res

server có địa chỉ ip:192.168.202.111 là địa chỉ duy nhất ko trùng
domain: cấu hình domain trỏ về ip-> chỉ cần nhớ domain
dns server : từ domain trả về ip web

lần đầu truy cập truy cập thẳng vào ip sẽ nhanh hơn domain vì không phải qua dns server
và sau lần đầu trình duyệt sẽ cache ip của domain đó nếu trình duyệt ko có thì nó sẽ đi ra cấp hệ điều hành kiểm tra trong file phân giải ip
nếu hệ điều hành ko có thì router , router ko có thì ra cung cấp nhà mạng có 1 máy chủ isp(internet service provide ) (fpt,vnpt...)
nếu ko có thì mới đi đến dns server

ip của máy chủ có thể thay đổi được-> thuê server khác->
câu hỏi: trước đó đã bị cache server cũ-> truy cập lại?
->> cần phải xóa cache sẽ ko lỗi vặt
xóa cache nhiều cấp độ:
và vpn cũng cache được cái đó

client và server giao tiếp với nhau thông qua giao thức http
bao gồm http res và req:
đặc điểm: ko liên tục req->res->finish
khác với socket liên tục

# cấu trúc url :https://fullstack-nodejs.fullstack.edu.vn

fullstack-nodejs: sub domain
fullstack.edu.vn: tên miền chính
port: cổng mặc định thì trình duyệt tự bỏ đi
https:443 và http:80
path: đường dẫn tài nguyên web
?...:query string
#...: hash
.com.edu.vn: tên miền cấp 2(2 loại cấp 1 và cấp 2)

# html

html ko phải là ngôn ngữ lập trình mà là ngôn ngữ đánh dấu siêu văn bản, trình duyệt sẽ biên dịch html-> nội dung trang web, html được cấu tạo bởi các thẻ

thẻ có thẻ đủ và thẻ rỗng(thẻ tự đóng)
thẻ inline và block
cấu trúc trang html:
doctype: thông báo trình duyệt biết đây là tài liệu html
html: thẻ root
head: chứa thẻ title:quy định title và meta:bao gồm các thẻ meta mô tả, meta hỗ trợ tiếng việt, meta title....
body: nội dung trang web

cấu trúc thẻ đủ gồm <tên thẻ thuộc tính...>nội dung</tên thẻ>
và thẻ rỗng :<tên thẻ thuộc tính/>
mở và đóng thẻ đúng thứ tự có thể lồng nhau
inline:nằm trong thẻ block và có một số ngoại lệ

inline:đứng cạnh nhau nằm trên 1 dòng và độ rộng bằng với độ rộng nội dung chỉ phát sinh dòng mới khi tổng độ rộng vượt quá thẻ cha
block: nó phát sinh thêm 1 dòng mới và độ rộng =100% độ rộng thành phần cha gần nhất

Các thẻ trong nhóm block: h1->h6,p,div,ul li, ol li,...
còn lại là inline
thẻ h1->h6 : thẻ tiêu đề (đúng sematic)
trên 1 trang web chỉ có 1 thẻ h1
và thứ tự là h1 h2 h3 h4 ko thể ko có h2 mà đã có h3 được

thẻ p chỉ chứa text
thẻ non-sematic: thẻ ko có ngữ nghĩa: div span
và thẻ danh sách không có thứ tự ul li (phục vụ cho nav chuẩn sematic) và ol li có thứ tự
-các bộ máy tìm kiếm sẽ sử dụng ul li ol li để phục vụ cho điều hướng(tùy theo bài toán) và li ko thể đặt ở ngoài
-thẻ trích dẫn blockquote: để thể hiện một nội dung từ web khác
-thẻ pre : giữ nguyên định dạng và nếu muốn trình duyệt ko biên dịch thẻ thì sử dụng entity html &lt;... có thể tra cứu

# lỗi xss: người dùng nhập sao thay đổi vậy

cần xử lý chuỗi hiển thị nếu người dùng nhập 1 đoạn code
=entity html

# các thẻ block sematic tương tự div của html5

nav,header,section,article,aside,footer,main,figure
