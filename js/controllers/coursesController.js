

$(document).ready(function(){
    
    $('#assignments-tab').hide();
    $('#trainers-tab').hide();


    


    // Code for profile tabs
    $('#studentTab').on('click', function() {
        clearTabs();
        $('#assignmentTab').addClass("unselected-details-tab");
        $('#trainerTab').addClass("unselected-details-tab");
        $('#studentTab').addClass("selected-details-tab");
        $('#students-tab').show();
        $('#trainers-tab').hide();
        $('#assignments-tab').hide();
      
    }); 
  
    $('#assignmentTab').on('click', function() {
        clearTabs();
        $('#assignmentTab').addClass("selected-details-tab");
        $('#trainerTab').addClass("unselected-details-tab");
        $('#studentTab').addClass("unselected-details-tab");
        $('#assignments-tab').show();
        $('#students-tab').hide();
        $('#trainers-tab').hide();
    }); 

    $('#trainerTab').on('click', function() {
        clearTabs();
        $('#assignmentTab').addClass("unselected-details-tab");
        $('#trainerTab').addClass("selected-details-tab");
        $('#studentTab').addClass("unselected-details-tab");
        $('#assignments-tab').hide();
        $('#students-tab').hide();
        $('#trainers-tab').show();
    }); 


    function clearTabs(){
        $('#assignmentTab').removeClass("unselected-details-tab");
        $('#trainerTab').removeClass("unselected-details-tab");
        $('#studentTab').removeClass("unselected-details-tab");
        $('#assignmentTab').removeClass("selected-details-tab");
        $('#trainerTab').removeClass("selected-details-tab");
        $('#studentTab').removeClass("selected-details-tab");
    }

    
    

    



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
      
      // Code for choosing the add-button's list-row
      $('.button-colored-content .list-row').click(function(){
        $('.list-row').css("background","var(--secondary-color)");
        $(this).css("background","var(--main-color)");
      })


    $('#add-student-container').on('click',function(){addEntity('#add-student-button','#add-student-container',
    '#add-student-container .fas.fa-plus','#add-student-content');});


    $('#add-trainer-container').on('click',function(){addEntity('#add-trainer-button','#add-trainer-container',
    '#add-trainer-container .fas.fa-plus','#add-trainer-content');});

    $('#add-assignment-container').on('click',function(){addEntity('#add-assignment-button','#add-assignment-container',
    '#add-assignment-container .fas.fa-plus','#add-assignment-content');});


    
      
    
    function addEntity(button,container,icon,content){
        if($(button).hasClass('selected')){
            $(button).removeClass('selected');
            $(container).removeClass('selected');
            $(button).addClass('unselected');
            $(container).addClass('unselected');
            $(icon).css('transform','rotate(0deg)');
            $(content).css('display','none');
        }
        else{
            $(button).removeClass('unselected');
            $(container).removeClass('unselected');
            $(button).addClass('selected');
            $(container).addClass('selected');
            $(icon).css('transform','rotate(45deg)');
            $(content).css('display','inline');
        }
    }

  });

  


