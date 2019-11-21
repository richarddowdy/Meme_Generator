window.onload = function() {
    let topText, bottomText, imgUrl, genMeme, gallery

    topText = document.querySelector(".top-text");
    bottomText = document.querySelector(".bottom-text");
    imgUrl = document.querySelector(".image-url");
    genMeme = document.querySelector(".gen-meme");
    gallery = document.querySelector(".gallery");


    // Generates the meme and adds it to the gallery
    genMeme.addEventListener("click", function(event){
        let newDiv = document.createElement("div");
        let memeImg = document.createElement("img");

        if(topText.value.length > 20){
            alert("top too long, please use less than 20 characters for the top text")
        } else {
            console.log(topText.value.length);
            newDiv.innerHTML = topText.value;
        }
        if(bottomText.value.length > 20){
            alert("bottom too long, Please use less than 20 characters for the bottom text")
        } else {
            newDiv.innerHTML += bottomText.value;
        }


        gallery.appendChild(newDiv);
        memeImg.src = imgUrl.value;
        newDiv.appendChild(memeImg);
        memeImg.style.width = "30%";
        memeImg.style.height = "auto";
        newDiv.style.display = "inline";
    })

    
    
}