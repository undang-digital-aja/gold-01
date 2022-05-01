// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		toggleNav = document.getElementById('nav-toggle'),
		closeNav = document.getElementById('nav-close');

// Show Menu
toggleNav.addEventListener('click', ()=>{
	navMenu.classList.toggle('show-menu')
});

// Hide Menu
closeNav.addEventListener('click', ()=>{
	navMenu.classList.remove('show-menu')
});
// ===== end show menu ===== //

// ===== REMOVE MOBILE MENU ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction));
// ===== end remove mobile menu ===== //

// ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}

window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active menu ===== //

// ===== HOME ===== //
const homeSwiper = new Swiper(".home__slides", {
	spaceBetween: 30,
	effect: "fade",

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
});
// ===== end home slider ===== //

/* ===== COUNTDOWN TIMER ===== */
const countdownDate = new Date("December 25, 2022 09:00:00").getTime();

const timerFunction = setInterval(() => {
	const currentDate = new Date().getTime();
	const finalTime = countdownDate - currentDate;

	if(finalTime > 0){
		const days = Math.floor(finalTime / (1000*60*60*24));
		const hours = Math.floor((finalTime % (1000*60*60*24)) / (1000*60*60));
		const minutes = Math.floor((finalTime % (1000*60*60)) / (1000*60));
		const seconds = Math.floor((finalTime % (1000*60)) / (1000));

		document.getElementById('days').innerHTML = days;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;
	}else{
		clearInterval(timerFunction);
		document.getElementById("timer-stop").innerHTML = "The Countdown is Over!";
	}
}, 1000);
// ===== end countdown timer ===== //

// ===== RSVP --> send to Google Sheets ===== //
const rsvpForm = document.querySelector('.rsvp__form');
const rsvpRespon = document.querySelector('.rsvp__respon');

const scriptURL = '#';

const form = document.forms['rsvp-input-data']

form.addEventListener('submit', e => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => {
	
		// Alert: RSVP Modal
		rsvpRespon.classList.toggle('rsvp-respon');

		// Resert Form
		rsvpForm.reset();

		console.log('Success!', response);
	})
	.catch(error => console.error('Error!', error.message))
})
// ===== end rsvp ===== //

// ===== WEDDING GIFT ===== //
const giftButton = document.getElementById('gift-button'),
		giftModal = document.getElementById('gift-modal'),
		modalContainer = document.getElementById('modal-content'),
		closeModal = document.getElementById('close-modal'),
		closeModalBottom = document.getElementById('close-modal-bottom');

giftButton.addEventListener('click', ()=>{
	document.body.style.overflow = 'hidden';
	giftModal.classList.toggle('show-modal');
})

closeModal.addEventListener('click', ()=>{
	document.body.style.overflow = 'auto';
	giftModal.classList.remove('show-modal')
})
closeModalBottom.addEventListener('click', ()=>{
	giftModal.classList.remove('show-modal');
	document.body.style.overflow = 'auto';
})

// Copy No. Rekening
const bca = document.getElementById('bca'),
		mandiri = document.getElementById('mandiri'),
		bni = document.getElementById('bni');
const copyBca = document.querySelector('.copy__bca'),
		copyMandiri = document.querySelector('.copy__mandiri'),
		copyBni = document.querySelector('.copy__bni');

copyBca.addEventListener('click', ()=>{
	document.execCommand("copy");
});
copyMandiri.addEventListener('click', ()=>{
	document.execCommand("copy");
});
copyBni.addEventListener('click', ()=>{
	document.execCommand("copy");
});

copyBca.addEventListener("copy", function(event){
	event.preventDefault();
	if(event.clipboardData){
		event.clipboardData.setData("text", bca.textContent);
		alert("BCA Copied")
	}else{
		alert("Not copied!")
	}
});
copyMandiri.addEventListener("copy", function(event){
	event.preventDefault();
	if(event.clipboardData){
		event.clipboardData.setData("text", mandiri.textContent);
		alert("Mandiri Copied")
	}else{
		alert("Not Copied!")
	}
});
copyBni.addEventListener("copy", function(event){
	event.preventDefault();
	if(event.clipboardData){
		event.clipboardData.setData("text", bni.textContent);
		alert("BNI Copied")
	}else{
		alert("Not Copied!")
	}
});
// ===== end wedding gift ===== //

// ===== FILTERS TABS ===== //
const tabs = document.querySelectorAll('[data-target]'),
		tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
	tab.addEventListener('click', ()=>{
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach(tc =>{
			tc.classList.remove('maids__active');
		})
		target.classList.add('maids__active');

		tabs.forEach(t =>{
			t.classList.remove('maid-tab-active');
		})
		tab.classList.add('maid-tab-active');
	})
})
// ===== end filters tabs ===== //

// ===== BACKSOUND ===== //
const backsound = document.getElementById('song'),
		backsoundIcon = document.getElementById('backsound-icon'),
		popupBtn = document.getElementById('popup-btn');

popupBtn.addEventListener('click', ()=>{
	backsound.play();
	backsoundIcon.src = "assets/img/pause.png";
})

backsoundIcon.onclick = ()=>{
	if(backsound.paused){
		backsound.play();
		backsoundIcon.src = "assets/img/pause.png";
	}else{
		backsound.pause();
		backsoundIcon.src = "assets/img/play.png";
	}
}
// ===== end backsound ===== //

/* ===== POPUP ===== */
const popup = document.getElementById('popup');
// const popupBtn = document.getElementById('popup-btn');

popupBtn.addEventListener('click', ()=>{
	document.body.style.overflow = 'auto';
	popup.style.display = 'none';
});
// ===== end popup ===== //

// ===== AOS ANIMATE ===== //
// 1. home -> .home__content

// 2. quotes -> .quotes__img, .quotes__content

// 3. class css -> .section__title
const sectionTitle = document.querySelectorAll('.section__title');
sectionTitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
});

// 4. class css -> .section__subtitle
const sectionSubtitle = document.querySelectorAll('.section__subtitle');
sectionSubtitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

// 5. couple -> .couple__box

// 6. event -> .event__box

// 7. countdown timer -> .timer__box
const timerBox = document.querySelectorAll('.timer__box');
timerBox.forEach((n, i) => {
	n.dataset.aos = 'flip-left';
	n.dataset.aosDelay = i * 100;
});

// 8. rsvp -> .rsvp__img, .rsvp__box

// 9. wedding gift -> .gift__container

// 10. live streaming -> .streaming__container

// 11. pray -> .pray__container

// 12. gallery -> .gallery__box
const galleryBox = document.querySelectorAll('.gallery__box');
galleryBox.forEach((img, i) => {
	img.dataset.aos = 'zoom-in-down';
	img.dataset.aosDelay = i * 100;
});

// 13. video -> .video__container

// 14. groomsmen & bridesmaid -> .maids__nav, .maids__sections

// 15. prokes 
const prokesBox = document.querySelectorAll('.prokes__box');
prokesBox.forEach((n, i) => {
	n.dataset.aos = 'flip-left';
	n.dataset.aosDelay = i * 100;
});

// 16. footer -> .footer__box
const footerBox = document.querySelectorAll('.footer__box');
footerBox.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

AOS.init({
	duration: 1500,
	once: true,  
});
// ===== end aos animate ===== //