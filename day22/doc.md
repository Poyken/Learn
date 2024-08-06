# Phương thức xử lý mảng

- log Array.prototype-> các phương thức
- log [Array]-> phương thức tĩnh của array
- truy cập phương thức tĩnh: tên hàm tạo . tên phương thức
- > Array.isArray()-> kiểm tra 1 biến có phải mảng?
  > Array.from()-> ép kiểu về mảng

- truy cập phương thức non-static:phụ thuộc vào đối tượng

1. forEach(callback)-> lặp trả về value,index,callback

- > chỉ dùng để duyệt đến cuối cùng ko dừng được và trả về undefined

2. map(callback)->trả về 1 mảng mới từ mảng ban đầu

- > giá trị phần tử mảng mới phụ thuộc vào callback
  > số lượng phần tử mảng mới = mảng ban đầu

3. filter(callback)-> trả về mảng mới với các giá trị khi callback trả về true
