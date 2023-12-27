
//Sticky header on scroll
window.addEventListener("scroll",function () {
    var header=this.document.querySelector("header");
    header.classList.toggle("sticky",this.window.scrollY>0);
})

var opener=document.getElementById("open");
opener.addEventListener("click",function () {
    document.querySelector(".center-menu").style.right=0;
    document.getElementById("close").style.setProperty('display', 'block', 'important');
    opener.style.setProperty('display','none','important');
});

var close=document.getElementById("close");
close.addEventListener("click",function () {
    document.querySelector(".center-menu").style.right="-100%";
    document.getElementById("close").style.setProperty('display', 'none', 'important');
    opener.style.setProperty('display','block','important');
});


//Social media icons animation

    var icons=document.querySelectorAll(".social-icon");
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.add("animate__fadeInLeft");
        icons[i].style.animationDelay=i/5+"s";
        function handleAnimationEnd(event) {
            icons[i].classList.remove('animate__fadeInLeft');
        }
        icons[i].addEventListener('animationend',handleAnimationEnd);
    }


//Link scrolling 
function scrollToSection(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default link behavior
            const targetId = link.getAttribute('href');
            scrollToSection(targetId);
        });
    });

//Open Cv on another page
function openPDF() {
    const pdfFilePath = 'E:/Personnal_Projects/Portfolio/files/CV_Rabeariveloarisoa_Yohan.pdf';
    window.open(pdfFilePath, '_blank');
}

document.getElementById("cv").onclick=function () {
    setTimeout(function () {
        openPDF();
    },1000);
}

//Observ current section
const navLinks = document.querySelectorAll('.head ul li a');

const observerOptions = {
  threshold: 0.5 // Adjust the threshold as needed to determine intersection
};

navLinks.forEach(navLink => {
  const targetId = navLink.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      });
    }, observerOptions);

    observer.observe(targetSection);
  }
});