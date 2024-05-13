let wrapper = document.querySelector('.wrapper')
let btn = document.querySelector('.form button')
let inp = document.querySelector('.form input')
let qrImg = document.querySelector('.qr-code img')

btn.onclick = function() {
    let qrValue = inp.value
    console.log(qrValue);
    if(!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=
    200x200&data=${qrValue}`;
    wrapper.classList.add('active');
}