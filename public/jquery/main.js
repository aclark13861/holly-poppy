const menu = document.querySelector('.menu');
const btn = document.querySelectorAll('button.nav-tgl');
// btn.addEventListener('click', evt => {
// 	// menu.classList.toggle('active');
// 	console.log(menu)
// 	console.log('clicked')
// })
btn.forEach(button => {
	button.addEventListener('click', e => {
		menu.classList.toggle('active')
	})
})

$(function() {
  // Handler for .ready() called.

});

  $(document).ready(function() {

    new WOW().init();
    
});