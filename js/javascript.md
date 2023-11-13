#### để tìm tới 1 thẻ

document.getElementById()

### Nhập xuất

alert("đã đổi màu fullName"); // thông báo

### Sự kiện

onclick - khi click vào 1 thẻ
onmouseover - khi rê chuột vào
onmouseout - khi rê chuột vào - Sau đó PHẢI RÊ CHUỘT RA
onfocus - khi con chuột nhấn vào ô input
onblur - khi con chuột nhấn vào ô input && sau đó nhả ra khỏi ô input
onchange - Khi giá trị thay đổi && sau đó nhả ra khỏi ô input

### Biến

Biến: dùng để chứa dữ liệu - thuộc 1 loại cụ thể
số: số nguyên - integer long, số thực (5.3) float, double => number
chuỗi: "Hello", 'I "love" you', "I 'love' you" => string
đúng/sai: true (1) /false (0) => boolean
kí tự: "c", 'c' => string

let ageStudent = 5;
let nameStudent = 'Đặng "Văn" Quang';
let gender = true;
let c = "g";

let person; // undefined
let p = null; // object
let p1 = [23, 5]; // array

// typeof - xác định kiểu dữ liệu
console.log(typeof ageStudent); // number
console.log(typeof nameStudent); // string
console.log(typeof gender); // boolean
console.log(typeof c); // string
console.log(typeof person); // undefined

let a = 5;
// a = a + 10; // + - \* /
a += 10; // += , \*= , /=, -=, %=

let a = 5;
a = a + 1;
// a += 1
a++; // a-- <=> a = a -1
++a; // --a <=> a = a -1

    let a = 5;

let b = "5";

// == so sánh giá trị
if (a == b) {
alert("5 == 5");
}

let a = 5; // number
let b = "5"; // string

// === so sánh giá trị && (AND) so sánh kiểu dữ liệu
if (a === b) {
alert("5 == 5");
}

&& : TRUE khi cả 2 điều true

|| : FALSE khi cả 2 điều false
