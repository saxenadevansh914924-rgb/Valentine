let btn1=document.querySelector(".btn .no");
let h1=document.querySelector(".caption h1");
let p=document.querySelector(".caption p");
let img=document.querySelector("img");
let btn2=document.querySelector("#click");
let main=document.querySelector(".main");
let hidden=document.querySelector(".hidden");
let btn3=document.querySelector(".hidden .okay");
let last=document.querySelector("#last");
function handleClick(str1,str2,url){
    return new Promise((resolve)=>{
        btn1.addEventListener("click",()=>{
        h1.innerText=str1;
        p.innerText=str2;
        img.setAttribute("src",url);
        resolve();
        });
    });
}
function changePosition(num){
    return new Promise((resolve)=>{
        btn1.addEventListener("click",()=>{
        btn1.setAttribute("class",`location${num}`);
        resolve();
        });
    });
}
handleClick("Please Think again!😞","itni jaldi mat bolo ,please 🥲 ","./assets/logo2.gif")
 .then(()=>{
    return handleClick("Ek aur baar soch lo!😖","kyu aisa kr rhi ho😖","./assets/logo3.gif");
 })
 .then(()=>{
    return handleClick("baby maan jao naa kitna bhaav khaogi😭","bahut galat baat hai yaar 😭","./assets/logo4.gif")
 })
 .then(()=>{
   btn2.setAttribute("id","display");
    return changePosition(1);
    
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 }).then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
   return changePosition(6);
 })
 .then(()=>{
    return changePosition(1);
 })
 .then(()=>{
    return changePosition(2);
 })
 .then(()=>{
    return changePosition(3);
 })
 .then(()=>{
    return changePosition(4);
 })
 .then(()=>{
   return changePosition(5);
 })
 .then(()=>{
   return changePosition(6);
 })
 .catch(()=>{
    console.log("error");
 });

 btn2.addEventListener("click",()=>{
   main.setAttribute("id","hidden");
   hidden.setAttribute("id","disk");
 });
  btn3.addEventListener("click",()=>{
   main.setAttribute("id","hidden");
   hidden.setAttribute("id","hide");
   last.setAttribute("class","lastdis");
 });
 let yes=document.querySelector("#last2");
 let btn4=document.querySelector(".ohgirl");
   btn4.addEventListener("click",()=>{
   main.setAttribute("id","hidden");
   hidden.setAttribute("id","hide");
   last.setAttribute("class","last");
   yes.setAttribute("class","lastdis");
 });