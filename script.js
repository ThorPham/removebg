document.addEventListener("DOMContentLoaded", function(event) 
{
    let imgBox = document.querySelector(".img-box")
    let imgWarp = document.querySelector(".img-wrap")
    let originImg = document.getElementById("originImg")
    let line = document.getElementById("line")
    let leftSpace = imgBox.offsetLeft
    originImg.style.width = imgBox.offsetWidth + "px"
    imgBox.onmousemove= function(e){
       let boxWidth = (e.pageX - leftSpace) + "px"
      //  console.log(boxWidth)
       imgWarp.style.width = boxWidth
       line.style.left = boxWidth
    }
})