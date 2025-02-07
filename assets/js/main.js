/*------ SHOW MENU ------*/
/* Show menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu nascosto */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

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

sr.reveal('.home-name, .about-container .section-title-1, .about-info, .contact-mail', {origin:'left'})

sr.reveal('.home-info, .about-profile, .contact-data, .contact-social', {origin:'right'})

sr.reveal('.services-card, .project-card', {intervall: 100})
