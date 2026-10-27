/* Bind pagination activation to native buttons, not their container. */
(function () {
  'use strict';

  document.querySelectorAll('.home-page .swiper').forEach(function (element) {
    var swiper = element.swiper;
    if (!swiper || !swiper.pagination) return;

    function updateButtons() {
      var bullets = swiper.pagination.bullets;
      if (!bullets) return;

      bullets.forEach(function (button, index) {
        button.type = 'button';
        button.setAttribute('aria-label', 'Go to slide ' + (index + 1));
        button.setAttribute('aria-current',
          button.classList.contains(swiper.params.pagination.bulletActiveClass)
            ? 'true' : 'false');

        if (button.dataset.activationBound) return;
        button.dataset.activationBound = 'true';
        button.addEventListener('click', function () {
          var slide = index * swiper.params.slidesPerGroup;
          if (swiper.params.loop) {
            swiper.slideToLoop(slide);
          } else {
            swiper.slideTo(slide);
          }
        });
      });
    }

    swiper.on('paginationRender paginationUpdate', updateButtons);
    updateButtons();
  });
})();
