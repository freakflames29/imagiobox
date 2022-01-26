function calcu()
{
    let val=document.getElementById('subscripton');
    let price=0;

    if(val.value==='1mnth'){
            price=670*12;
    }
    else if(val.value==='3mnth'){
            price=630*12;
    }
    else if(val.value==='6mnth'){
            price=610*12;
    }
    else if(val.value==='12mnth'){
            price=570*12;
    }
    document.getElementById('price').innerHTML=` <b> ₹${price}</b>`
}