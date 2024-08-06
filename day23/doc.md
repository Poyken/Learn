# Reduce

arr.reduce(callback,initialValue)
callback 3 tham số:(prevValue,currentValue,index)

1. có initialValue:

- index từ 0
- prev bắt đầu từ init
- curr: giá trị từng phần tử mảng

2. không có initialValue

- index từ 1
- prev là arr[index=0]
- cur:giá trị từng phần tử

- prev của lần sau sẽ là return của lần trước
- giá trị cuối cùng của reduce là return của lần cuối cùng

3. Ví dụ
4. copy arr

- dùng các phương thức xử lý mảng có trả về mảng mới
- dùng spread operator
- > chỉ được cấp nông
- dùng JSON:all cấp

# Object

- thuộc tính(biến):đặc điểm
- phương thức(hàm):hành động

1. Tạo

- object literal->tạo từ hàm Object
- function constructor
- class

2. kiểm tra obj
   typeof='object' && !Array.isArray && user!==null

3. cấu tạo của object={key:value }
4. truy cập vào key của obj : obj.key hoặc obj["key"]
5. thêm key chỉ khi key ko tồn tại nếu key đã tồn tại thì thành sửa rồi :obj.key=value hoặc obj["key"]=value
6. sửa tương tự
7. xóa: delete obj.key hoặc delete obj["key"]

8. computed property
   ví dụ: var key='abc'
   user.key=[1,2,3]-> key mới là key với value [1,2,3] chứ ko phải abc
   -> fix = user.[key]=value->parse key thành abc
9. for in trả về all key
   ->obj[key]-> trả về value
10. lấy danh sách key trong object trả về mảng
    Object.keys(obj)
11. Kiểm tra obj có dữ liệu ko
    Object.keys(obj).length=true
12. lấy danh sách value->mảng
    Object.values(obj)
13. lấy danh sách key và value trong obj -> mảng 2 chiều gồm key và value
    Object.entries(obj)
14. chuyển mảng 2 chiều thành obj
    Object.fromEntries(obj)
15. nối obj
    Object.assign(obj1,obj2)-> lưu vào obj1

- > không thay đổi obj ban đầu:
  > Object.assign(Object.assign({},user),user2)
- > không dùng hàm nối 2 obj lại: lặp qua từng obj lấy key và value của obj2 trả cho obj1
