# Query param

1. Vanila:
   params=''
   for (var key in query){
   var sub=`key=query[key]`
   params+=sub
   }
   params=params.slice(0,params.length-1)
2. hàm

var params=Object.entries(query ).map(function(item){
return item.join("=");
}).join("&").replaceAll(" ","+")

# Tách từng thành phần của query params

protocol
domain
path
query{
name
email
keyword
}

# Object>js>ex02

# Object Prototype:là 1 obj cho phép người dùng định nghĩa thuộc tính hay phương thức cho các obj được tạo ra từ Object(kế thừa )

# This trong Object và combine

# Function Constructor

- tạo 1 hàm(có hoặc không có tham số)
- định nghĩa thuộc tính=this
- định nghĩa phương thức=this
- khởi tạo đối tượng từ hàm
- action với đối tượng

1. ưu điểm

- > đóng gói và kế thừa



46:34 / 3:17:04