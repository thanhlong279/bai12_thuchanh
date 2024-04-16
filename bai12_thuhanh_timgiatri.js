let value = +prompt("nhap gia tri can tim");
let number = [4, 5, 7, 3, 9, 1];
let index = -1;
for (let i = 0; i < number.length; i++) {
    // if(value === number[i]){
    //     alert("Value" + number[i] + "found at " + i);
    // }
    // dua ra thong bao trong truong hop ko tim thay
    if(value === number[i]){
        index = i;
    }
}
if(index > -1){
    alert("value" + value + " found at" + index);
}else{
    alert("value" + value + "not found");
}