# useEffect có 3 giai đoạn

> mounted: component được đưa vào trong dom ([])
> update: dựa vào biến dependencies hoặc null hoặc undefined
> component trước khi được xóa khỏi dom

# quá trình loại bỏ component và thêm component vào dom là 2 giai đoạn và nếu call api ở bên component con mà toggle mounting component con thì call api sẽ được call đi call lại mặc dù đã đặt trong useEffect

> mounting:
> unmounting:chỉ cần return về 1 cái func trong callback của useEffect

# Clean up của useEffect là dọn dẹp của lần trước nó với dependencies là biến được state thay đổi và nó sẽ chạy trước (unmount cái cũ rồi mới mount cái mới)

> dùng để:hủy các biến kh dùng, timer,event,storage:blob,localStorage,các api đang thực thi
> ví dụ:đang upload dở bấm nút cancel để hủy request

# Chốt lại thứ tự chạy của useEffect

1. State thay đổi
2. component re-render
3. update UI
4. clean up(nếu có)
5. callback useEffect

# abourt request js-> cancel request

# một tính năng có clean up là preview image

# rò rỉ bộ nhớ là những thứ kh dùng nhưng kh được xóa đi

> ví dụ chức năng preview ảnh bằng blob nếu kh dùng ảnh đã được chọn trước đó cần phải xóa ảnh đi = useEffect và revokeObjectURL

# Ref

> chức năng của react dùng để tham chiếu
> giữ nguyên kết quả gần nhất khi re-render
> tham chiếu tới các react element để trả về dom element
> có thể thay đổi trực tiếp

# VÀ KHI REF THAY ĐỔI COMPONENT KHÔNG BỊ RE_RENDER

- > đơn giản là 1 obj
  > trong class component : createRef để tạo ref
  > trong function component: useRef để tạo ref

# nên tư duy dùng state ưu tiên kh thể dùng thì mới dùng ref

> ngoài việc đưa vào ref một element thì có thể đưa vào 1 hàm để nhận các element giống nhau
> ví dụ: nhiều input cùng 1 ref mà muốn lấy all input elements thì ref={(ref)=>{log(ref)}}

# Forward ref: chuyển tiếp ref sang component khác-> HOC :higher order component

# useImperativeHandle: mục đích bảo vệ các component và có thể custom các hành động đối với ref

> 3 tham số : ref muốn custom, handle là 1 hàm, dependencies: đa số empty string
> tự định nghĩa lại phương thức cần dùng ở bên component con để bảo vệ ref

# khi component cha bị re-render thì component con sẽ tự động re-render

> làm thế nào để component con kh bị re-render
> HOC: react.memo: ngăn tình trạng component con bị re-render kh cần thiết
> bọc bên ngoài <Input>
> vậy khi nào <Input> bị re-render
> khi props của component con thay đổi

# memo: kĩ thuật memoization

# khi component cha bị unmount thì component con cũng bị unmount
