var arr = [];

//Rút gọn hàm gêtlementById
function $(id) {
    return document.getElementById(id);
}

var txtSoN = $("txtSoN");
var btnThemSo = $("btnThemSo");
var txtMangSo = $("txtMangSo");
// Xử lý thêm số được người dùng nhập vào mảng
btnThemSo.onclick = function () {
    arr.push(Number(txtSoN.value));
    txtMangSo.value = arr.join(" ,");
    txtSoN.value = "";
    txtSoN.focus();
}

// #1 Tính tổng số dương

function tinhTongSoDuong(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sum += arr[i];
    }
    return sum;
}

var btnTinhTong = $("btnTinhTong");
var txtTong = $("txtTong");

btnTinhTong.onclick = function () {
    var sum = tinhTongSoDuong(arr);
    txtTong.value = "Tổng: " + sum;
}

// #2 Đếm số dương

function demSoDuong(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) count++;
    }
    return count;
}

var btnDemSoDuong = $("btnDemSoDuong");
var txtSoDuong = $("txtSoDuong");

btnDemSoDuong.onclick = function () {
    var count = demSoDuong(arr);
    txtSoDuong.value = "Có " + count + " số dương trong mảng.";
}

// #3 Tìm số nhỏ nhất

var btnTimSoNhoNhat = $("btnTimSoNhoNhat");
var txtSoNhoNhat = $("txtSoNhoNhat");

function timSoNhoNhat(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}

btnTimSoNhoNhat.onclick = function () {
    var min = timSoNhoNhat(arr);
    txtSoNhoNhat.value = "Số nhỏ nhất trong mảng là " + min;
}

// #4 Tìm số dương nhỏ nhất
var btnTimSoDuongNhoNhat = $("btnTimSoDuongNhoNhat");
var txtSoDuongNhoNhat = $("txtSoDuongNhoNhat");

function timSoDuongNhoNhat(arr) {
    var newArr = arr.filter(function (item) {
        return item > 0;
    })
    return timSoNhoNhat(newArr);
}

btnTimSoDuongNhoNhat.onclick = function () {
    var min = timSoDuongNhoNhat(arr);
    txtSoDuongNhoNhat.value = "Số dương nhỏ nhất trong mảng là " + min;
}

// #5 Tìm số chẵn cuối cùng
var btnTimSoChanCC = $("btnTimSoChanCC");
var txtSoChanCC = $("txtSoChanCC");

function timSoChanCC(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (Math.abs(arr[i] % 2) === 0)
            return arr[i];
    }
    return -1;
}

btnTimSoChanCC.onclick = function () {
    var res = timSoChanCC(arr);
    if (res !== -1) {
        txtSoChanCC.value = "Số chẵn cuối cùng là " + res;
    } else {
        txtSoChanCC.value = "Không có số chẵn nào trong mảng."
    }
}