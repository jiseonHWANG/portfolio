
$(document).ready(function() {

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
           $('.dropdownmenu li a.depth1').css('color','#333'); 
           $('#headerArea .top_menu a').css('color','#666'); 
           $('.logo a').css('background','url(http://hery313.cafe24.com/common/images/logo_black.png)');

            //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-150 ){
               $(this).css('background','rgba(0,0,0,.5)').css('border-bottom','none'); 
               $('.dropdownmenu li a.depth1').css('color','#fff');
               $('#headerArea .top_menu a').css('color','#fff');
               $('.logo a').css('background','url(http://hery313.cafe24.com/common/images/logo_03.png)');
           }else{
               $(this).css('background','#fff'); 
               $('.dropdownmenu li a.depth1').css('color','#333');
               $('#headerArea .top_menu a').css('color','#666');
               $('.logo a').css('background','url(http://hery313.cafe24.com/common/images/logo_black.png)');
           }
          on_off=false;    
      });
   

      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  
           //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh-150){//console.log('스크롤 거리만큼 내리면')//스크롤이 비주얼의 높이-header높이 까지 내리면
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
               $('.dropdownmenu li a.depth1').css('color','#333');
               $('#headerArea .top_menu a').css('color','#666'); 
               $('.logo a').css('background','url(http://hery313.cafe24.com/common/images/logo_black.png)');
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').css('background','rgba(0,0,0,.5)').css('border-bottom','none');
                   $('.dropdownmenu li a.depth1').css('color','#fff');
                   $('#headerArea .top_menu a').css('color','#fff');
                   $('.logo a').css('background','url(http://hery313.cafe24.com/common/images/logo_03.png)');

              }
           }; 

           
           if(scroll>=1200){ 
                $('.top_move').fadeIn('slow'); 
            }else{
                $('.top_move').fadeOut('fast');
            }
        });


    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:330},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:150},'fast').clearQueue();
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','red');
       },function() {
          $('.depth1',this).css('color','#333');
     });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:330},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:150},'normal').clearQueue();
    });


    // // 상단 이동 메뉴 스크롤 처리
    // $(window).on('scroll',function(){ 

    //     var scroll = $(window).scrollTop(); 

    //     if(scroll>1200){ 
    //         $('.top_move').fadeIn('slow'); 
    //     }else{
    //         $('.top_move').fadeOut('slow');

    //     }

    // });
    $(document).ready(function() {
   	
        // $('.select .arrow1').click(function(){
        //     $('.select .aList').fadeIn('slow');			  
        // });
    //요거는 클릭해서 열고 마우스가 영역을 벗어나면 닫히는 거임 
        // $('.family .aList').mouseleave(function(){
        //     $(this).fadeOut('fast');			  
        // });
      //토글로 짜며 ㄴ댑니다 
        $('.family .arrow1').toggle(function(){
        	$('.family .aList').fadeIn('slow');	
        	$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
        },function(){
            $('.family .aList').fadeOut('fast');	
        	$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
        });
    
        //tab키 처리
          $('.family .arrow1').on('focus', function () {        
                  $('.select .aList').fadeIn('slow');	
           });
           $('.family .aList li:last a').on('blur', function () {        
                  $('.family .aList').fadeOut('fast');
           });
     
    });
    $('.top_move').click(function(e){

        e.preventDefault();
     
        $("html,body").stop().animate({"scrollTop":0},500);
     
     });

     //검색창 
     $('#btn1').click(function(){
        var pname = $('#title1').val();  //베이스
        if(pname){  //검색어를 입력했으면...
          location.href = 'http://hery313.cafe24.com/sub3/sub3_2.html?pname='+  pname;
        }else{   //검색어를 입력하지 않았다면...
          alert('검색어를 입력하세요');
        }
     });
     //검색창 여닫기
     $('.search').toggle(function(e){
        e.preventDefault();
        $('.product_box').slideDown('slow');
     },function(e){
        e.preventDefault();
        $('.product_box').slideUp('fast');
     });
});

