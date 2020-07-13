const carousel = document.querySelector(".carousel");
//console.log(carousel);

const nextButton = document.querySelector(".right-btn");

const prevButton = document.querySelector(".left-btn");

const slides = [...carousel.children];

let slideWidth = slides[0].getBoundingClientRect().width;   //slide width
//console.log(slideWidth);

//Position of one image horizontally
function positionSlides(slides) {
    for(let index=0; index < slides.length; index++) {
        slides[index].style.left = slideWidth * index + "px";
    
       // slides[0].style.left = slideWidth * 0 + "px";
       // slides[1].style.left = slideWidth * 1 + "px";
       // slides[2].style.left = slideWidth * 2 + "px";
    }
}

positionSlides(slides);

nextButton.addEventListener("click", function(){
    const currentSlide = carousel.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;
    //console.log(currentSlide, nextSlide);
    
    const position = nextSlide.style.left;
    carousel.style.transform = `translateX(-${position})`; // 'translateX(- "+position+")'
    currentSlide.classList.remove("active");
    nextSlide.classList.add("active");

    arrowDisable(nextSlide, slides)
});

prevButton.addEventListener("click", function(){
    const currentSlide = carousel.querySelector(".active");
    const prevSlide = currentSlide.previousElementSibling;
    //console.log(currentSlide, nextSlide);
    
    const position = prevSlide.style.left;
    console.log(position);
    
    carousel.style.transform = `translateX(-${position})`;
    currentSlide.classList.remove("active");
    prevSlide.classList.add("active");

    arrowDisable(prevSlide, slides);
});

function arrowDisable(targetslide, slides) {
    if(targetslide==slides[0]){
        prevButton.classList.add("hide");
        nextButton.classList.remove("hide");
    } else if(targetslide==slides[slides.length-1]) {
        prevButton.classList.remove("hide");
        nextButton.classList.add("hide");
    } else {
        prevButton.classList.remove("hide");
        nextButton.classList.remove("hide");
    }
}
