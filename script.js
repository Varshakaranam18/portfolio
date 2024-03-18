const pageTurnBtn=document.querySelectorAll('.nextprev-btn');
pageTurnBtn.forEach((el,index)=>{
    el.onclick=()=>{
         const pageTurnId = el.getAttribute('data-page');
         const pageTurn=document.getElementById(pageTurnId);
         if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 - index;
            },500);
            }else{
                pageTurn.classList.add('turn');
                setTimeout(()=>{
                    pageTurn.style.zIndex=20 + index;
                },500)
                }

            }}
         
    

)
const pages=document.querySelectorAll('.book-page.page-right');
const contactMeBtn=document.querySelector('.btn.contact-me');
contactMeBtn.onclick=()=>{
    pages.forEach((page,index)=>{
        setTimeout(()=>{
            page.classList.add('turn');
            setTimeout(()=>{
                page.style.transition = 'z-index 0.5s ease';
                page.style.zIndex= 20+index;
            },500)
        },(index+1)*200+100)
    })
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        google.script.run.submitFormToGoogleSheet(fullName, email, message);

        // Optionally, you can add success or error messages here
        // Clear form fields or perform other actions after submission
        form.reset();
    });
});
