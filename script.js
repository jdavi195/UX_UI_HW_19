$("p").hover(function(){
    $(this).hide();
})

$(".menu").click(function(){
    $(this).find(".menu").toggleClass("active");
    $(this).siblings(".toggle").find(".menu").removeClass("active");
  });

const modal = document.querySelector("modal");
const previews = document.querySelectorALL(".img");
const original  = document.querySelector(".full-img");

previews.forEach(preview => {
    preview.addEventListener("mouseover", () => {
        modal.classList.add("open");
    })

})

modal.addEventListener("click", (e) => {
    console.log(e);
});

function setNewImage()
{
    document.getElementById("images/budgetcover.png").src ="images/budgetcover.png";
}
function setOldImage()
{
        document.getElementById("images/budgetcover.png").src
        ="images/budgetcover.png";
        //alert();
}

<images id="" onmouseover="setNewImage()"
onmouseout="setOldImage()" src="images/budgetcover.png"
width="300"/>
