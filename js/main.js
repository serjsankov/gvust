window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const containerSelectBrans = document.querySelector(".js-container-select-brands")
  initClicks();
  initCustomSelect();
  initMaskInputs();
  function initClicks() {
    document.addEventListener("click", (event) => {
      if (event.target.closest(".burger")) {
        header.classList.toggle("active");
        if (header.classList.contains("active")) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "scroll";
        }
      } if (event.target.closest(".js-show-select-brand")) { 
        event.preventDefault();
        containerSelectBrans.classList.toggle("active");
      }
    });
  };
  function initCustomSelect() { 
    $("select").selectize();
  };

  function initMaskInputs() { 
    $(".js-mask-price").mask("#,##0$", { reverse: true });
  };
});
