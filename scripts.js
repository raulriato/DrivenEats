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
        item.classList.toggle('border');
        document.querySelector('.main .border .check').classList.toggle('hidden')
    }
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
        item.classList.toggle('border');
        document.querySelector('.drink .border .check').classList.toggle('hidden')
    }
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
        item.classList.toggle('border');
        document.querySelector('.dessert .border .check').classList.toggle('hidden');
    }
}