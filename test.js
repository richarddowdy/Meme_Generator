document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form");
    
    //when the button with the 'type=submit' is clicked or enter key
    //is pressed, the following function will run
    form.addEventListener("submit", function(){
        var topText = document.querySelector(".top-text").value
        var bottomText = document.querySelector(".bottom-text").vaule

        // this will alert the input value of the top-text field 
        alert(topText);
        

    //prevents refresh
    //event.preventDefault();
    });
})