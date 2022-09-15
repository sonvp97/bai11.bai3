let number=Number(prompt('Nhập nhiệt độ'));
for (i=1;i<=1000000000;i++) {
    if (number>100) {
        alert('Yêu cầu giảm nhiệt độ');
        number=Number(prompt('Nhập nhiệt độ'));
    }else if (number<20){
        alert('Yêu cầu tăng nhiệt độ');
        number=Number(prompt('Nhập nhiệt độ'));
    }else {
        document.write(number);
        break;
    }
}