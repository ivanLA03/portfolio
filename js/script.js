document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
            if (window.innerWidth <= 980) {
                e.preventDefault();
                const offset = window.getComputedStyle(document.querySelector('.nav')).getPropertyValue('height');
                const targetOffsetTop = targetElement.offsetTop - parseFloat(offset);
  
                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: 'smooth',
                });
            }
        }
    });
});
  
  