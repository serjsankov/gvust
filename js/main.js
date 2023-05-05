window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const containerSelets = document.querySelectorAll(".searches-filter__select-container select.js-select-brand");

  let selectOption = document.querySelectorAll("select.js-select-brand[name='brand_0'] option"),
    selectsContainer = document.querySelector(".searches-filter__property-brand-flex-selects");
    arrOption = [],
    count = containerSelets.length;;
  initCustomSelect();
  initMaskInputs();
  initClicks();
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
        
        count++;
        
        let selectContainerNew = document.createElement("div");
        selectContainerNew.className = "searches-filter__select-container";

        selectsContainer.append(selectContainerNew);

        let selectNew = document.createElement("select");
        selectNew.setAttribute("Placeholder", "Brands");
        selectNew.setAttribute("name", `brand_${count}`);
        selectNew.className = "searches-filter__select js-select-brand";
        
        selectOption.forEach(option => {
          selectNew.append(option);
        })
      
        selectContainerNew.append(selectNew);
        initCustomSelect();
        selectNew.selectize.updatePlaceholder();
        selectNew.selectize.clear();
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
