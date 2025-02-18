$(function(){

    
    $('.contant').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      // autoplay: true,
      arrows: false,
      // autoplaySpeed: 1000,
      dots: true,
      dotsClass:'container test'
    });    
    
                      
      
      let searchIcon = document.querySelector('.search')
      let searchPreviewSection = document.querySelector('#search')
      let cruxIcon = document.querySelector('.crux')
      let mobileSearch = document.querySelector(".mobile_search");
      let formInput = document.querySelector(".form_input");
      
      
      searchIcon.addEventListener("click", function () {
          searchPreviewSection.classList.add("search_popup_active");
          formInput.classList.add("increase_input");
        });
      
        mobileSearch.addEventListener("click", function () {
          searchPreviewSection.classList.add("search_popup_active");
        });
      
        cruxIcon.addEventListener("click", function () {
          searchPreviewSection.classList.remove("search_popup_active");
          formInput.classList.remove("increase_input");
        });
      
        searchPreviewSection.addEventListener("click", function (e) {
          console.log(e.currentTarget.classList.contains("search_popup_active"));
  
        });
        
      })
                    

