// script for Popup cart



let cartPop = document.getElementById("cart-pop-cont");
let closeCart = document.getElementById("cart-pop-cont");
let closeWish = document.getElementById("wish-pop-cont");



function cartPopup() {
	cartPop.classList.add("toggle-cart");
	openSlide.classList.remove("toggle-home");
	dashboard.classList.remove("toggle-dashboard");
	wishPop.classList.remove("toggle-wish");


}

function closeCartpopup(){
	closeCart.classList.remove("toggle-cart");
}


let wishPop = document.getElementById("wish-pop-cont");

function wishPopup() {
	wishPop.classList.add("toggle-wish");
	cartPop.classList.remove("toggle-cart");
	openSlide.classList.remove("toggle-home");
	dashboard.classList.remove("toggle-dashboard");
	
}
function closeWishpopup(){
	closeWish.classList.remove("toggle-wish");
}




// toggele the home slide

	
let openSlide = document.getElementById("open-home");
let dashboard = document.getElementById("openDashboard");


function openHome() {
	openSlide.classList.toggle("toggle-home");
	dashboard.classList.remove("toggle-dashboard");
	cartPop.classList.remove("toggle-cart");
	wishPop.classList.remove("toggle-wish");


}

function openDashboard() {
	dashboard.classList.toggle("toggle-dashboard");
	openSlide.classList.remove("toggle-home");
	cartPop.classList.remove("toggle-cart");
	wishPop.classList.remove("toggle-wish");

}


// add to cart remove funtion

let remove = document.getElementById('remove');

function removeFun() {
	remove.remove('remove');
}

let remove1 = document.getElementById('remove1');

function removeFun1() {
	remove1.remove('remove1');
}

let remove2 = document.getElementById('remove2');

function removeFun2() {
	remove2.remove('remove2');
}

let remove3 = document.getElementById('remove3');

function removeFun3() {
	remove3.remove('remove3');
}  


// toogle navlink mobile
let menu = document.getElementById("navlink-mobile-open");

	function menuOpen(){
		menu.classList.toggle("navlink-mobile-open");
	}


// js code for hovering prodcut view

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("smallImg");

SmallImg[0].onmouseover = function()
{
	ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onmouseover = function()
{
	ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onmouseover = function()
{
	ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onmouseover = function()
{
	ProductImg.src = SmallImg[3].src;
}



// add to cart script
	
var noti = document.getElementById('cart');
// var select = document.querySelector('select');
var select = document.getElementById('button');

{
	select.addEventListener('click', (e)=>{
		var add = Number(noti.getAttribute('cart-count')|| 0);
		noti.setAttribute('cart-count', add + 1);
		noti.classList.add('zero');
	})

} 




// script to toggle heart background 


	
let wish = document.getElementById('hearted');

function wishOpen() {
	wish.classList.toggle('wish-open');
}










