function checkCards(){
    $(document).ready(function(){
         $(".inactive").hide();
         $(".inactive.image_lock").show();
         $(".active.image_lock").hide();
    });    
}

checkCards();