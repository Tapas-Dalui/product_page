var MainImg = document.getElementById("MainImg");
var samllImg = document.getElementsByClassName("small-img");
var fimg = document.getElementsByClassName("f-img");
var price = document.getElementById("price");
var f_price = document.getElementsByClassName("f-price");
var s_name = document.getElementById("s_name");
var sh_name = document.getElementsByClassName("sh_name");

samllImg[0].addEventListener('mouseover',()=>{
    MainImg.src = samllImg[0].src;
})
samllImg[1].addEventListener('mouseover',()=>{
    MainImg.src = samllImg[1].src;
})
samllImg[2].addEventListener('mouseover',()=>{
    MainImg.src = samllImg[2].src;
})
samllImg[3].addEventListener('mouseover',()=>{
    MainImg.src = samllImg[3].src;
})
samllImg[4].addEventListener('mouseover',()=>{
    MainImg.src = samllImg[4].src;
})


/** Update Main Price */
function updatePrice(f_price){
    price.innerHTML=f_price;
}

/** Update Main Bannar */
function updateBanner(imageSrc){
    MainImg.src = imageSrc;
}

/** Update Small Image */
function updateSmlImg(L){
    for(i=1;i<5;i++){
        samllImg[i].src='img/products/'+L+i+'.jpg';
    }
}
function updateName(p_name){
    s_name.innerHTML= p_name;
}

fimg[0].onclick = function(){ 
    updateSmlImg('a');
    updateBanner(fimg[0].src);
    updatePrice(f_price[0].textContent);
    updateName(sh_name[0].textContent);
}
fimg[1].onclick = function(){ 
    updateSmlImg('b');
    updateBanner(fimg[1].src);
    updatePrice(f_price[1].textContent);
    updateName(sh_name[1].textContent); 
}
fimg[2].onclick = function(){ 
    updateSmlImg('c');
    updateBanner(fimg[2].src);
    updatePrice(f_price[2].textContent); 
    updateName(sh_name[2].textContent);
}
fimg[3].onclick = function(){ 
    updateSmlImg('d');
    updateBanner(fimg[3].src);
    updatePrice(f_price[3].textContent); 
    updateName(sh_name[3].textContent);
}


/*Change Cpoyright Year*/
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;