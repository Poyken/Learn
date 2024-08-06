# Closure: hàm có thể truy cập vào các thuộc tính / biến của scope chứa nó

function a(){
function b(){}
}

- Tính kế thừa và đóng gói của các hàm
- hàm lồng trong hàm chỉ hoạt động khi gọi và chỉ gọi được ở trong hàm mẹ
- > hàm con là hàm closure (b)
- > b có thể truy cập được biến và tham số của a(biến cục bộ, toàn cục của chính nó và hàm cha)

1. trong js all hàm đều là closure, đều là con của obj
2. muốn gọi hàm bên trong thì chỉ có thể return về hàm đó
3. hoặc dùng tham số (callback)

4. không có gì đảm bảo dữ liệu hàm con lấy từ hàm cha luôn có-> chuyển thành closure có dữ liệu nào thì lưu dữ liệu đó
   hàm trả về 1 hàm
   vd: function sum(a){
   return function(b){
   return a+b;
   }
   }
   -> add=sum(a)
   -> add(b)-> return a+b

5. ứng dụng của closure sử dụng trong 1 component (handleSubmit)

# Anonymous Function

# Expression Function:gán 1 biến trả về bởi 1 hàm

getMessage=function(){}
-> function là hàm ẩn danh bắt buộc phải khai báo trước
-> ghi đè hàm thì khi gọi sẽ là hàm gần nhất
-> thường thì expression sẽ gắn với const để ko bị ghi đè function

lỗi: is not defined : biến chưa định nghĩa
lỗi: is not a function: kiểu dữ liệu ko phải fn

nếu ko khai báo trước khi gọi hàm thì giá trị của nó sẽ là undefined

# IIFE:

bth : function (){}->lỗi do hàm ko tên
iife:(function(){})-> định nghĩa và thực thi luôn và hàm ko cần tên
và nếu có tham số thì : (function(var){})(var)
nếu ko gọi luôn thì nó phải có tên

# Callback

bth:
showStudent=()=>{}
var show=()=>{
showStudent()
}
show()

1. C1
   -> nếu để như vậy thì showStudent thì ko kế thừa được -> chuyển fn thành tham số(kiểu dữ liệu fn)
   -> typeof fn="function" thì fn()

- > Một hàm truyền vào hàm khác thông qua tham số và gọi hàm bị động

2. C2
   showStudent(function(){
   -> vẫn đáp ứng đk
   })

-> ứng dụng để xử lý bất đồng bộ
-> hàm ngoài chạy xong rồi mới đến hàm trong

điển hình:setTimeout và setInterval
setTimeout(callback,time)->delay gọi hàm callback sau time ms(mili giây)

- > nếu callback có tham số thì sao?

1. C1: tại hàm setTimeout thêm nhiều tham số setTimeout(callback,time,argument)
   -> do bản thân hàm setTimeout đã được thiết kế sẵn như vậy
2. C2:Tạo 1 hàm không có tham số để gọi 1 hàm có tham số
   -> callback là tên hàm
   -> handleDisplay=function(){
   callback("var")
   }
   -> setTimeout(handleDisplay,1000)

- giải thích: settimeout chạy sau 1 s-> handleDisplay-> callback

- > thực tế viết:dưới dạng anonymous

ví dụ:
getA(){
setimeout(callback,2000)
}
getB(){
setimeout(callback,1000)
}
getC(){
setimeout(callback,500)
}
getA()
getB()
getC()
nhưng: getC,getB,getA
-> làm sao để gọi đúng thứ tự a,b,c
-> dùng một hàm không tham số để gọi hàm có tham số

-> function getA(callback){
settimeout(function(){
callback()
},1000)
}
tương tự với b và c

gọi hàm:

getA(function(){
getB(getC)
})
getA->settimeout-> callback->getb->settimeout->callback->getc->settimeout->callback->getc ko có tham số bởi vì ko có lời gọi hàm-> kết thúc

- > tình trạng callback hell: lồng quá nhiều cấp

callback là biến gán bằng 1 hàm và gọi biến đó như 1 hàm
-> giải thích:lời gọi hàm chủ động và lời gọi hàm bị động khác nhau ở ()
viết cụ thể:
var handleGetB=function(){
var handleGetC=function(){
getA()
}
getC(handleGetC)
}
getB(handleGetB)

# Arguemtns:lấy đối số không giới hạn

function max(){
log(argument)
}
max(5,10,15,20)-> array like obj với key:value
và có index

- và arguments sẽ ko kế thừa từ hàm cha mà phải truyền vào từ hàm con hoặc hàm con có tham số nhận đối số là giá trị truyền vào của hàm cha
- không hỗ trợ trong arrow fn
- > sử dụng rest parameter: tham số còn lại

function generator :function có dâu \*

# Giải thuật đệ quy

- khó việc hình dung ctr chạy ntn
- nguyên tắc: gọi lại chính hàm đang định nghĩa

# String: kiểu dữ liệu nguyên thủy

trong js kiểu dữ liệu nguyên thủy hoạt động giống obj(kiểu dữ liệu tham chiếu)

- > đối tượng chuỗi

-> truy cập vào các thuộc tính và phương thức của 1 obj = dấu .
-> khi truy cập vào kiểu chuỗi thì window tự tạo ra 1 obj tạm thời để có thể truy cập vào all các thuộc tính và phương thức của chuỗi
-> hoạt động như obj
-> với chuỗi là 1 mảng kí tự

# Hàm tạo của kiểu chuỗi(Hàm bọc kiểu dữ liệu nguyên thủy)

- > Định nghĩa các phương thức và thuộc tính
  > String
  > định nghĩa thông qua prototype(String.prototype)
  > trong js mỗi kiểu dữ liệu sẽ có 1 hàm tạo(function constructor) trừ null và undefined
  > Tìm hiểu prototype string(self)
