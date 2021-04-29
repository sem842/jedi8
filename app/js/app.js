// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation } from 'swiper'
Swiper.use([ Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation ])

import { gsap, Power2 } from 'gsap'

document.addEventListener('DOMContentLoaded', () => {

//Swiper

	const swiperIMG = new Swiper('.slider-img', {
		loop: false,
		speed: 2400,
		parallax: true,
		pagination: {
			el: '.slider-pagination-count .total',
			type: 'custom',
			renderCustom: function(swiper, current, total) {
				let totalRes = total >= 10 ? total : `0${total}`
				return totalRes
			}
		}
	})

	const swiperText = new Swiper('.slider-text', {
		loop: false,
		speed: 2400,
		mousewheel: {
			invert: false
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		}
	})

	swiperIMG.controller.control = swiperText
	swiperText.controller.control = swiperIMG

//Gear

	let gear = document.querySelector('.slider-gear')

	swiperText.on('slideNextTransitionStart', function() {
		gsap.to(gear, 2.8, {
			rotation: '+=40',
			ease: Power2.easeOut
		})
	})

	swiperText.on('slidePrevTransitionStart', function() {
		gsap.to(gear, 2.8, {
			rotation: '-=40',
			ease: Power2.easeOut
		})
	})

//Slide change

	let curnum = document.querySelector('.slider-pagination-count .current'),
			pagcur = document.querySelector('.slider-pagination-current__num')

	swiperText.on('slideChange', function() {
		let ind 		= swiperText.realIndex + 1,
				indRes	=	ind >= 10 ? ind : `0${ind}`
		gsap.to(curnum, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			onComplete: function() {
				gsap.to(curnum, .1, {
					force3D: true,
					y: 10
				})
				curnum.innerHTML = indRes
				pagcur.innerHTML = indRes
			}
		})
		
		gsap.to(curnum, .2, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: .3
		})
	})	
})
