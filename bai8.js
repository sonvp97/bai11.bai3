function play(){
    let number=Number(prompt('Nhập số không khoảng nào?'));
    x=Math.floor(Math.random()*(number+1));
    for (i=1;i<=3;i++){
        N=Number(prompt('Nhập số muốn đoán?'));
        if (x == N){
            alert('Bạn đã đoán đúng')
            break;
        }else {
            alert('Bạn đã đoán sai mời đoán lại');
        }
    }document.write('Bạn đã đoán sai');
}