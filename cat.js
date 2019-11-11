let catElement1 = document.querySelector("#cat1");
let catElement2 = document.querySelector("#cat2");
let counterElement1 = document.querySelector("#counter1");
let counterElement2 = document.querySelector("#counter2");
let counter1 =0;
let counter2 =0;
let h = document.createElement("div");



catElement1.addEventListener("click", 
function (){
counter1++;    
counterElement1.innerHTML = counter1 ;
if(updateName1){updateName1();}
}                            
);

catElement2.addEventListener("click", 
function (){
counter2++;
 counterElement2.innerHTML = counter2 ;
 if(updateName2){updateName2();}
});

function updateName1(){
    h.innerHTML = "<h2>First Cat</h2>";
    document.body.appendChild(h);
}

function updateName2(){
    h.innerHTML = "<h2>Second Cat</h2>";
     document.body.appendChild(h);
}