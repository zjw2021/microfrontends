import faker from 'faker';

const mount = (el) => {
    let products = '';
    for(let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    
    el.innerHTML = products
}

//Situation #1 | Development
//running in development in isolation using the local index.html which definitely has id of dev-products
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products')

    //Assuming our container doesn't have the element id of dev-products
    if(el) {
        mount(el)
    }
}

//Situation #2 | Development in container app
//no guarantee that id of dev-products exists
export { mount }