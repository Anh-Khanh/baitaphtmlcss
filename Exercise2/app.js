const item = document.querySelectorAll(" .item");
item.forEach(element=>{
    element.onclick = (e)=>{
        const itemchild = e.target.querySelector("ul")
        if ((itemchild.style.display === "none")){
          // itemchild.style.height = "100px";
          itemchild.style.display = "block";

        }
          else{
          itemchild.style.display = "none";
          }
}
})