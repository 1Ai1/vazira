// const open = document.querySelector(".mob-open");
// const close = document.querySelector(".mob-close");

// const wrapper = document.querySelector(".mob-wrapper").classList;

// open.addEventListener("click", () => {
//   wrapper.toggle("opened");
//   wrapper.toggle("close");
// });

// close.addEventListener("click", () => {
//   wrapper.toggle("opened");
//   wrapper.toggle("close");
// });



function openNav(){
  document.getElementById("side-menu").style.width = "400px";
  document.getElementById("content-area").style.marginLeft = "400px";
}

function closeNav(){
  document.getElementById("side-menu").style .width = "0";
  document.getElementById("content-area").style.marginLeft = "0";
}



const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


