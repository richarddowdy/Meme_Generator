document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form");
    var section = document.querySelector("section")
    //when the button with the 'type=submit' is clicked or enter key
    //is pressed, the following function will run
    form.addEventListener("submit", function(){
        var topText = document.querySelector(".top-text").value
        //var bottomText = document.querySelector(".bottom-text").vaule

        // this will alert the input value of the top-text field 
        //alert(bottomText);
        var test = document.createElement("div");
        test.innerText = "working";
    //prevents refresh
    //event.preventDefault();
    });
})