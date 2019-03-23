const products = [
    {
        title: 'SPACE-FOX',
        description: 'Premium Space Fox',
        imageUrl: 'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300',
        Planet: 'Planet Zero',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: "04/02/2016",

    },
    {
        title: 'SPACE-FOX',
        description: 'Premium Space Fox',
        imageUrl: 'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300',
        Planet: 'Planet Zero',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: "04/02/2016",

    },
    {
        title: 'SPACE-FOX',
        description: 'Premium Space Fox',
        imageUrl: 'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300',
        Planet: 'Planet Zero',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: "04/02/2016",

    },
    {
        title: 'SPACE-FOX',
        description: 'Premium Space Fox',
        imageUrl: 'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300',
        Planet: 'Planet Zero',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: "04/02/2016",

    },
    {
        title: 'SPACE-FOX',
        description: 'Premium Space Fox',
        imageUrl: 'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300',
        Planet: 'Planet Zero',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: "04/02/2016",
    },
];


const printToDom = (divId, textToprint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToprint;
};

const createCards = () => {
    let domString = '';

    products.forEach((cat) => {
        domString += `  <div class="col-4">`;
        domString += `    <div class="card">`;
        domString += `      <h5 class="card-title">${cat.title}</h5>`;
        domString += `      <div class="description">${cat.description}</div>`;
        domString += `      <div class="image"><img src=${cat.imageUrl} style="width:70%"></div>`;
        domString += `      <div class="color"><p>${cat.Planet}</p></div>`;
        domString += `      <div class="Weight"><p>Weight: ${cat.weight}</p></div>`;
        domString += `      <div class="Price1">${cat.price1}</div>`;
        domString += `      <div class="Price2">${cat.price2}</div>`;
        domString += `      <div class="Price3">${cat.price3}</div>`;
        domString += `   </div>`;
        domString += ` </div>`;
    })
    printToDom('main-content', domString);
}
const init = () => {
    createCards();

};
init();