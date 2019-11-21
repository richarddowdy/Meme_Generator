window.onload = function() {
    let topText, bottomText, imgUrl, genMeme, gallery

    topText = document.querySelector(".top-text");
    bottomText = document.querySelector(".bottom-text");
    imgUrl = document.querySelector(".image-url");
    genMeme = document.querySelector(".gen-meme");
    gallery = document.querySelector(".gallery");

    genMeme.addEventListener("click", function(event){
        let newDiv = document.createElement("div");
        let memeImg = document.createElement("img");
        newDiv.innerHTML = topText.value;
        gallery.appendChild(newDiv);
        memeImg.src = imgUrl.value;
        newDiv.appendChild(memeImg);
        memeImg.style.width = "30%";
        memeImg.style.height = "auto";
        newDiv.style.display = "inling-block";

        Array.isArray(gallery) ? console.log("array") : console.log("not array");
        
        
        //console.log(imgUrl.value);
    })
}