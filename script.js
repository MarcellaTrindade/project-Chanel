var btn = document.querySelector('#expander');
var container = document.querySelector('.minhaDiv');

btn.addEventListener('click', function(){
    if(container.style.display == 'block'){
        container.style.display = none;
    }else {
        container.style.display = 'block';
    }
})