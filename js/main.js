window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const containerSelets = document.querySelectorAll(".searches-filter__select-container select.js-select-brand");

  let selectOption = document.querySelectorAll("select.js-select-brand[name='brand_0'] option"),
    selectsContainer = document.querySelector(".searches-filter__property-brand-flex-selects");
  containerBtns = document.querySelector(".js-btns-select-brand"),
    selectBlock = document.querySelectorAll(".searches-filter__select-container");
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

        event.srcElement.classList.toggle("active");
        
        count++;
        
        let selectContainerNew = document.createElement("div");
        selectContainerNew.className = "searches-filter__select-container js-select-block";
        selectContainerNew.setAttribute("data-index", `${count}`)

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

     
        // let btnAddNewSelect = document.createElement("div");
        // btnAddNewSelect.classList = "block-btn";
        // btnAddNewSelect.setAttribute("data-index", `${count}`);
        // btnAddNewSelect.innerHTML += `
        // <button class="searches-filter__property-button js-show-select-brand">
        //   <span
        //     class="searches-filter__property-button-line button-line_vertical"
        //   ></span>
        //   <span
        //     class="searches-filter__property-button-line button-line_position"
        //   ></span>
        // </button>`;
        // containerBtns.append(btnAddNewSelect);
        
        // event.srcElement.classList.remove("js-show-select-brand");
        // event.srcElement.classList.add("js-hide-select-brand");
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
