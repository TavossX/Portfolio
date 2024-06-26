ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('', { origin: 'bottom' });
ScrollReveal().reveal('.img_svg, .about, .curriculo_text', { origin: 'right'});
ScrollReveal().reveal('.text-left', { origin: 'top' });
ScrollReveal().reveal('.container_titulo , .img_about', { origin: 'left' });
