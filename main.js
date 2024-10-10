let link =''

document.querySelector("#enterHref").addEventListener("click", (e)=>{
   link = prompt("Enter a link to the home page");
})
document.querySelector("#goTo").addEventListener("click", (e)=>{
   location.href = link ;
})