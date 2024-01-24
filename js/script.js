let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () =>{
   navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
 };

window.onscroll = () =>{
   navbar.classList.remove('active');
};

function sendMail(){
   var params = {
       from_name : document.getElementById("fullName").value,
       email_id : document.getElementById('email_id').value,
       message : document.getElementById('message').value
   }
   emailjs.send('service_08mgrlc', 'template_ueohdcl', params).then(function (res){
       alert('Successfully sent email');
       
   })
}