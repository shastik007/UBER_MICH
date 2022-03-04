let burger = document.getElementById('menu-toggle')
console.log(burger)
let inpCheck = document.querySelector('.inpF')
let UBER = document.querySelector('.UBER')
inpCheck.addEventListener('click', () => {
	let sub_nav = document.querySelector('.sub_nav')
	if (sub_nav.style.display === 'block') {
		setTimeout(() => {
			sub_nav.style.display = 'none'
		}, 300)
		sub_nav.classList.add('sub_nav_no')
	} else {
		sub_nav.classList.remove('sub_nav_no')
		sub_nav.style.display = 'block'
	}
})
burger.addEventListener('click', myFunction)
function myFunction(e) {
	var x = document.querySelector('.bg_burger')
	e.stopPropagation()
	console.log(x)
	if (x.style.display === 'block') {
		setTimeout(() => {
			x.style.display = 'none'
		}, 300)
		x.classList.add('burger_no')
	} else {
		x.classList.remove('burger_no')
		x.style.display = 'block'
	}
}
UBER.addEventListener('mouseout', () => {
	let sub_nav_select = document.querySelector('.sub_nav_select')
	sub_nav_select.style.display = 'none'
})
UBER.addEventListener('mouseover', () => {
	let sub_nav_select = document.querySelector('.sub_nav_select')
	sub_nav_select.style.display = 'block'
})

// -----------------------------------
