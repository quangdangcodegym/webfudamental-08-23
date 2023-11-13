//   alert("HELLO"); // hiển thị hộp thoại cảnh báo - alert
function handleBtnChangeColor() {
    // Tìm tớ thẻ có id = fullName và đổi màu
    document.getElementById("fullName").style.color = "red";

}
function handleTxtUsernameChange() {
    let name = document.getElementById("username").value;
    document.getElementById("tracking").innerText = name;
}