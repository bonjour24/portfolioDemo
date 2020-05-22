const navSlide=()=>{
    const mobile=document.querySelector('.mobile');
    const nav=document.querySelector('.nav-links');
    const links=document.querySelectorAll('.nav-links li');

    mobile.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        links.forEach((link,index)=>{
            if(link.style.animation)
            link.style.animation="";
            else 
            link.style.animation=`navLinkFade 0.8s ease forwards ${index/8+ 1.4 }s`;
        });
        mobile.classList.toggle('toggle');
    });

};

navSlide();