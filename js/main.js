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

// #6 Đổi chỗ
var txtViTri1 = $("txtViTri1");
var txtViTri2 = $("txtViTri2");
var btnDoiCho = $("btnDoiCho");
var txtDoiCho = $("txtDoiCho");

function doiCho(arr, vitri1, vitri2) {
    var temp = arr[vitri1];
    arr[vitri1] = arr[vitri2];
    arr[vitri2] = temp;
    return arr;
}

btnDoiCho.onclick = function () {
    var vitri1 = Number(txtViTri1.value);
    var vitri2 = Number(txtViTri2.value);
    arr = doiCho(arr, vitri1, vitri2);
    txtDoiCho.value = "Mảng sau khi đổi chỗ:" + arr.join(", ");
}

// #7 Sắp xếp tăng dần

var btnSapXep = $("btnSapXep");
var txtSapXep = $("txtSapXep");

btnSapXep.onclick = function () {
    arr.sort();
    txtSapXep.value = arr.join(", ");
}

// #8 Tìm số nguyên tố đầu tiên

var btnTimSoNTDauTien = $("btnTimSoNTDauTien");
var txtSoNTDauTien = $("txtSoNTDauTien");

function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function soNguyenToDauTien(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (laSoNguyenTo(arr[i])) return arr[i];
    }
    return -1;
}

btnTimSoNTDauTien.onclick = function () {
    var res = soNguyenToDauTien(arr);
    if (res !== -1) {
        txtSoNTDauTien.value = "Số nguyên tố đầu tiên: " + res;
    }
    else {
        txtSoNTDauTien.value = "Không có số nguyên tố trong mảng.";
    }
}

// #9 Đếm số nguyên

var btnDemSoNguyen = $("btnDemSoNguyen");
var txtDemSoNguyen = $("txtDemSoNguyen");

function demSoNguyen(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === parseInt(arr[i]))
            count++;
    }
    return count;
}

btnDemSoNguyen.onclick = function () {
    var count = demSoNguyen(arr);
    if (count) {
        txtDemSoNguyen.value = "Có: " + count + " số nguyên trong mảng.";
    }
    else {
        txtDemSoNguyen.value = "Không có số nguyên nào trogn mảng.";
    }
}

// #10 So sánh số lượng âm và dương

var txtSoN_ = $("txtSoN_");
var btnThemSo_ = $("btnThemSo_");
var txtMangSo_ = $("txtMangSo_");
var btnSoSanh = $("btnSoSanh");
var txtSoSanh = $("txtSoSanh");
var myArr = [];

btnThemSo_.onclick = function () {
    var value = Number(txtSoN_.value);
    myArr.push(value);
    txtMangSo_.value = myArr.join(", ");
    txtSoN_.value = "";
    txtSoN_.focus();
}

function demChan(myArr) {
    var count = 0;
    for (var i = 0; i < myArr.length; i++) {
        if (Math.abs(myArr[i]) % 2 === 0) count++;
    }
    return count;
}

btnSoSanh.onclick = function () {
    var chan = demChan(myArr);
    var le = myArr.length - chan;
    if (chan > le) {
        txtSoSanh.value = "Số chẵn > Số lẻ";
    }
    else if (chan === le) {
        txtSoSanh.value = "Số chẵn = Số lẻ";
    }
    else {
        txtSoSanh.value = "Số chẵn < Số lẻ";
    }
}