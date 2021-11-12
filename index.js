const menu = document.querySelector('.menu')
const menuOpen = document.querySelector('.menu-open')
const close = document.querySelector('.closeimage')

const cart = document.querySelector('.cart');
const cartOpen = document.querySelector('.cart-open');
const closeCart = document.querySelector('.close-cart');

const imgs1 = document.querySelector('.product-1');
const imgs2 = document.querySelector('.product-2');;
const imgs3 = document.querySelector('.product-3');
const imgs4 = document.querySelector('.product-4');

const img = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');

var pcart = document.querySelector('.pcart')
var pur = document.querySelector('.purches')

cart.addEventListener('click',function() {
    cartOpen.style.display = 'flex';
})
closeCart.addEventListener('click',function() {
    cartOpen.style.display = 'none';
})

menu.addEventListener('click', () => {
    menuOpen.style.display = 'flex';
})
close.addEventListener('click', () => {
    menuOpen.style.display = 'none';  
})

img.addEventListener('click', function () {
    imgs1.style.display = 'flex';
    imgs2.style.display = 'none';
    imgs3.style.display = 'none';
    imgs4.style.display = 'none';
    
    img.style.border = '2px solid hsl(26, 100%, 55%)';
    img2.style.border = 'none';
    img3.style.border = 'none';
    img4.style.border = 'none';
})
img2.addEventListener('click', function () {
    imgs1.style.display = 'none';
    imgs2.style.display = 'flex';
    imgs3.style.display = 'none';
    imgs4.style.display = 'none';
    img.style.border = 'none';
    img2.style.border = '2px solid hsl(26, 100%, 55%)';
    img3.style.border = 'none';
    img4.style.border = 'none';
})
img3.addEventListener('click', function () {
    imgs1.style.display = 'none';
    imgs2.style.display = 'none';
    imgs3.style.display = 'flex';
    imgs4.style.display = 'none';
    img.style.border = 'none';
    img2.style.border = 'none';
    img3.style.border = '2px solid hsl(26, 100%, 55%)';
    img4.style.border = 'none';
})
img4.addEventListener('click', function () {
    imgs1.style.display = 'none';
    imgs2.style.display = 'none';
    imgs3.style.display = 'none';
    imgs4.style.display = 'flex';
    img.style.border = 'none';
    img2.style.border = 'none';
    img3.style.border = 'none';
    img4.style.border = '2px solid hsl(26, 100%, 55%)';
})

var num = 0
document.getElementById('root').innerText = num; 
function plus() {
    num = num+1;
    document.getElementById('root').innerText = num;
}
function minus() {
    if (num <= 0) {
        num = 0
        document.getElementById('root').innerText=num;
    }else {
        num = num - 1;
        document.getElementById('root').innerText=num;
    }
}

function purches() {
    const multy =  document.getElementById('root').innerText;
    var par = document.getElementById('par');
    
    
    
    const mult = document.querySelector(".mult")
    const mults = document.querySelector(".mults")
    var root = document.getElementById("root").innerText
    
    
    if (multy > 0) {
        pcart.style.display = "none";
        pur.style.display = "flex"
        mult.innerText = root
        mults.innerText = "$" + root * 125.00
        
    }else{
        pcart.style.display = "flex";
        pur.style.display = "none"
    }
}
function deletes() {
    pcart.style.display = "flex";
    pur.style.display = "none"
}