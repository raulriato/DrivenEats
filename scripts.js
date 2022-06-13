let pickedMain, pickedDrink, pickedDessert; //global variables to store the name of the item choosen by the customer
let priceMain, priceDrink, priceDessert //global variables to store the price of the item choosen by the customer

//This function will show the customer the main meal they're picking, in addition to storing the item name and price
function selectMain(item){
    let picked = document.querySelector('.main .border');
    if (picked !== null){
        document.querySelector('.main .border .check').classList.add('hidden')
        picked.classList.remove('border');
    }
    
    if (picked !== item){
        item.classList.toggle('border');
        document.querySelector('.main .border .check').classList.toggle('hidden')
    }
    
    pickedMain = document.querySelector('.main .border .name').innerHTML
    priceMain = Number(document.querySelector('.main .border .price').innerHTML)
    console.log(pickedMain)
    console.log(priceMain)

    allowOrder();
}

//This function will show the customer the drink they're picking, in addition to storing the item name and price
function selectDrink(item){
    let picked = document.querySelector('.drink .border');
    if (picked !== null){
        document.querySelector('.drink .border .check').classList.add('hidden')
        picked.classList.remove('border');
    }
    
    if (picked !== item){
        item.classList.toggle('border');
        document.querySelector('.drink .border .check').classList.toggle('hidden')
    }
    
    pickedDrink = document.querySelector('.drink .border .name').innerHTML
    priceDrink = Number(document.querySelector('.drink .border .price').innerHTML)
    console.log(pickedDrink)
    console.log(priceDrink)

    allowOrder();
}

//This function will show the customer the dessert they're picking, in addition to storing the item name and price
function selectDessert(item){
    let picked = document.querySelector('.dessert .border');
    if (picked !== null){
        document.querySelector('.dessert .border .check').classList.add('hidden')
        picked.classList.remove('border');
    }

    if (picked !== item){
        item.classList.toggle('border');
        document.querySelector('.dessert .border .check').classList.toggle('hidden');
    }

    pickedDessert = document.querySelector('.dessert .border .name').innerHTML
    priceDessert = Number(document.querySelector('.dessert .border .price').innerHTML)
    console.log(pickedDessert)
    console.log(priceDessert)

    allowOrder();
}

//Here it's changed the appearance of the order button once the customer picked one of each category
function allowOrder(){
    if (pickedMain && pickedDrink && pickedDessert){
        document.querySelector('.order').classList.add('allowed')
        console.log(document.querySelector('.order'))
    }
}

function sendOrder(){

    if (pickedMain && pickedDrink && pickedDessert){
        const Order = `Olá, gostaria de fazer o pedido:\n- Prato: ${pickedMain}\n- Bebida: ${pickedDrink}\n- Sobremesa: ${pickedDessert}\nTotal: R$ ${(priceMain+priceDrink+priceDessert).toFixed(2)}`
        const linkString = `https://wa.me/5543999746610?text=${encodeURIComponent(Order)}`
        window.open(linkString)
    }
}
