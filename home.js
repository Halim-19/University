const body=document.querySelector(".body");
const menu=document.querySelector(".menu");
let open=false;
function myname() {
    if (!open) {
        menu.style.width="0%";
        body.style.overflow="";
        open=true;
        
    } else {
        menu.style.width="100%";
        body.style.overflow="hidden";
        open=false;
    }
};
/*show scrolling  */
const scrolllist=document.querySelector(".scrolling");
const scrollbtn=document.querySelector(".linescroll");

scrollbtn.addEventListener('click',function(){
    scrolllist.classList.toggle('scrollingShow')
})


/** scrolling */


const links=document.querySelectorAll('.scroll-link');

links.forEach(function(link){
    link.addEventListener('click',function(e){
        //prevent default
        e.preventDefault();
        //spesifice spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element=document.getElementById(id);
        let position=element.offsetTop ;
        window.scrollTo({
            left:0,
            top:position,
        });
    })
})
