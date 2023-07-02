function uploadFile() {

    var uploadedFile = document.getElementById("upload_img").files[0];

    if (uploadedFile) {
        up_image.src = URL.createObjectURL(uploadedFile);
    }

    const viewFileDiv = document.getElementById("view-uploaded-files");

    var div;
    var para;
    var btn;

    div = document.createElement("DIV");
    div.setAttribute("class", "d-flex");
    btn = document.createElement("BUTTON");
    btn.setAttribute("class", "btn-close ps-3");
    para = document.createElement("SPAN");
    para.innerHTML = uploadedFile.name + "  &emsp; " + (uploadedFile.size / 1000) + "kB";

    viewFileDiv.appendChild(div);
    div.appendChild(para);
    div.appendChild(btn);

    btn.addEventListener("click", () => {
        div.remove();
    })
}
