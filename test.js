window.onload = function() {
    // Declaring variables
    let form, topText, bottomText, imgUrl, gallery, meme

    // Assigning variables to DOM elements
    topText = document.querySelector(".top-text");
    bottomText = document.querySelector(".bottom-text");
    imgUrl = document.querySelector(".image-url");
    gallery = document.querySelector(".gallery");
    form = document.getElementById("form");

    // Creates a new meme when the form is submitted
    form.addEventListener("submit", function(){
        // Creating all internal meme elements
        let newMeme = document.createElement("div");
        let topMeme = document.createElement("div");
        let bottomMeme = document.createElement("div");
        let memeImg = document.createElement("img");
        
        let meme = document.getElementsByClassName("newMeme");

        //checking the length of the meme text top&bottom
        if(topText.value.length > 20 && bottomText.value.length > 20){
            // Alerts the user that the text is too long
            alert("Both text inputs are too long.\nPlease use less than 20 characters per line");
            event.preventDefault();
        } else if (topText.value.length > 20){
            alert("That's not clever enough.\nUse less than 20 characters at the top");
            event.preventDefault();
        } else if (bottomText.value.length > 20){
            alert("Use 20 characters or less on the bottom");
            event.preventDefault();
        } else if (meme.length > 14){
            // Alerts the user if they have made too many memes
            alert("You've Made Enought\nRemove some Memes to make more");
            event.preventDefault();       
        } else {

            topMeme.innerHTML = topText.value
            bottomMeme.innerHTML = bottomText.value
        
        
            // Adding a newMeme div to the dom with top&bottom text divs inside
            gallery.appendChild(newMeme);
            newMeme.className += "newMeme";
            memeImg.src = imgUrl.value;
            newMeme.appendChild(memeImg);
            newMeme.appendChild(topMeme);
            newMeme.appendChild(bottomMeme);

            
            // New Meme styling
            newMeme.style.height = "auto";
            newMeme.style.display = "inline-block";
            newMeme.style.width = "40%"
            newMeme.style.margin = "20px 5%";
            newMeme.style.position = "relative";

            
            // Image styling
            memeImg.style.width = "100%";
            memeImg.style.maxHeight = "auto";

            // Meme text styling
            //top
            topMeme.style.width = "90%"
            topMeme.style.position = "absolute";
            topMeme.style.marginBottom = "40px";
            topMeme.style.color = "white"
            topMeme.style.fontSize = "40px";
            topMeme.style.fontFamily = "Impact";
            topMeme.style.letterSpacing = "3px";
            topMeme.style.webkitTextStroke = "2px black";
            topMeme.style.webkitTextFillColor = "white";
            topMeme.style.textAlign = "center";
            topMeme.style.fontWeight = "bold";
            //bottom
            bottomMeme.style.width = "90%";
            bottomMeme.style.position = "absolute";
            bottomMeme.style.marginTop = "40px";
            bottomMeme.style.color = "white";
            bottomMeme.style.fontSize = "40px";
            bottomMeme.style.fontFamily = "Impact";
            bottomMeme.style.letterSpacing = "3px";
            bottomMeme.style.webkitTextStroke = "2px black";
            bottomMeme.style.webkitTextFillColor = "white";
            bottomMeme.style.textAlign = "center";
            bottomMeme.style.fontWeight = "bold";


            // Centers the text of the meme 
            //top
            topMeme.style.top = "15%";
            topMeme.style.left = "50%";
            topMeme.style.zIndex = "1";
            topMeme.style.transform = "translate(-50%, -50%)";
            //bottom
            bottomMeme.style.top = "68%";
            bottomMeme.style.left = "50%";
            bottomMeme.style.zIndex = "1";
            bottomMeme.style.transform = "translate(-50%, -50%)";

            // Prevent refresh after function executes
            event.preventDefault();
        }    
        
        // Removes a meme when the meme is clicked
        console.log(meme.length);
        gallery.addEventListener("click", function(event){
            if(event.target.className === "newMeme"){
                event.target.remove();
            }
        })
    })
    // meme.addEventListener("click", function(event){
    //     event.target.style.background = "yellow";
    // })
    
    



}



