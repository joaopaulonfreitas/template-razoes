$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        navigation : false, 
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        pagination: false,
        rewindSpeed: 500,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });

    // Código para clicar na categoria e: Abrir/Fechar
    /*$("html").on("click", ".j_category_toogle", function(e){
        const categoryButton = $(this)
        const container = categoryButton.closest(".main_content_vote_category")

        if(!container.find(".j_category_toogle_content").is(":visible")){
            categoryButton.find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up"); 
            container.find(".j_category_toogle_content").fadeIn(400);
            container.addClass("active");
        }else{
            categoryButton.find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down");                        
            container.find(".j_category_toogle_content").fadeOut(100);
            container.removeClass("active");
        }
    }) */

    // Código para clicar na categoria e: Abrir/Fechar ocultando os demais abertos
    $("html").on("click", ".j_category_toogle", function(e){
        const categoryButton = $(this)
        const container = categoryButton.closest(".main_content_vote_category")

        if($(".main_content_vote_category.active").length > 0)
        {
            $(".j_category_toogle").find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up")
            $(".main_content_vote_category.active").find(".j_category_toogle_content").slideUp();
        }

        if(!container.find(".j_category_toogle_content").is(":visible")){
            categoryButton.find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up"); 
            container.find(".j_category_toogle_content").slideDown();
            container.addClass("active bg-primary-h");
        }else{
            categoryButton.find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down"); 
            container.find(".j_category_toogle_content").slideUp();
            container.removeClass("active bg-primary-h");
        }
    })

    // Close modals
    $("html").on("click", ".j_close", function(){
        const close = $(this)
        $(".main_modals").fadeOut(400, function(){
            $(".main_modals_content_box").removeClass("flex").addClass("hidden")
        })
    })
    // Opem modals
    $("html").on("click", "[data-open]", function(e){
        e.preventDefault();
        const open = $(this).data("open")
        $(".main_modals_content_box[id!='"+open+"']").removeClass("flex").addClass("hidden")

        $("#"+open).addClass("flex").removeClass("hidden")
        $(".main_modals").fadeIn(400).css("display", "flex")
    })


});