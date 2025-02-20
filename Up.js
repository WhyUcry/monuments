const button = document.getElementById('scrollToTopButton');

    // отображение кнопки
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        button.classList.remove('opacity-0', 'invisible');
        button.classList.add('opacity-100', 'visible');
      } else {
        button.classList.remove('opacity-100', 'visible');
        button.classList.add('opacity-0', 'invisible');
      }
    });



button.addEventListener('click', () => {
    let currentScroll = window.scrollY;
    const interval = 64;
    const step = currentScroll / (1000 / interval); // плавное движение
  
    const scrollStep = () => {
      if (currentScroll > 0) {
        window.scrollTo(0, currentScroll);
        currentScroll -= step;
        requestAnimationFrame(scrollStep);
      } else {
        window.scrollTo(0, 0);
      }
    };
  
    scrollStep();
  });