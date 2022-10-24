console.clear();

var nav=document.getElementById("hello");

window.onscroll=()=>{

    var anim=window.scrollY;
    if(anim>=400){
        nav.classList.add("style");

    }

    else{
        nav.classList.remove("style");
    }
}