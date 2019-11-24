window.onload = function() {
    let form, topText, bottomText, imgUrl, genMeme, gallery

    topText = document.querySelector(".top-text");
    bottomText = document.querySelector(".bottom-text");
    imgUrl = document.querySelector(".image-url");
    gallery = document.querySelector(".gallery");
    form = document.getElementById("form");
    //genMeme = document.querySelector(".gen-meme");

    form.addEventListener("submit", function(){
        //creating all the internal meme elements
        let newMeme = document.createElement("div");
        let topMeme = document.createElement("div");
        let bottomMeme = document.createElement("div");
        let memeImg = document.createElement("img");
        
        //checking the length of the meme text top&bottom
        if(topText.value.length > 20 || bottomText.value.length > 20){
            alert("Your text is too long\n Please use less than 20 characters per line");
        } else {
            console.log(topText.value);
            topMeme.innerHTML = topText.value
            bottomMeme.innerHTML = bottomText.value
        }
        
        //adding a newMeme div to the dom with top&bottom text inside
        gallery.appendChild(newMeme);
        memeImg.src = imgUrl.value;
        newMeme.appendChild(memeImg);
        newMeme.appendChild(topMeme);
        newMeme.appendChild(bottomMeme);
        

        //newMeme and image styling
        memeImg.style.width = "100%";
        memeImg.style.height = "auto";
        //memeImg.style.position = "relative";
        newMeme.style.height = "auto";
        newMeme.style.display = "inline-block";
        newMeme.style.width = "30%"
        newMeme.style.margin = "40px";
        newMeme.style.position = "relative";
        

        //newmeme text styling
        // topMeme.style.display = "inline-block";
        // bottomMeme.style.display = "inline-block";
        topMeme.style.position = "absolute";
        bottomMeme.style.position = "absolute";
        topMeme.style.marginBottom = "40px";
        bottomMeme.style.marginTop = "40px";
        topMeme.style.color = "white"
        bottomMeme.style.color = "black";
        topMeme.style.textAlign = "center";
        bottomMeme.style.textAlign = "center";
        topMeme.style.fontSize = "30px";
        bottomMeme.style.fontSize = "30px";
        
        topMeme.style.top = "10%";
        topMeme.style.left = "50%";
        topMeme.style.zIndex = "1";

        
        //prevents refresh after function executes
        event.preventDefault();
    })

}



// document.addEventListener("DOMContentLoaded", function(){
//     const form = document.getElementById("form");
//     var section = document.querySelector("section")
//     //when the button with the 'type=submit' is clicked or enter key
//     //is pressed, the following function will run
//     form.addEventListener("submit", function(){
//         var topText = document.querySelector(".top-text").value
//         //var bottomText = document.querySelector(".bottom-text").vaule

//         // this will alert the input value of the top-text field 
//         //alert(bottomText);
//         var test = document.createElement("div");
//         test.innerText = "working";
//     //prevents refresh
//     //event.preventDefault();
//     });
//})