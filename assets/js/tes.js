var mskSlider = document.querySelector('musikslider')

mskSlider.addEventListener('mousemove', setvolume);

function setvolume() {
    musik.volume = mskSlider.value / 100; 
}