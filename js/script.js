document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
            const offset = window.getComputedStyle(document.querySelector('.nav')).getPropertyValue('height');
            const targetOffsetTop = targetElement.offsetTop - parseFloat(offset);
  
            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth',
            });
        }
    });
});