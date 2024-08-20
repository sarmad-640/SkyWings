let menu = document.querySelector(".menu");
let nav_links = document.querySelector(".nav_links");


menu.addEventListener('click', function(e){
    nav_links.classList.toggle('open');

document.querySelector('nav ul').classList.toggle('d_f');
    const isopen = nav_links.classList.contains('open')
    document.querySelector('.menu i').setAttribute('class', isopen ? "ri-close-line": "ri-menu-5-line")
})
nav_links.addEventListener('click', function(e){
    nav_links.classList.remove('open')

    document.querySelector('.menu i').setAttribute('class',"ri-menu-5-line")
})


const scrollRevealAnimation = {
    opacity: 0,
    origin: "bottom",
    duration: 1000,
    distance:"50px"
}
ScrollReveal().reveal(".text p",{
    ...scrollRevealAnimation,
    
})
ScrollReveal().reveal(".text h1",{
    ...scrollRevealAnimation,
delay:500,
})
ScrollReveal().reveal("#plane img",{
    ...scrollRevealAnimation,
    origin:"right",
})
ScrollReveal().reveal("#text_area .btns button",{
    ...scrollRevealAnimation,
delay:1000,
interval:200,
})
ScrollReveal().reveal("#cards",{
    ...scrollRevealAnimation,
    delay:500,
    interval:-500,
})
ScrollReveal().reveal(".img img",{
    ...scrollRevealAnimation,
origin:"left",
})
ScrollReveal().reveal(".content h1",{
    ...scrollRevealAnimation,
})
ScrollReveal().reveal(".content p",{
    ...scrollRevealAnimation,
    delay:500,
interval:200,
})
ScrollReveal().reveal(".content button",{
    ...scrollRevealAnimation,
    delay:1100,
})
ScrollReveal().reveal("#numcards",{
    ...scrollRevealAnimation,
    delay:500,
    interval:200,
})
ScrollReveal().reveal("#benefits_cards",{
    ...scrollRevealAnimation,
    delay:500,
    interval:200,
})