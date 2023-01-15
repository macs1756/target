



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


const TARIFF_ITEM = document.querySelectorAll('.tariff__item');


if(TARIFF_ITEM.length > 0 ){
	TARIFF_ITEM.forEach(item=>{
		if(item.dataset.active == "not"){
			item.style.opacity = '0.38';
			item.querySelector('span').style.textDecoration = 'line-through';
		}

		if(item.dataset.active == "top"){
		
			item.style.background = 'rgba(232, 215, 146, 0.4)';
			item.style.borderRadius = '12px';
		}

	});
}


const swiper = new Swiper('.swiper-review', {
	effect: 'fade',
	navigation: {
		prevEl: '.review__prev',
		nextEl: '.review__next',
	}
});


const QUESTIONS = document.querySelectorAll('.subfooter__item');

if(QUESTIONS.length>0){
	
	QUESTIONS.forEach((question)=>{
		question.addEventListener('click', function(){
			this.classList.toggle('active');
			this.nextElementSibling.classList.toggle('active');		
		});
	});
	
}




new Swiper('.swiper-module', {
	slidesPerView: 3,
	spaceBetween: 32,
	navigation: {
		prevEl: ".program__prev",
		nextEl: ".program__next",
	}
})


