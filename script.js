
const obj1 = {
    name: 'Oleg',
    surename: 'Khegay',
    age: 16,
    address: 'Tashkent',
}

const product1 = {
    img: 'https://cdn.obag.filoblu.com/media/catalog/product/cache/25162cc576cf81151d28507649e6339b/O/B/OBAGBG10_ECSN6_936_NOTAG_UNICA_L2.jpg',
    title: 'Сумка для девушек',
    rate: 4.9,
    reviews: 150, 
    oldPrice: 120000,
    newPrice: 14000,
    description: 'awdaawgfawfaf'
}

const product2 = {
    img: 'https://cdn.obag.filoblu.com/media/catalog/product/cache/25162cc576cf81151d28507649e6339b/O/B/OBAGBG10_ECSN6_936_NOTAG_UNICA_L2.jpg',
    title: 'Umbrella',
    rate: 3.2,
    reviews: 666, 
    oldPrice: 80000,
    newPrice: 8800,
    description: 'awdaawgfawfaf'
}

const product3 = {
    img: 'https://cdn.obag.filoblu.com/media/catalog/product/cache/25162cc576cf81151d28507649e6339b/O/B/OBAGBG10_ECSN6_936_NOTAG_UNICA_L2.jpg',
    title: 'Tea',
    rate: 4.9,
    reviews: 12, 
    oldPrice: 22000,
    newPrice: 5000,
    description: 'awdaawgfawfaf'
}

product3.rate = 4.8
product3.newPrice = 200
product3.oldPrice = 100
product3.stock = 52

delete product3.oldPrice

console.log(product1['title'], product1['newPrice']);
console.log(product2['title'], product2['newPrice']);
console.log(product3['title'], product3['oldPrice'], product3['newPrice'],product3['rate'], product3['stock']);


const cardImg = document.querySelector('.card img').src = product1.img
const cardTitle = document.querySelector('.card h3').innerText = product1.title
const cardRate = document.querySelector('.rating').innerText = product1.rate
const cardReviews = document.querySelector('.reviews').innerText = product1.reviews
const cardOldPrice = document.querySelector('.card s').innerText = product1.oldPrice
const cardNewPrice = document.querySelector('.card b').innerText = product1.newPrice

cardImg.style.width = '200px'
