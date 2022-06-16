const checkbox = document.getElementById('chkbox');
const toggleIcon = document.getElementById('toggle-icon');

function darkmood() {
    toggleIcon.children[0].innerText = 'Dark Mood';
    toggleIcon.children[1].classList.replace('fa-sun', "fa-moon");
};
function lightmood() {
    toggleIcon.children[0].innerText = 'Light Mood';
    toggleIcon.children[1].classList.replace('fa-moon', "fa-sun");
};

function toggleTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        darkmood();
        localStorage.setItem("theme", 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightmood();
        localStorage.setItem("theme", 'light');
    };
};

checkbox.addEventListener('change', toggleTheme);

if (localStorage.getItem('theme') === 'dark') {
    checkbox.click();
}
