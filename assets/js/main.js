// ========= JavaScript ===========
let products = {
    data:[
        {
            productName: 'Regular White T-Shirt',
            category: 'Topwear',
            price: '30',
            image: './assets/img/white-tshirt.jpg'
        },

        {
            productName: 'Beige Short Skirt',
            category: 'Bottomwear',
            price: '49',
            image: './assets/img/short-skirt.jpg'
        },

        {
            productName: 'Sporty SmartWatch',
            category: 'Watch',
            price: '99',
            image: './assets/img/sporty-smartwatch.jpg'
        },

        {
            productName: 'Basic Knitted Top',
            category: 'Topwear',
            price: '29',
            image: './assets/img/knitted-top.jpg'
        },

        {
            productName: 'Black Leather Jacket',
            category: 'Jacket',
            price: '129',
            image: './assets/img/black-leather-jacket.jpg'
        },  

        {
            productName: 'Stylish Pink Trousers',
            category: 'Bottomwear',
            price: '89',
            image: './assets/img/pink-trousers.jpg'
        },  
        
        {
            productName: "Brown Men's Jacket",
            category: 'Jacket',
            price: '189',
            image: './assets/img/brown-jacket.jpg'
        },  

        {
            productName: "Comfy Gray Pants",
            category: 'Bottomwear',
            price: '49',
            image: './assets/img/comfy-gray-pants.jpg'
        },  
    ],
};

for (let i of products.data){
    // Create Card
    let card = document.createElement("div")
    // Card Should Have Category
    // Begin Product Hiden
    card.classList.add("card", i.category, 'hide')

    // Image Div
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image__container")

    //Img Tag
    let image= document.createElement("img")
    image.setAttribute("src", i.image)

    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    // Container
    let proudctTitle = document.createElement('div')
    proudctTitle.classList.add('proudctTitle')

    // product name
    let name = document.createElement('h5')
    name.classList.add('product__name')
    name.innerText = i.productName.toUpperCase();
    proudctTitle.appendChild(name)

    
    // price
    let price = document.createElement('h6')
    price.classList.add('products__price')
    price.innerText = i.price + " $"
    proudctTitle.appendChild(price)


    card.appendChild(proudctTitle)
    document.getElementById("products").appendChild(card);

}
//  Paremeter pass Button
function fillterProducts(value){
    let buttons = document.querySelectorAll('.button__value')
    buttons.forEach(button => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add('active')
        }
        else{
            button.classList.remove('active')
        }
    });
    //  Select All cards
    let elements = document.querySelectorAll('.card')
    elements.forEach((element)=>{
        if(value == 'All'){
            element.classList.remove('hide')
        }
        else{
            // Neu ton tai gia tri khac All
            if(element.classList.contains(value)){ 
                // show card 
                element.classList.remove('hide')
            }
            // Neu khong chua gia tri => hiden
            else{
                element.classList.add('hide')
            }
        }
    }) 
}
// Search Input
document.getElementById('button-search').addEventListener('click', ()=>{
    let searchInput = document.getElementById('search-input').value;
    let elements= document.querySelectorAll('.product__name');
    let cards= document.querySelectorAll('.card');
    console.log(searchInput);

    elements.forEach((element, index)=>{
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove('hide');
        }
        else{
            cards[index].classList.add('hide');
        }
    })
})

// Initial display all product.
window.onload = ()=>{
    fillterProducts('All');
}