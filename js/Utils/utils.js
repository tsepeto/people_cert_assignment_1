

// Import a html file into a <div include-html="file's path"> </div>
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
}


$('.NumericTextBox').keypress(function(event) {
  
    if ((event.which != 46 || $(this).val().indexOf('.') != -1)&&(event.which < 48 || event.which > 57)) {
    //alert('hello');
   		if((event.which != 46 || $(this).val().indexOf('.') != -1)){
      	// alert('Multiple Decimals are not allowed');
      }
      event.preventDefault();
   }
   if(this.value.indexOf(".")>-1 && (this.value.split('.')[1].length > 1))		{
        // alert('Two numbers only allowed after decimal point');
        event.preventDefault();
    }
});



$(document).ready(function(){

  includeHTML();

  $("#starts").change(function() {
    $("#ends").attr('min',$("#starts").val());
  });
  $("#oralMark").change(function() {
    $("#totalMark").attr('min',$("#oralMark").val());
  });

});

