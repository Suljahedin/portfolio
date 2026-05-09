document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const iconWrap = toggle.querySelector('.icon');

    // burger
    const burger = document.querySelector('.navbar-burger');
    const menu = document.getElementById(burger.dataset.target);
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    // set theme based on localStorage or system preference
    const setIcon = (isDark) => {
        iconWrap.innerHTML = isDark
            ? '<span class="iconify" data-icon="ph:sun-bold"></span>'
            : '<span class="iconify" data-icon="ph:moon-bold"></span>';
    };

    setIcon(html.getAttribute('data-theme') === 'dark');

    // Theme toggle handler
    toggle.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';

        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);

        iconWrap.style.opacity = '0';
        setTimeout(() => {
            setIcon(next === 'dark');
            iconWrap.style.opacity = '1';
        }, 150);
    });
});