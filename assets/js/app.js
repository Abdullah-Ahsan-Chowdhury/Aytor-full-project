$(function(){

    

    $('.parents').slick({
        arrows: false,
        dots:true,
        dotsClass:'container slod',
        autoplay: true,
        autoplaySpeed: 2000,
    });
  
                    
    
    let searchIcon = document.querySelector('.search')
    let searchPreviewSection = document.querySelector('#search')
    let crossIcon = document.querySelector('.cross')
    let mobileSearch = document.querySelector(".mobile_search");
    let formInput = document.querySelector(".form_input");
    
    
    searchIcon.addEventListener("click", function () {
        searchPreviewSection.classList.add("search_popup_active");
        formInput.classList.add("increase_input");
      });
    
    searchIcon.addEventListener("click", function () {
        searchPreviewSection.classList.add("search_popup_active");
        formInput.classList.add("increase_input");
      });
    
      mobileSearch.addEventListener("click", function () {
        searchPreviewSection.classList.add("search_popup_active");
      });
    
      crossIcon.addEventListener("click", function () {
        searchPreviewSection.classList.remove("search_popup_active");
        formInput.classList.remove("increase_input");
      });
    
      searchPreviewSection.addEventListener("click", function (e) {
        console.log(e.currentTarget.classList.contains("search_popup_active"));

      });
      
    })
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))





    
    
    