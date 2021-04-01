alert("hie");
function textchange()
{
$(document).ready(function(){
    // Change text of input button
    $("#myInput").prop("value", "Input New Text");
    
    // Change text of button element
    $("#myButton").html("Button J Query Text");
});
}


$(document).ready(function(){
    // Set background image of a div on click of the button
    $("#changeBg").click(function(){
        var imageUrl = "assest/images/imges.jpg";
        $(".container").css("background-image", "url(" + imageUrl + ")");
    });    
});

$(document).ready(function(){ 
    $('#button1').click(function(){ 
     $('#r2').remove(); 
     });
  });
  $(document).ready(function(){
    $("#setvalue").click(function(){
      $("#setname").val("MCA 3rd Semister");
    });
});
$(document).ready(function(){ 
$("#classname").click(function() {
   var className = $(this).attr("class");
   // alert the class name
   alert(className);
});
});