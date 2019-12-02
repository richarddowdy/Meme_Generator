window.onload = function() {
    // Declaring variables
    let memeForm, topText, bottomText, imgUrl, gallery

    // Assigning variables to DOM elements
    topText = document.querySelector(".top-text");
    bottomText = document.querySelector(".bottom-text");
    imgUrl = document.querySelector(".image-url");
    gallery = document.querySelector(".gallery");
    memeForm = document.getElementById("form");

    // Creates a new meme when the form is submitted
    memeForm.addEventListener("submit", function(){
        // Creating all internal meme elements
        let newMeme = document.createElement("div");
        let topMeme = document.createElement("div");
        let bottomMeme = document.createElement("div");
        let memeImg = document.createElement("img");
        let deleteButton = document.createElement("button");
        let meme = document.getElementsByClassName("newMeme");

        //checking the length of the meme text top&bottom
        if(topText.value.length > 40 && bottomText.value.length > 40){
            // Alerts the user that the text is too long
            alert("Both text inputs are too long.\nPlease use less than 40 characters per line");
            event.preventDefault();
        } else if (topText.value.length > 40){
            alert("That's not clever enough.\nUse less than 40 characters on the top");
            event.preventDefault();
        } else if (bottomText.value.length > 40){
            alert("Use 40 characters or less on the bottom");
            event.preventDefault();
        } else if (meme.length > 14){
            // Alerts the user if they have made too many memes(15)
            alert("You've Made Enought\nRemove some memes to make more");
            event.preventDefault();       
        } else {
            // Setting the Meme text to the user's input
            topMeme.innerHTML = topText.value
            bottomMeme.innerHTML = bottomText.value
        
        
            // Adding a newMeme div to the dom with top&bottom text divs inside
            gallery.appendChild(newMeme);
            newMeme.className += "newMeme";
            memeImg.src = imgUrl.value;
            newMeme.appendChild(memeImg);
            newMeme.appendChild(topMeme);
            newMeme.appendChild(bottomMeme);
            newMeme.appendChild(deleteButton);

            // Gallery Styling
            gallery.style.display = "flex";
            gallery.style.flexWrap = "wrap";
            gallery.style.justifyContent = "space-evenly";
            gallery.style.alignItems = "center";

            // New Meme styling
            newMeme.style.width = "40%";
            newMeme.style.position = "relative";
            newMeme.style.marginBottom = "80px";
            
            // Image styling
            memeImg.style.width = "100%";
            memeImg.style.height = "auto";
            memeImg.style.borderRadius = "10px";
            memeImg.style.boxShadow = "8px 10px 5px grey";

            // Meme text styling
            //top
            topMeme.style.width = "90%"
            topMeme.style.position = "absolute";
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
            bottomMeme.style.color = "white";
            bottomMeme.style.fontSize = "40px";
            bottomMeme.style.fontFamily = "Impact";
            bottomMeme.style.letterSpacing = "3px";
            bottomMeme.style.webkitTextStroke = "2px black";
            bottomMeme.style.webkitTextFillColor = "white";
            bottomMeme.style.textAlign = "center";
            bottomMeme.style.fontWeight = "bold";


            // Positions the text of the meme 
            //top
            topMeme.style.top = "10%";
            topMeme.style.left = "50%";
            topMeme.style.zIndex = "1";
            topMeme.style.transform = "translate(-50%, -50%)";
            //bottom
            bottomMeme.style.bottom = "10%";
            bottomMeme.style.left = "50%";
            bottomMeme.style.zIndex = "1";
            bottomMeme.style.transform = "translate(-50%, -50%)";

            // Delete Button style and positioning
            deleteButton.className = "deleteButton";
            deleteButton.type = "button";
            deleteButton.innerText = "Delete Meme";
            deleteButton.style.position = "relative";
            deleteButton.style.bottom = "-15px"
            deleteButton.style.left = "50%";
            deleteButton.style.transform = "translate(-50%)";
            deleteButton.style.padding = "12px";
            deleteButton.style.width = "200px";
            deleteButton.style.backgroundColor = "rgb(230,38,0)";
            deleteButton.style.color = "white";
            //deleteButton.style.fontFamily = "";
            deleteButton.style.fontSize = "20px";
            deleteButton.style.borderRadius = "10px";
            deleteButton.style.fontWeight = "bold";

            // Prevent refresh after function executes
            event.preventDefault();
            memeForm.reset();
        }    
    })
    
    // Removes the above meme when the button is clicked
    gallery.addEventListener("click", function(event){
        if(event.target.className === "deleteButton"){
            event.target.parentNode.remove();
        }
    });
}



