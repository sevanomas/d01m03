let quantity = document.querySelector('#quantity');

let price = 400000;

let element = document.querySelector('#selector')

let removeBtn = document.querySelector('#remove');

let addBtn = document.querySelector('#add');

                            //Selector 
element.addEventListener('change', () =>{
    card = document.querySelector('.card')
    card.style.backgroundColor = element.value
})

                            // Buttons
removeBtn.addEventListener('click', () => {
    count = Number(quantity.innerHTML);
    count = count - 1;
    if (count >= 0){
        quantity.innerHTML = count;
        show();}
})

addBtn.addEventListener('click', () =>{
    count = Number(quantity.innerHTML);
    count = count + 1;
    quantity.innerHTML = count;
    show();
})

function show(){
    let total = document.querySelector('.total');
    let result = price * count;
    total.innerHTML = result.toLocaleString();
}