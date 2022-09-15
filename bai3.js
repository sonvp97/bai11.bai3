const number = Number(prompt('Nhập số hiển thị'));
let n1 = 0;
let n2 = 1;
let i=1;
while (i <= number) {
    document.write(n1+"<br>");
    z = n1 + n2;
    n1 = n2;
    n2 = z;
    i++;
}
