'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    if(document.body.classList.contains('dark-theme')){
        this.textContent = "Light";
    } else{
        this.textContent = "Dark";
    }
    if(className == "light-theme"){
        this.textContent = "Dark";
    } else{
        this.textContent = "light";
    }

    if(document.body.classList.contains('dark-theme')){
        localStoarge.setItem('theme', 'dark');
    } else{
        localStorage.setItem('theme', 'light');
    }

    const temaSalvo = localStorage.getItem('theme');

    if (temaSalvo === 'dark'){
        document.body.classList.add('dark-theme');
    }

    console.log('current class name: ' + className);
});