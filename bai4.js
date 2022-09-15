let n1=0;
let n2=1;
let i=1;
while (i<=8){
    if(n1!=0 && n1%5 == 0){
        document.write('Số fibonacci đầu tiên chia hết cho 5 là : ' + n1);
    }
    z=n1+n2;
    n1=n2;
    n2=z;
    i++;
}