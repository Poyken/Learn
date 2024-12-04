# UseReducer

> định nghĩa để giúp quản lý state chuyên nghiệp sử dụng tư duy vòng lặp của reduce
> bình thường thì các xử lý logic đều viết trong event handler nơi khởi tạo state
> sử dụng hook -> logic được đẩy qua hàm callback của useReducer

# Một số vấn đề khi quản lý state truyền thống

> logic update state xử lý luôn trong component thông qua event handler
> gặp khó khăn khi có quá nhiều state trong component
> kế thừa các logic update state thì lại cần phải copy paste

- > tác logic update state ra thành 1 hàm khác -> thành 1 file khác

# Gom all state thành obj

- > giải quyết state phức tạp hoặc trong component có quá nhiều state
- > state được quản lý tập trung hơn
- > dễ dàng debug hơn
- > dễ dàng quản lý state hơn
  > ....

# bản chất:

> component: tác động vào event -> call back chạy dispatch obj action thông qua hàm reducer -> cập nhật state của component -> re-render

# Gõ lại 50p day 48
