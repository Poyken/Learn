# Tại sao js chạy được-> JS engine(chrome v8 not only) và JS runtime(môi trường chạy js) với Brower API -> trình duyệt và Node

# Nếu js chạy trên brower thì web apis sẽ bọc v8 và nếu js chạy trên server thì c++ sẽ bọc v8

# Singer thread: tại 1 thời điểm chỉ chạy 1 tác vụ

# Cấu tạo của js engine gồm HEAD:bộ nhớ và call stack:nơi chứa các tác vụ cần gọi và 1 thời điểm chỉ có 1 tác vụ

# Bất đồng bộ

-> callback(hell)->promise(chaining)->async

# Promise dùng để xử lý tác vụ bđb theo thứ tự a.b.c với 3 trạng thái pending,fulfilled,reject với 2 tham số resolve và reject đều là hàm trả về

# khi nào resolve or reject được gọi thì then or catch và finally mới được chạy và trả về giá trị

# ví dụ finally: đặt hàng thanh toán đều tắt đi cho đù success or failed

# 2 cách giải quyết bài toán nhiều promise : thô và promise all

# Chú ý tối ưu code(kh lạm dụng destructuring)

# Async await: không cần .then đưa vào callback mà viết tuần tự, mỗi lần gọi promise() là 1 lần gọi hàm then, nhưng nó sẽ kh chạy được cần bọc ra ngoài 1 func async trước promise cần 1 await,mỗi lần await là 1 lần then
