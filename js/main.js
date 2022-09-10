$(document).ready(function () {
    // remove loading
    if($(".loading").length){
        setTimeout(()=>{
            $(".loading").addClass("loading--remove");
            // scrool gsap
        $(".list-pro__heading").each(function (inx, cur) {
            gsap.from(cur, {
                scrollTrigger: cur, 
                y: 100,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out"
            });
        })
        $(".news__heading").each(function (inx, cur) {
            gsap.from(cur, {
                scrollTrigger: cur, 
                y: 100,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out"
            });
        })
        $(".list-pro__block").each(function (inx, cur) {
            gsap.from(cur, {
                scrollTrigger: cur, 
                y: 100,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out"
            });
        })
        $(".news__slider").each(function (inx, cur) {
            gsap.from(cur, {
                scrollTrigger: cur, 
                y: 100,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out"
            });
        })
        $(".reason-choose__image").each(function (inx, cur) {
            gsap.from(cur, {
                scrollTrigger: cur, 
                y: 100,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out"
            });
        })
        $(".reason-choose__body").each(function (inx, cur) {
            gsap.from(cur, {
                scrollTrigger: cur, 
                y: 100,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                delay: 0.5
            });
        })
        $(".category__top").each(function (inx, cur) {
            gsap.from(cur, {
                scrollTrigger: cur, 
                y: 100,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
            });
        })
        // $(".details__images").each(function (inx, cur) {
        //     gsap.from(cur, {
        //         scrollTrigger: cur, 
        //         y: 300,
        //         opacity: 0,
        //         duration: 0.7,
        //         ease: "power3.out",
        //     });
        // })
        $(".details__body").each(function (inx, cur) {
            gsap.from(cur, {
                scrollTrigger: cur, 
                y: 100,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                delay: 0.5
            });
        })
        $(".details__left").each(function (inx, cur) {
            gsap.from(cur, {
                scrollTrigger: cur, 
                y: 100,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                delay: 0.5
            });
        })
        $(".about-us").each(function (inx, cur) {
            gsap.from(cur, {
                scrollTrigger: cur, 
                y: 100,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                delay: 0.5
            });
        })
        
        }, 1000)
    }
    // slider at header menu dropdown
    if($(".header__dropdown__slider").length){
        $(".header__dropdown__slider").slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-caret-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-caret-right"></i></button>'
        })
    }
    // sticky menu
    $(window).scroll(function () { 
        // if($(window).scrollTop() > $(".header__head").height()+200){
        //     $(".header__body").addClass("header__body--sticky");
        // }else{
        //     $(".header__body").removeClass("header__body--sticky");
        // }
        
        // if($(window).scrollTop() > $(".header-mb__head").height()){
        //     $(".header-mb__body").addClass("header-mb__body--active");
        // }else{
        //     $(".header-mb__body").removeClass("header-mb__body--active");
        // }
    });
    // click popup search
    if($(".header__head__search").length){
        $(".header__head__search > i").click(function (e) { 
            e.preventDefault();
            $(".header__search__modal").addClass("header__search__modal--active");
            $(".header__search__input").addClass("header__search__input--active");
        });
        $(".header__search__modal").click(function (e) { 
            e.preventDefault();
            $(".header__search__modal").removeClass("header__search__modal--active");
            $(".header__search__input").removeClass("header__search__input--active");
        });
        // when user typing press into search
        var valueSearch = null
        $('#value__search').on('input', function (e) {
            if(e.target.value){
                if(valueSearch){
                    clearTimeout(valueSearch)
                }
                valueSearch = setTimeout(()=>{
                    $(".header__search__suggest").addClass('header__search__suggest--active');
                }, 300)
            }else{
                setTimeout(()=>{
                    $(".header__search__suggest").removeClass('header__search__suggest--active');
                }, 300)
            }
        });
    }
    // mobile header
    if(window.innerWidth < 1024){
        $(".header-mb__bars > i").click(function (e) { 
            e.preventDefault();
            $(".header-mb__list").addClass("header-mb__list--active");
        });
        $(".header-mb__list__close").click(function (e) { 
            e.preventDefault();
            $(".header-mb__list").removeClass("header-mb__list--active");
        });

        $(".header-mb__search").append($(".header__head__search"));


        if($(".header-mb__icon-drop").length){
            $(".header-mb__icon-drop").each(function(inx, cur){
                $(cur).click(function (e) { 
                    e.preventDefault();
                    $(cur).parent().find(".header-mb__dropdown").slideToggle();
                    $(this).toggleClass("header-mb__icon-drop--active");
                });
            })
            
         
        }
    }
    //   slider header
    if($(".slider").length){
        let heightHeader = $(".header").height();
        let heightSlider = ($(window).height() - heightHeader)/100*80;
        if(window.innerWidth < 1024){
            heightSlider = ($(window).height() - heightHeader)/100*50;
        }
        $(".slide").height(heightSlider);
        $(window).resize(function () { 
            let heightHeader = $(".header").height();
            let heightSlider = ($(window).height() - heightHeader)/100*80;
            if(window.innerWidth < 1024){
                heightSlider = ($(window).height() - heightHeader)/100*50;
            }
            $(".slide").height(heightSlider);
        });
        $(".slider").slick({
            dots: true,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-caret-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-caret-right"></i></button>'
        })

        if(window.innerWidth < 1024){
            // $(".slide").each(function(inx, cur){
            //     const data = $(cur).attr("data-slideMB");
            //     const styleSlide = $(cur).attr("style");
            //     if(data){
            //         const start = styleSlide.indexOf("(\"") + 2
            //         const end = styleSlide.indexOf("\")")
            //         const fileImg = styleSlide.substring(start, end)
            //         const newFile = styleSlide.replace(fileImg, data)
            //         $(cur).attr("style", newFile)
            //     }
            // })
        }
    }
    if(window.innerWidth < 1024){
        if($(".banner").length){
           const imageMb = $(".banner").attr("data-slideMB")
           if(imageMb){
            $(".banner").attr("style", `background-image: url(${imageMb});`)
           }
        }
    }
    // slider news
    if($(".news__slider").length){
        $(".news__slider").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            // prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-caret-left"></i></button>',
            // nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-caret-right"></i></button>',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                }
              ]
        })
    }
    // to-top
    if($(".to-top").length){
        $(window).scroll(function () { 
            console.log( )
            if($(window).scrollTop() > window.innerHeight*2){
                $(".to-top").addClass("to-top--active");
            }else{
                $(".to-top").removeClass("to-top--active");
            }
        });
    }
    // details slider
    if($(".details__images").length){
        $(".details__images__nav").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.details__images__slider, .details__images__popup__slider',
            dots: false,
            vertical: true,
            verticalSwiping:true,
            arrows: true,
            focusOnSelect: true,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-caret-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-caret-right"></i></button>',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    vertical: false,
                    verticalSwiping:false,
                    slidesToShow: 4,
                  }
                },
              ]
        })
        $(".details__images__slider").slick({
            arrows: false,
            vertical: true,
            verticalSwiping:true,
            draggable: false,
        })

        $(".details__images__popup__slider").slick({
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-caret-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-caret-right"></i></button>',
        })
    }

    // open popup image product
    if($(".details__images__popup__slider").length){
        $(".details__images__slider__expand").click(function (e) { 
            e.preventDefault();
            $(".details__images").css("transform", "none");
            $(".details__images__popup").addClass("details__images__popup__active");
        });
        $(".details__images__popup__close").click(function (e) { 
            e.preventDefault();
            $(".details__images__popup").removeClass("details__images__popup__active");
        });
    }
    // slider sp xem them
    if($(".list-pro__slider").length){
        $(".list-pro__slider").slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-caret-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-caret-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    }
                },
            ]
        })
    }
    if($(".home-pro__slider").length){
        $(".home-pro__slider").slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-caret-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-caret-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    }
                },
            ]
        })
    }
});




