const products = [
{
    title: 'product1',
    description: 'bla bla bla',
    imageUrl: 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: "04/02/2016",

},
{
    title: 'product2',
    description: 'bla bla bla',
    imageUrl: 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: "04/02/2016",

},
{
    title: 'product3',
    description: 'bla bla bla',
    imageUrl: 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: "04/02/2016",

},
{
    title: 'product4',
    description: 'bla bla bla',
    imageUrl: 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: "04/02/2016",

},
{
    title: 'product5',
    description: 'bla bla bla',
    imageUrl: 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: "04/02/2016",

}
];


const printToDom = (divId, textToprint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToprint;
};

    const createCards = () => {
        let domString = '';

       products.forEach((cat) => {
            domString += `<div class = "card">`;
            domString += `  <div class="title"><h2>${cat.title}</h2></div>`;
            domString += `  <div class="description"><h2>${cat.description}</h2></div>`;
            domString += `  <div class="image"><img src=${cat.imageUrl}></div>`;
            domString += `  <div class="color"><p>${cat.size}</p></div>`;
            domString += `  <div class="Weight"><p>Weight: ${cat.weight}</p></div>`;
            domString += `  <div class="Price1"><h2> ${cat.price1}</h2></div>`;
            domString += `  <div class="Price2"><h2> ${cat.price2}</h2></div>`;
            domString += `  <div class="Price3"><h2> ${cat.price3}</h2></div>`;
            domString += `</div>`;
            })
            printToDom('main-content', domString);
        }
        const init = () => {
        createCards();

        };
        init();