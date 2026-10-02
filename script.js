document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const slides = [
    {
      src: '2.webp',
      alt: 'Primer plano de la placa durante la reparación del puerto de carga',
    },
    {
      src: '3.webp',
      alt: 'Contactos del puerto de carga expuestos sobre la placa del celular',
    },
    {
      src: '4.webp',
      alt: 'Puerto USB instalado en la placa del celular después de la reparación',
    },
    {
      src: '5.webp',
      alt: 'Conector de carga de la placa visto bajo aumento',
    },
    {
      src: '6.webp',
      alt: 'Contactos del conector de carga vistos bajo aumento',
    },
    {
      src: '7.webp',
      alt: 'Trabajo técnico sobre el conector de carga',
    },
    {
      src: '8.webp',
      alt: 'Contactos de la placa expuestos para su reparación',
    },
    {
      src: '9.webp',
      alt: 'Conector de carga separado parcialmente de la placa',
    },
    {
      src: '10.webp',
      alt: 'Conector de carga levantado durante la reparación',
    },
  ];

  const preloadSlides = () => {
    slides.forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });
  };

  const setupSlideshow = (slideshowId) => {
    const slideshow = document.getElementById(slideshowId);

    if (!slideshow) {
      return;
    }

    let activeImage = slideshow.querySelector('[data-slide-current]');
    let incomingImage = slideshow.querySelector('[data-slide-next]');

    if (!activeImage || !incomingImage) {
      return;
    }

    let currentIndex = 0;

    const showSlide = (index) => {
      incomingImage.src = slides[index].src;
      incomingImage.alt = slides[index].alt;
      incomingImage.removeAttribute('aria-hidden');
      activeImage.setAttribute('aria-hidden', 'true');

      incomingImage.classList.add('is-active');
      activeImage.classList.remove('is-active');

      [activeImage, incomingImage] = [incomingImage, activeImage];
    };

    activeImage.src = slides[currentIndex].src;
    activeImage.alt = slides[currentIndex].alt;

    window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;

      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 4500);
  };

  preloadSlides();
  setupSlideshow('hero-slideshow');
});