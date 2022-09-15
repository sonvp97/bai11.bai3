let n1=0;
let n2=1;
let i=1;
let sum=0;
while (i<=20){
    z=n1+n2;
    sum+=z;
    n1=n2;
    n2=z;
    i++;
}document.write('Tổng 20 số  fibonacci cộng lại là : '+sum);