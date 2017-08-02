/*global $*/
$(function () {
    "use strict";
    
   //    Srart Navbar
    
    
    //    triger sidenav
    
    
    $(".button-collapse").sideNav();
    
       
//    end triger
    
    
    
//  Start Scrolling
    
    
    $(".nav1 ul li a, .nav2 ul li a ").click(function () {
        
        $("html, body").animate({
            
            scrollTop : $("#" + $(this).data("value")).offset().top
            
        }, 1000);
    });
    

    
//    End scroling
    
//   Start change navigation active class on page scroll

    
    function mitscroll() {
          
        var docPos = $(document).scrollTop();
                
                
        $('.nav1 ul li a').each(function () {
                    
            var ancher = $(this),
                    
                target = $("#" + ancher.data("value"));
                    
                    
            if (target.position().top <= docPos + 100  && target.position().top + target.height()  > docPos) {
                        
    
                $('.nav1 ul li a').removeClass("Active");
                        
                        
                ancher.addClass("Active");
                
            } else {
                ancher.removeClass("Active");
            }
        });
    }
    
    
    
    $(window).scroll(function () {
        
        mitscroll();
        
    });
    
//   end change navigation active class on page scroll

            
                
                
                
                
              
    
//   start navbar Opacity
    
 
    var navbar = $('.nav2');
    
   
    $(window).scroll(function () {
        if ($(window).scrollTop() >= navbar.height()) {
            
            if (!navbar.addClass('scrolled')) {
                navbar.addClass('scrolled');
            }
        } else {
            navbar.removeClass('scrolled');
        }
        
    });
    
   
    //   end navbar Opacity
  
    
    
//start skills
    
       
    function SkillProg(elm) {
         
        var width = parseInt(elm.attr("power"), 10) + "%",
            
            val = elm.data("value"),
              
            elmo = $("#p" + parseInt(val, 10));
         
        $(elmo).animate({
                    
            width : width
                  
        }, 1600);
        
    }
    

    
    $(window).on('scroll', function () {
        
        
        if ($(window).scrollTop() >= $(".skills").offset().top - 250) {
            
            $(".skills .skill .prog").each(function () {
                
                SkillProg($(this));
                
            });
        }
    });
    
    
    
    
    
//    end Skills
    
    
 
    
    
});