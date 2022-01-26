function calcu()
{
    let val=document.getElementById('subscripton');
    let price=0;

    if(val.value==='1mnth'){
            price=680*1;
    }
    else if(val.value==='3mnth'){
            price=640*3;
    }
    else if(val.value==='6mnth'){
            price=620*6;
    }
    else if(val.value==='12mnth'){
            price=580*12;
    }
    document.getElementById('price').innerHTML=` <b> ₹${price}</b>`
}
let toggle=false;
function promocode()
{
        if(!toggle){
        document.getElementById('x').innerHTML=` <input type="text" placeholder="Enter promocode" id="promocode" required>`;
        document.getElementById('promo__Text').innerText="I don't have any promocode"
        toggle=true;    
}
else
{
                document.getElementById('promo__Text').innerText="I  have a promocode"
                document.getElementById('x').innerHTML='';
                toggle=false;
        }
}
