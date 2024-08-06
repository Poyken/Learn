# Background

-> thay đổi màu nền và hình nền của 1 element

1. background-color:value-> thay đổi màu nền

- rgba,hsl,hex,tenmau,mamau

2. background-image:url(link)
   -> thiết lập ảnh nền
3. background-repeat :repeat,no-repeat,repeat-x,prepeat-ý
   -> lặp ảnh nếu kích thước ảnh nhỏ hơn element
4. background-position:(default left top)
   value:px hoặc left hoặc % và có thể âm
   -> thiết lập vị trí của ảnh nền
5. css sprite: dùng potision
6. background-size:

- 1 đối số: width height:auto
- 2 đối số: width
- value:100%-> full theo width height auto

2 giá trị tương đối: cover và contain

- cover:fit theo chiều ngang (height auto)
- contain:fit theo chiều dọc(height 100% width auto)
  -> width sẽ ko thể vượt quá vw nên height sẽ dừng lúc đó

7. background-attachment: thiết lập cố định background khi scroll(default scroll)

- fixed:height 100% theo vh nhưng width sẽ có lại theo height cho đúng tỷ lệ

8. background-clip: tự tìm hiểu

# background tổng hợp

background:color image repeat position / size attachment
background: black url no-repeat left top /100% auto fixed

# Border

# Width height không áp dụng với inline

-> viewport: là phần nhìn thấy được bao bởi browser

- % tỷ lệ với thành phần cha
- vw: viewport width
- bh:viewport height

# ngoại lệ các thẻ inline-replace có thể sử dụng được width height hoặc các thẻ liên quan đến form(bởi vì có sự can thiệp của trình duyệt)

# cơ chế inline-replaced: ví dụ img và input

-> chưa có src-> width x height:0x0
->có src->tải ảnh về-> tính toán width height-> img đóng vai trò là khung ảnh-> và trình duyệt tự chuyển về inline-block để có thể set được width height để có thể nhìn thấy

->input : chưa có nội dung-> có nội dung-> thay đổi width height-> phải chuyển về inline-block

# max-width và max-height ,min-width và min-height

- kích thước vượt quá sẽ bị chặn bởi max và nhỏ quá sẽ bị chặn bởi min

# Opacity

# Overflow

- là thuộc tính xử lý các nội dung bị tràn khung

1.  visible : default : giữ nguyên
2.  hidden: ẩn đi theo cả 2 chiều
3.  scroll: luôn tạo thanh cuộn
4.  auto: chỉ tạo thanh cuộn khi đủ đk
5.  overflow-x: chỉ theo x hoặc theo y

# Padding: value (value value value):trái phải áp dụng với inline còn 4 hướng chỉ áp dụng với block

1. inline không có padding và margin theo chiều dọc do inline tương ứng text nên text phải đúng định dạng
2. padding không có auto

# Margin :value

1. ko được tính vào width height của box model
2. left:auto và right :auto-> căn giữa 1 block và width của nó phải nhỏ hơn width của cha
3. hoặc margin : 0 auto cho gọn
4. hoặc margin inline: auto
5. khi 2 block có margin chồng lên nhau thì nó sẽ theo thằng lớn hơn và thu hẹp thằng nhỏ hơn-> hãy chỉ chọn 1 chiều margin
6. nhưng khi có 2 margin mà 1 trong 2 có giá trị âm-> nó sẽ lại cộng vào-> margin cuối là kết quả cộng
7. khi có 2 margin âm ->lấy margin có trị tuyệt đối lớn hơn

8. tình trạng tự động thu hẹp về ví dụ với các thẻ heading nhưng lại có thể fix bằng cách thêm border
   -> margin thẻ con nhưng ko kéo thẻ cha ra?
   -> để border transparent nhưng bị thừa khoảng cách border
   -> FIX
   -> chuyển thẻ cha thành inline-block
   -> hoặc flex
   -> potision:absolute
   -> potision:fix

# padding và margin dùng đơn vị % đều là tính theo width của thẻ cha

# box-sizing: mặc định theo content: content-box

-> border box:nó sẽ đẩy content vào và width tính từ border
->content sẽ bị nở ra -> height thay đổi-> ko nên set fix height
->height auto

# Float:trôi element về 1 phía khi chưa hết của thành phần cha

1. float 2 element về left right thì bị mất chiều cao thẻ cha
   -> sử dụng overflow : hidden để lấy lại chiều cao
2. clear :left | right|both: chống tự động trôi
