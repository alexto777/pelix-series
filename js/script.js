let themeToogle = document.getElementById('the-dark');
let body = document.body;

// themeToogle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     themeToogle.textContent = body.classList.contains('dark-mode')
//     ? 'Modo Claro': 'Modo Oscuro'

// });

function toogleTheme () {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeToogle.textContent = 'Modo Oscuro';
    } else {
        body.classList.add('dark-mode');
        themeToogle.textContent = 'Modo Claro'
    }
}


themeToogle.addEventListener('click', toogleTheme);