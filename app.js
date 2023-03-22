const currentImage = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach( img => img.addEventListener('click', setImage));

function setImage(e){

    imgs.forEach( img => {
        img.style.opacity = 1;
    })

    currentImage.src = e.target.src;

    currentImage.classList.add('fade-in');

    setTimeout(()=> currentImage.classList.remove('fade-in'), 500)

    e.target.style.opacity = 0.6;
}