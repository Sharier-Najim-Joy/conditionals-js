const price = 3000;

if(price >= 8000){
    // 50% discount 
    const discount = price * 50 / 100;
    const pay = price - discount;
    console.log(pay);
}
else if(price > 4000){
    // 30% discount
    const discount = price * 30 / 100;
    const pay = price - discount;
    console.log(pay); 
}
else if(price > 2000){
    // 10% discount
    const discount = price * 10 / 100;
    const pay = price - discount;
    console.log(pay);
}
else{
    console.log(price);
}

