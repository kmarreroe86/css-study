$(document).ready(function(){
    
    AOS.init({
        disable:'phone'
    });

    $('form').submit(function (evt) {
        evt.preventDefault(); //prevents the default action
        evt.stopPropagation();
        this.classList.add('was-validated');
        console.log("form submitted");
     });
});

