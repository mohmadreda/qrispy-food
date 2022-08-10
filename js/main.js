let images = document.querySelectorAll(".item .image");
let popup = document.querySelector(".pop-up");
let img = document.querySelector(".pop-up img");
images.forEach(image => {
    image.onclick = (ev) => {
        let src = ev.target.getAttribute("src");
        document.querySelector(".pop-up").classList.add("d-block");
        document.querySelector(".pop-up").classList.remove("d-none");
        let myImage = document.querySelector(".pop-up img");
        myImage.setAttribute("src", src);
        let close = document.querySelector(".pop-up span");
        close.onclick = () => {

            document.querySelector(".pop-up").classList.add("d-none");
        }



    }
})