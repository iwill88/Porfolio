/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL sobreMi*/
sr.reveal('.sobreMi__img',{}); 
sr.reveal('.sobreMi__subtitle',{delay: 400}); 
sr.reveal('.sobreMi__text',{delay: 400}); 


/*SCROLL Experiencia/Portfolio*/
sr.reveal('.Experiencia__img',{interval: 200}); 

/*SCROLL contacto*/
sr.reveal('.contacto__container',{interval: 200}); 