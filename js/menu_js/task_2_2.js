let c_all = document.querySelectorAll('.all');

document.querySelector('nav').addEventListener('click', event => {
    let filterClass = event.target.dataset['f'];
    if (event.target.tagName !== 'BUTTON') return false;

    

    c_all.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });
});