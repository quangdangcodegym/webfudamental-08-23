#### Thẻ để nhập dữ liệu: input

thuộc tính type hay dùng: text, password, file, date, datetime, hidden, checkbox

#### Thẻ form

- thuộc tính: method get: dữ liệu hiển thị trên thanh địa chỉ, dữ liệu ko NHẠY CẢM

* thuộc tính:method post: dữ liệu hiển thị KO hiển thị lên thanh địa chỉ, dữ liệu NHẠY CẢM

### thẻ button

- thuộc tính type = reset - Reset lại giá trị của các ô input
- thuộc tính type = submit - gửi giá trị đi,
  mặc định khi không có thuộc tính type thì giá trị là submit

### CSS - style - trang điểm/trang trí cho 1 thẻ hoặc nhiều thẻ

- css inline - dùng thuộc tính style
  - style="color: red; font-weight: 900"
  * color: chỉ màu sắc
  * font-weight: chỉ độ đậm của chữ,
    - có giá trị số: 100-900
    - có giá trị chữ: bold, lighter
- css internal style: viêt bên trong cặp thẻ style

  - viết bộ chọn - selector

  * #id
  * h1, label : Dấu "," kết hợp nhiều bộ chọn

### color

- tên màu
- rgb
- rgba ( a - alpha có giá trị từ 0 - 1 => làm mờ màu)
- hexa

### border

- border color, border style: dashed (nét đứt), solid (liền), dotted (chấm chấm)
- border width: độ rộng
  viết tắt (short hand): border: 1px solid red;
- border radius:

### thuộc tính display

display: inline
display: block
width:
height:
và các thuộc tính border, background, color,

### Thẻ div

- để bọc lại các thẻ khác
- display: block (chiếm nguyên độ rộng thằng cha)

### padding

padding: khoảng cách từ content -> border
padding: TOP RIGHT BOTTOM LEFT;
padding: TB RL;
padding: TBRL;

### margin

margin: khoảng cách từ content -> border
margin: TOP RIGHT BOTTOM LEFT;
margin: TB RL;
margin: TBRL;
