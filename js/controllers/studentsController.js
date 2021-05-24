

$(document).ready(function(){
    
    $('#assignments-tab').hide();

    // Code for profile tabs
    $('#courseTab').on('click', function() {
      $('#courseTab').removeClass("unselected-details-tab");
      $('#assignmentTab').removeClass("selected-details-tab");
      $('#courseTab').addClass("selected-details-tab");
      $('#assignmentTab').addClass("unselected-details-tab");
      $('#courses-tab').show();
      $('#assignments-tab').hide();
      
    }); 
  
    $('#assignmentTab').on('click', function() {
        $('#assignmentTab').removeClass("unselected-details-tab");
        $('#courseTab').removeClass("selected-details-tab");
        $('#assignmentTab').addClass("selected-details-tab");
        $('#courseTab').addClass("unselected-details-tab");
        $('#assignments-tab').show();
        $('#courses-tab').hide();
      }); 




      //Code for show description in Large and Small screens
      function showDescription(){
        let small = window.matchMedia("(max-width: 690px)");
        if(small.matches){
          $("div.content-profile-container").css( "height", "240px" );
          let len = $("label.selected").parents("div.content-profile-container")
            .css( "height", "440px" );
        }
        else{
          $("div.content-profile-container").css( "height", "120px" );
          let len = $("label.selected").parents("div.content-profile-container")
          .css( "height", "240px" );
        }
          
      }

      $('.descriptionsLabel').click(function(){
          $(this).toggleClass("selected");

          showDescription();

      })




      //Code for choosing the list-row
      $('.list-row').click(function(){
        $('.list-row').css("background","var(--main-color)");
        $(this).css("background","var(--secondary-color)");
      })
      


  });