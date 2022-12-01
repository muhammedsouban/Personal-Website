$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // Form 
    
    const form = document.getElementById("contactForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    //get the values from the user
    const namevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const subjectvalue = subject.value.trim();
    const messagevalue = message.value.trim();
var a=b=c=d=0;
    if(namevalue === ''){
        //show error 
        // add error class
        setErrorFor(username, 'Username cannot be null');

    }else{
        //add success class
        setSuccessFor(username);
        a=1;

    }

    if(emailvalue === ''){
        setErrorFor(email,'Email cannot be blank');
    }
    else if(!isEmail(emailvalue)){
        setErrorFor(email,'Email is not valid')
    }else{
        setSuccessFor(email);
        b=1;
    }

    if(subjectvalue === ''){
        //show error 
        // add error class
        setErrorFor(subject, 'Subject cannot be null');

    }else{
        //add success class
        setSuccessFor(subject);
        c=1;

    }
    if(messagevalue === ''){
        //show error 
        // add error class
        setErrorFor(message, 'message cannot be null');

    }
    else if(messagevalue.length <= 30){
        //show error 
        // add error class
        setErrorFor(message, 'atleast 30 Letters');
    }else if(messagevalue.length >= 150){
        //show error 
        // add error class
        setErrorFor(message, 'atmost 150 Letters');
    }
    else{
        //add success class
        setSuccessFor(message);
        d=1;
        if(a==b==c==d==1){
                var form = document.getElementById('contactForm');
                var xhr = new XMLHttpRequest();
                var data = new FormData(form);
                console.log(data);
                xhr.open('POST','https://script.google.com/macros/s/AKfycbyrblOTDToEPjYI6Pdk9gyyrYeEiTYuAikbeaCdeyS6IYGBPUFO8qf7jTo4xsipCVUH/exec')
          
                xhr.send(data);
                xhr.onreadystatechange = function() {
                  if (xhr.readyState == XMLHttpRequest.DONE) {
              alert("Submit successful");
                    form.reset();
                  }
                }
                //Dont submit the form.
                return false; 
              
            };
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message
    small.innerText = message;

    //add error class
    formControl.className = 'x err';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'x success';
}
function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/.test(email)
}


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});