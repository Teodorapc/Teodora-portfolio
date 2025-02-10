/*------ SHOW MENU ------*/
/* Show menu */
const hamburgerBtn = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links');

function toggleMenu() {
  navMenu.classList.toggle('show-menu');
  hamburgerBtn.classList.toggle('active');
}

hamburgerBtn.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      hamburgerBtn.classList.remove('active');
    });
});

/*------ SHADOW HEADEr ------*/
const shadowHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*------ EMAIL JS ------*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_13cdcsc','template_gtp6unr','#contact-form', 'YNACGxS_OfB8EP4vH')
    .then(() =>{
        // Mostra messaggio inviato
        contactMessage.textContent = 'Messaggio inviato con successo! 🎉'

        // Cancella i campi di input
        contactForm.requestFullscreen()
    }, () =>{

    })
}

contactForm.addEventListener('submit', sendEmail)

/*------ SCROLL TO TOP ------*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')

	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*------ SCROLL REVEAL ANIMATION ------*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.box-info', {origin:'left'})

sr.reveal('.box-form, .contact-social', {origin:'right'})

sr.reveal('.project-card', {intervall: 100})
