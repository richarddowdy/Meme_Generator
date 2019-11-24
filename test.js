window.onload = function() {
    // Declaring variables
    let form, topText, bottomText, imgUrl, gallery

    topText = document.querySelector(".top-text");
    bottomText = document.querySelector(".bottom-text");
    imgUrl = document.querySelector(".image-url");
    gallery = document.querySelector(".gallery");
    form = document.getElementById("form");

    form.addEventListener("submit", function(){
        // Creating all the internal meme elements
        let newMeme = document.createElement("div");
        let topMeme = document.createElement("div");
        let bottomMeme = document.createElement("div");
        let memeImg = document.createElement("img");
        
        //checking the length of the meme text top&bottom
        if(topText.value.length > 20 || bottomText.value.length > 20){
            // Alerts the user that the text is too long
            alert("Your text is too long\n Please use less than 20 characters per line");
            event.preventDefault();

            //this can be broken up into more elif statements in order to be 
            //more specific about which, or both, text fields is too long.
        } else {
            console.log(topText.value);
            topMeme.innerHTML = topText.value
            bottomMeme.innerHTML = bottomText.value
        
        
            // Adding a newMeme div to the dom with top&bottom text divs inside
            gallery.appendChild(newMeme);
            memeImg.src = imgUrl.value;
            newMeme.appendChild(memeImg);
            newMeme.appendChild(topMeme);
            newMeme.appendChild(bottomMeme);
            

            
            // New Meme styling
            newMeme.style.height = "auto";
            newMeme.style.display = "inline-block";
            newMeme.style.width = "40%"
            newMeme.style.margin = "40px";
            newMeme.style.position = "relative";
            
            // Image styling
            memeImg.style.width = "100%";
            memeImg.style.height = "auto";

            // Meme text styling
            //top
            topMeme.style.position = "absolute";
            topMeme.style.marginBottom = "40px";
            topMeme.style.color = "white"
            topMeme.style.textAlign = "center";
            topMeme.style.fontSize = "30px";
            //bottom
            bottomMeme.style.position = "absolute";
            bottomMeme.style.marginTop = "40px";
            bottomMeme.style.color = "white";
            bottomMeme.style.textAlign = "center";
            bottomMeme.style.fontSize = "30px";

            // Centers the meme 
            //top
            topMeme.style.top = "15%";
            topMeme.style.left = "50%";
            topMeme.style.zIndex = "1";
            topMeme.style.transform = "translate(-50%, -50%)";
            //bottom
            bottomMeme.style.bottom = "5%";
            bottomMeme.style.left = "50%";
            bottomMeme.style.zIndex = "1";
            bottomMeme.style.transform = "translate(-50%, -50%)";
            
            // Prevent refresh after function executes
            event.preventDefault();
        }
    })

}



