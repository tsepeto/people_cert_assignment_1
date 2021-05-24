$(document).ready(function(){
    
    $('#courses-tab').hide();

    // Code for profile tabs
    $('#courseTab').on('click', function() {
      $('#courseTab').removeClass("unselected-details-tab");
      $('#descriptionTab').removeClass("selected-details-tab");
      $('#courseTab').addClass("selected-details-tab");
      $('#descriptionTab').addClass("unselected-details-tab");
      $('#courses-tab').show();
      $('#description-tab').hide();
      
    }); 
  
    $('#descriptionTab').on('click', function() {
        $('#descriptionTab').removeClass("unselected-details-tab");
        $('#courseTab').removeClass("selected-details-tab");
        $('#descriptionTab').addClass("selected-details-tab");
        $('#courseTab').addClass("unselected-details-tab");
        $('#description-tab').show();
        $('#courses-tab').hide();
      }); 

});