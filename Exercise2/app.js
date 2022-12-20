const item = document.querySelectorAll(".item");
[...item].forEach(element=>{
    element.onclick = (e)=>{
        e.preventDefault()
        const itemchild = element.querySelector("ul");
        if (itemchild && itemchild.style.display === "none") {
          itemchild.style.display = "block";
        } else {
          itemchild.style.display = "none";
        }
}
})