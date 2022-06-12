let pickedMain, pickedDrink, pickedDessert;
let priceMain, priceDrink, priceDessert

function selectMain(item){
    let picked = document.querySelector('.main .border');
    //console.log(picked);
    if (picked !== null){
        document.querySelector('.main .border .check').classList.add('hidden')
        //console.log(document.querySelector('.border .check'))
        //console.log(document.querySelector('.border .hidden'))
        picked.classList.remove('border');
    }
    
    if (picked !== item){
        item.classList.add('border');
        document.querySelector('.main .border .check').classList.remove('hidden')
        pickedMain = document.querySelector('.main .border .name').innerHTML
        priceMain = Number(document.querySelector('.main .border .price').innerHTML)
    } else {
        pickedMain = null
    }
    
   
    console.log(pickedMain)
    console.log(priceMain)

    allowOrder();
}

function selectDrink(item){
    let picked = document.querySelector('.drink .border');
    //console.log(picked);
    if (picked !== null){
        document.querySelector('.drink .border .check').classList.add('hidden')
        //console.log(document.querySelector('.border .check'))
        //console.log(document.querySelector('.border .hidden'))
        picked.classList.remove('border');
    }
    
    if (picked !== item){
        item.classList.add('border');
        document.querySelector('.drink .border .check').classList.remove('hidden')
    } else {
        pickedDrink = null
    }
    
    pickedDrink = document.querySelector('.drink .border .name').innerHTML
    priceDrink = Number(document.querySelector('.drink .border .price').innerHTML)
    console.log(pickedDrink)
    console.log(priceDrink)

    allowOrder();
}

function selectDessert(item){
    let picked = document.querySelector('.dessert .border');
    if (picked !== null){
        document.querySelector('.dessert .border .check').classList.add('hidden')
        //console.log(document.querySelector('.border .check'))
        //console.log(document.querySelector('.border .hidden'))
        picked.classList.remove('border');
    }

    if (picked !== item){
        item.classList.add('border');
        document.querySelector('.dessert .border .check').classList.remove('hidden');
    } else {
        pickedDessert = null
    }

    pickedDessert = document.querySelector('.dessert .border .name').innerHTML
    priceDessert = Number(document.querySelector('.dessert .border .price').innerHTML)
    console.log(pickedDessert)
    console.log(priceDessert)

    allowOrder();
}

function allowOrder(){
    if (pickedMain && pickedDrink && pickedDessert){
        document.querySelector('.order').classList.add('allowed')
        console.log(document.querySelector('.order'))
    }
}
/* A partir daqui entra a função que vai codificar o pedido pra enviar por Whatsapp */
function Order(){
    minhaString = `Olá, gostaria de fazer o pedido:\n`
}
