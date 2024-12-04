# Props: truyền giá trị vào thuộc tính của 1 component được gọi là truyền props-> trả về 1 obj: tham số là props(props.thuộc tính)

- > detructuring luôn ở trên tham số cho tiện
- > props có thể truyền xuông component con cũng có thể lên cha = tip trick

# nếu props là 1 obj->{...obj} ví dụ : <Header {...obj} />-> truyền obj xuống

# pass nội dung ở giữa các thẻ components: children: 1 obj element : child elements có thể là bất cứ cái gì

-> cú pháp: <Header {...obj}>abc</Header>

# thêm props là 1 function là cách truyền dữ liệu từ con lên cha

- > bth truyền cha -> props-> con
  > gọi props function dưới con truyền tham số của con thì cha sẽ nhận tham số đó và chạy trên cha với ý nghĩa gọi biến như func và hàm có nhiều tên

# render props đẩy dữ liệu con lên cha

# PropsType: ràng buộc rõ ràng kiểu dữ liệu có thể nhận bởi props

cú pháp: <tên component>.propsTypes= {<thuộc tính>: PropTypes.<type>(.isRequired:nếu bắt buộc có tham số),}
type=(array,bool,func...)

- > áp dụng dể ràng buộc chặt chẽ hơn

# State

- > trong function component jsx chỉ có 2 tác dụng: ui và truyền props
  > -> tương tác -> gây nhiều vấn đề
- > sinh ra hook: thao tác với các chức năng khác của react để functional có các chức năng giống như class component
  > bản chất là 1 hàm đặc biệt bắt đầu bằng từ khóa use
  > chỉ hoạt động trong component

# State: trạng thái của component, chỉ chứa dữ liệu component, chỉ hoạt động trong phạm vi của 1 component, state thay đổi component tự re-render, không thay đổi trực tiếp được state mà phải thông qua hàm set, khi cập nhật state sẽ kh thay đổi luôn mà sẽ ưu tiên re-render trước

# Props không thể cập nhật dữ liệu từ chính nó-> tạo state để thay đổi

# State: gồm giá trị state và hàm thay đổi giá trị state

> mỗi lần state thay đổi thì cả function sẽ chạy lại và nó sẽ ưu tiên re-render trước rồi mới update giá trị state(UI)
> giải thích: việc re-render khi state thay đổi là việc so sánh dom ảo giữa trước và sau update state sau đó cập nhật vào dom thật, việc update UI là việc của trình duyệt sẽ hiển thị dom thật sau khi được re-render,sau đó useEffect sẽ chạy các callback có thể là callAPI hoặc tương tác dom... việc mà sau khi updateUI mới có thể làm được

# Phân biệt re-render và repaint

> re-render: vì react sử dụng dom ảo(sao chép từ dom thật)-> state thay đổi-> dom ảo tính toán sự thay đổi giữa 2 lần-> re-render cập nhật dom thật
> re-paint:chỉ nháy count -> repaint lại phần khác của html so với lần trước-> chỉ khi giao diện thay đổi với re-paint
> còn re-render chỉ khi state thay đổi

# tham số được gọi trong hàm set mặc định là giá trị của lần render trước hoặc giá trị khởi tạo nếu first sau đó return về new value state

> cách cập nhật state thứ 2

# khi state thay đổi việc đầu tiên làm là re-render

- > công việc phụ sẽ chạy sau khi re-render: side-effect
- > useEffect: chuyển công việc phù hợp với flow của react và chạy sau khi update UI

# use Effect(callback,dependencies)

- > dependencies: điều kiện hoạt động của của use effect
  > []:hoạt động khi component được render pần dầu tiên
  > null hoặc undefined:component được re-render thì callback sẽ hoạt động
  > [var1,var2,var3,...]: chỉ 1 biến thay đổi thì callback sẽ hoạt động
