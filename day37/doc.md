# Vấn đề khi bọc async: xử lý dom(kh xử lý trong promise mà return ra ngoài)

- > Lại phải then

# Bắt catch:(e:exception )

- tại 1 thời điểm chỉ xảy ra 1 lỗi
- bắn lỗi xuống catch: throw new error('content ')

# Sự khác nhau giữa return kh await và có await:

- return kh có await -> trả về y nguyên promise-> dễ bắt catch ở ngoài
- còn có return -> reslove sau đó trả về promise -> khó catch

# API:giao giện lập trình ứng dụng(app programing interface)

- thao tác giữa các bên: giao tiếp giữa app với app

# web api: api phục vụ cho ứng dụng web

- bao gồm: url+method+request(head +body)+respond(head+body)

# api trên hệ điều hành

# api ứng dụng và framework

# Json sever: giả lập api để học frontend

# gọi api trong js:

- thư viện: axios jquery ajax
- hàm có sẵn: xmlhttprequest,fetch

# fetch(url,options)

url: của api
options: obj thiết lập http request

- > trả về 1 promise

# CRUD với jsonserver
