function swap(){
    var box1 = document.getElementById("bigbox1");
    var box2 = document.getElementById("bigbox2");
    var button = document.getElementById("button");
    if(button.value == "Swap to CSS"){
        box1.style.display = "none";
        box2.style.display = "flex";
        button.value = "Swap to HTML";
        button.innerHTML = "Swap to HTML";
    }else if(button.value == "Swap to HTML"){
        box1.style.display = "flex";
        box2.style.display = "none";
        button.value = "Swap to CSS";
        button.innerHTML = "Swap to CSS";
    }
}
function navswaphtml(){
    var box1 = document.getElementById("bigbox1");
    var box2 = document.getElementById("bigbox2");
    box1.style.display = "flex";
    box2.style.display = "none";
    button.value = "Swap to CSS";
    button.innerHTML = "Swap to CSS";
}
function navswapcss(){
    var box1 = document.getElementById("bigbox1");
    var box2 = document.getElementById("bigbox2");
    box1.style.display = "none";
    box2.style.display = "flex";
    button.value = "Swap to HTML";
    button.innerHTML = "Swap to HTML";
}