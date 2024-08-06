# Custom Checkbox và Radio

# Kĩ thuật chia layout= flex

# Flex: flexible box module

1. Là 1 kỹ thuật chia layout trong css gồm 2 thành phần

- flex container
- flex item
- > khi tạo html cũng cần đảm bảo html có 2 phần(thẻ bọc và thẻ con)
- display:flex
- justify-content:căn chỉnh item theo hướng song song trục chính(mặc định ngang):flex-start|flex-end|center|space-around|space-between|space-evenly
- flex-direction:điều chỉnh hướng của trục chính (default:row)|row-reverse|column|column-reverse
- align-item: căn chỉnh các item theo hướng vuông góc với trục chính|(default:stretch:)
- flex-wrap: nowrap|wrap|wrap-reverse
- align-content:căn chỉnh hàng và cột theo trục cross
- Nếu flex-direction là row thì nó sẽ căn chỉnh hàng và nếu flex-direction là column thì sẽ căn chỉnh cột và thuộc tính này chỉ có tác dụng khi có nhiều hàng và nhiều cột
- khác với align-item chỉ đẩy các item theo hàng và chia đều theo các hàng còn align-content: đẩy tất vào nhau và ko chia khoảng cách bởi các hàng ko giãn đều
- align-item sẽ chỉ căn chỉnh item theo content
- gap: khoảng cách giữa các cột và hàng: value có thể 4 giá trị
  và có thể row-gap hoặc column-gap

2. Các thuộc tính trong flex item

- flex-grow:value:(0) number: tự tính toán để lấp đầy block
- nhưng grow giữa các item sẽ ko tỉ lệ chính xác 1:1 mà sẽ ở dạng tương đối và nếu có thằng to ra thì các thằng còn lại sẽ xẹp lại
- default : 0 : k bị giãn item và scale 1;
- flex-shrink: ko cho phép item co lại và default 1
- flex-basis: mặc định auto ( gộp) :value: thiết lập kích thước cho item có thể là width hoặc là height phụ thuộc vào flex-direction( column là width và row là height)
- width không thể nào thắng được basis cũng như height không thể hơn basis
- và basis bị chặn bởi min max width height
- flex: grow shrink basis : gộp thuộc tính
- order : sắp sếp item thường thấy trong việc sử dụng responsive và có thể chấp nhận giá trị âm
- align-self: căn chỉnh 1 item và có đầy đủ tính chất của 1 align-item và ghi đè item
