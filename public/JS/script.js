// $(document).ready(function(){
//     $("#navbarSupportedContent a").on("click",function(){
//        this.css("color", "black")
//        console.log(this)
//     })
    var a = document.querySelectorAll("#navbarSupportedContent li")
    for(let i=0;i<a.length;i++){
        a[i].addEventListener("click",function(){
            a[i].classList.add("active")
        })
    }
