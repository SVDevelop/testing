$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true, 
    margin:10,
    nav:true,
    dots: false,
    stafePadding: 20,
    autoWidth:true, 
    autoplay:false,
    smartSpeed:1000,
    autoplayTimeout:2000,
    navText : ["",""],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true
        }
    }
   });
});

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [53.241556777181465,34.35385952329106],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #55FFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon.png',
                iconImageSize: [26, 26],
                iconImageOffset: [-15, -25]
            }

           );

        myMap.geoObjects
            .add(myPlacemark);
    });

// drop menu
  // let el = document.getElementsByClassName('menu-item');
  // // console.log(el[0]);
  // for(let i = 0; i < el.length; i++) {
  //     el[i].addEventListener('mouseenter', showSub, false);
  //     el[i].addEventListener('mouseleave', hideSub, false);
  // }
  // function showSub() {
  //     if(this.children.length > 1) {
  //       this.children[1].style.height = "auto";
  //       this.children[1].style.opacity = "1";
  //       this.children[1].style.overflow = "visible";
  //     }
  //     else {
  //         return false;
  //     }
  // }
  // function hideSub() {
  //     if(this.children.length > 1) {
  //         this.children[1].style.height = "0";
  //         this.children[1].style.opacity = "0";
  //         this.children[1].style.overflow = "hidden";
  //     }
  //     else {
  //         return false;
  //     }
  // }