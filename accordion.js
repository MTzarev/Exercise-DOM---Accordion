function toggle() {
    let button = document.querySelector('.button');
    let divExtra = document.querySelector('#extra');

    if (divExtra.style.display === 'none' || button.textContent === 'More') {
        divExtra.style.display = 'block';
        button.textContent = 'Less';
    }
    else if (divExtra.style.display === 'block' || button.textContent === 'Less') {
        divExtra.style.display = 'none';
        button.textContent = 'More';
    }

}