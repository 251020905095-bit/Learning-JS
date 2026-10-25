function upDate(previewPic) {

    console.log("Sự kiện upDate đã được kích hoạt!");
    console.log("Alt của ảnh:", previewPic.alt);
    console.log("Nguồn (src) của ảnh:", previewPic.src);

    var imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Sự kiện unDo đã được kích hoạt!");

    var imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Hover over an image below to display here.";
}
