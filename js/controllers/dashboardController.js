$(document).ready(function(){


    
});
function toggleAssignment(x){
    if($(x).parent().hasClass('as-unselected')){
        $('.as-container.as-selected').removeClass('as-selected');
        
        $('.as-container').addClass('as-unselected');
        $(x).parent().removeClass('as-unselected');
        $(x).parent().addClass('as-selected');
    }
    else{
        $(x).parent().removeClass('as-selected');
        $(x).parent().addClass('as-unselected');
    }
}

function toggleCourse(x){
    if($(x).parent().hasClass('c-unselected')){
        $('.cour-container.c-selected').removeClass('c-selected');
        
        $('.cour-container').addClass('c-unselected');
        $(x).parent().removeClass('c-unselected');
        $(x).parent().addClass('c-selected');
    }
    else{
        $(x).parent().removeClass('c-selected');
        $(x).parent().addClass('c-unselected');
    }
}