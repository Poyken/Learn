# Mảng:

- > Kiểu dữ liệu tham chiếu
  > tập hợp nhiều giá trị được lưu vào 1 biến với index và value bắt đầu từ 0
  > mảng 1 chiều và mảng đa chiều
  > bản chất là obj(là 1 dạng của obj)
  > hàm tạo của mảng là array

1. Khai báo

var users=[]->typeof ='object'
var customer=new Array()

- khởi tạo mỗi phần tử cách nhau bởi ,

2. truy cập vào element thì cần xác định được index

- index chỉ chấp nhận số

3. thay đổi giá trị element

- gán lại giá trị element

4. thêm phần tử mới vào cuối mảng

- gán max index+1 = new element
- > users[users.length]=new element

5. duyệt mảng

- for thường: for index=0,index<users.length,index++-> trả về index là number và key, kể cả index ko hợp lệ
- for in:for (var index in users) log users[index]-> trả về index là chuỗi
- for (var user of users)-> log user -> trả về element-> ko thể trả về index

6. Xóa mảng

- xác định được index cần xóa
- tạo mảng mới
- new arr=arr[count++] khi count!= index cần xóa

7. chèn 1 phần tử vào đầu mảng

- tạo 1 mảng mới với chỉ new value
- for of new arr[newarr.length]=element của old arr
