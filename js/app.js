



function isWebp(){
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function (){
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

	}
	testWebp(function (support){
		let className = support = true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	})
}
	
isWebp();

const BUTTON_BURGER = document.querySelector('.header__burger');
const BODY_BURGER = document.querySelector('.burger__body');


BUTTON_BURGER.addEventListener('click', function(){
	this.classList.toggle('active');
	BODY_BURGER.classList.toggle('active');
});


let HEADER = document.querySelector('header');

window.addEventListener('scroll', ()=>{
  if(scrollY > 30){
    HEADER.classList.add('scroll');
  }else{
    HEADER.classList.remove('scroll');
  };
});


const DETAILED = document.querySelectorAll('.aftercourse__detailed');

if(DETAILED.length > 0){
	DETAILED.forEach(delailed=>{
		delailed.addEventListener('click', ()=>{
			delailed.nextElementSibling.classList.toggle('active');
		});

		delailed.addEventListener('mouseover', ()=>{
			delailed.nextElementSibling.classList.add('active');
		});

		delailed.addEventListener('mouseout', ()=>{
			delailed.nextElementSibling.classList.remove('active');
		});
	});
}

