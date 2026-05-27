// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");

const mobileMenu = document.querySelector(".mobile-menu");


menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});




// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }
    else{

        navbar.classList.remove("scrolled");

    }

});

function showMethod(methodId){

    const contents =
    document.querySelectorAll(".method-content");

    const buttons =
    document.querySelectorAll(".method-btn");


    contents.forEach(content => {

        content.classList.remove("active");

    });


    buttons.forEach(button => {

        button.classList.remove("active");

    });


    document
    .getElementById(methodId)
    .classList.add("active");


    event.target.classList.add("active");

}

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add('active');
        }

    });

});

/* ========================= */
/* FAQ ACCORDION */
/* ========================= */

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

        faqItems.forEach(faq => {

            if(faq !== item){
                faq.classList.remove('active');
            }

        });

        item.classList.toggle('active');

    });

});

