const mouseCursor = document.querySelector('.cursor');
const navlinks = document.querySelectorAll('.navLinks li'); 

window.addEventListener('mousemove', cursor);

function cursor(c) {
    mouseCursor.style.top = c.pageY + 'px';
    mouseCursor.style.left = c.pageX + 'px';
}





navlinks.forEach(links => {
    links.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
    links.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    });
});