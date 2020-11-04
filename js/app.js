const search = new Filter('search', 'data-caption');
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('lightbox');
const slide = document.querySelectorAll('.slide');
const caption = document.querySelectorAll('.gallery a');
const captionText = document.querySelector('.caption');
let slideIndex;

// window.addEventListener('load', function() {
//     baguetteBox.run('.gallery');
// });

function openModel () {
    modal.style.display = 'block';
}

function closeModal () {
    modal.style.display = 'none';
}

function showSlide (n) {
    slideIndex = n;
    for(let i = 0 ; i < slide.length ; i++) {
        slide[i].style.display = 'none';
    }
    if (slideIndex > (slide.length) - 1 ){
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = (slide.length) - 1;
    }
    slide[slideIndex].style.display = 'block';
    caption[slideIndex].className += " active";
    captionText.innerHTML = caption[slideIndex].dataset.caption;
}

for(let i = 0 ; i < images.length ; i++){
    images[i].addEventListener('click', function() {
        openModel();
        showSlide(i);
    });
}

modal.addEventListener('click', function (event) {
    if(event.target.className === 'close'){
        closeModal();
    }
    else if(event.target.className === 'next') {
        showSlide(slideIndex += 1);
    }
    else if(event.target.className === 'previous') {
        showSlide(slideIndex -= 1);
    }
    else {
        closeModal();
    }
});








