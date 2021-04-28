// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

import { Swiper, Parallax, Mousewheel, Controller } from 'swiper'
Swiper.use([ Parallax, Mousewheel, Controller ])

document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.slider-img', {
		loop: false,
		speed: 2400,
		parallax: true
	})

	const swiperText = new Swiper('.slider-text', {
		loop: false,
		speed: 2400,
		mousewheel: {
			invert: false
		}
	})

	swiperIMG.controller.control = swiperText
	swiperText.controller.control = swiperIMG

})
