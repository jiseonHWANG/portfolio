$(document).ready(function () {
   $('.historyNav li:eq(0)').find('a').addClass('spy');

//  var he1= $('.majorHistory h3:eq(0)').offset().top-500;
//  var he2= $('.majorHistory h3:eq(1)').offset().top-500;
//  var he3= $('.majorHistory h3:eq(2)').offset().top-500;
//  var he4= $('.majorHistory h3:eq(3)').offset().top-500;
//  var he5= $('.majorHistory h3:eq(4)').offset().top-500;


    //sticky
 var smh= $('.historyNav').offset().top;
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
   
        $('.text').text(scroll);
        
        //sticky menu 처리
        if(scroll>smh){ 
            $('.historyNav').addClass('navOn'); //아까의 가상클래스를 달아주기
            $('header').hide(); //헤더가 사라져라~
        }else{//다시 올라가면 
            $('.historyNav').removeClass('navOn');
            $('header').show();//헤더를 다시 보여주고
        }
        //여기까지가 스티키 
        
    
    //spy
    $('.historyNav li').find('a').removeClass('spy');
    //모든 서브메뉴 비활성화
    
         //스크롤의 거리의 범위를 처리
         if(scroll>=1000 && scroll<4920){ //첫번째 섭메뉴 어디서부터 활성화 시킬지 숫자를 적어줌
            $('.historyNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=4920 && scroll<6200){
            $('.historyNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
        }else if(scroll>=6200 && scroll<7830){
            $('.historyNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
          }else if(scroll>=7830 && scroll<8770){
             $('.historyNav li:eq(3)').find('a').addClass('spy');
             //네번째 서브메뉴 활성화
          }else if(scroll>=8770 && scroll<9333){
             $('.historyNav li:eq(4)').find('a').addClass('spy');
             //다섯번째 서브메뉴 활성화
            
        }else if(scroll>=9333){ //이상이면 spy를 이제 지워라~
            $('.historyNav li:eq(5)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
        }
   //   //스크롤의 거리의 범위를 처리
   //  if(scroll>=0 && scroll<he1){ //첫번째 섭메뉴 어디서부터 활성화 시킬지 숫자를 적어줌
   //      $('.historyNav li:eq(0)').find('a').addClass('spy');
   //      //첫번째 서브메뉴 활성화
        
   //      //첫번째 내용 콘텐츠 애니메이
   //  }else if(scroll>=he1 && scroll<he2){
   //      $('.historyNav li:eq(1)').find('a').addClass('spy');
   //      //두번째 서브메뉴 활성화
   //  }else if(scroll>=he2 && scroll<he3){
   //      $('.historyNav li:eq(2)').find('a').addClass('spy');
   //      //세번째 서브메뉴 활성화
   //    }else if(scroll>=he3 && scroll<he4){
   //       $('.historyNav li:eq(3)').find('a').addClass('spy');
   //       //네번째 서브메뉴 활성화
   //    }else if(scroll>=he4 && scroll<he5){
   //       $('.historyNav li:eq(4)').find('a').addClass('spy');
   //       //다섯번째 서브메뉴 활성화
        
   //  }else if(scroll>=he5){ //이상이면 spy를 이제 지워라~
   //      $('.historyNav li:eq(5)').find('a').addClass('spy');
   //      //네번째 서브메뉴 활성화
        
   //  }
    
    
});

   //-------------------------------------------
    $('.historyNav a').click(function(e){ //슬라이드메뉴에 있는 a를 클릭하면 
       e.preventDefault(); //href="#" 속성을 막아주는 메소드
  
        var value=0; //이동할 스크롤의 거리

        if($(this).hasClass('year1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
           value= $('.content_area3 #y_2008').offset().top;  // 해당 콘테츠의 상단의 거리~~ //off변경 set 이 컨텐츠 위에 거리를 알아서 계산해주는게 .offset().top을 기억해두렴!
         }else if($(this).hasClass('year2')){
           value= $('.content_area3 #y_2007').offset().top;
        }else if($(this).hasClass('year3')){
           value= $('.content_area3 #y_1996').offset().top; 
        }else if($(this).hasClass('year4')){
           value= $('.content_area3 #y_1976').offset().top; 
        }else if($(this).hasClass('year5')){
           value= $('.content_area3 #y_1957').offset().top; 
         }
         value-=170      
        
   
       // value-=100 바로 위 말고 조금 위로 보이게 하고 싶으면 value-=100 이렇게 앞에 -붙이면 됨

      $("html,body").stop().animate({"scrollTop":value},100,'linear'); //스크롤의 거리를 계산해서 알아서 움직여라잇 스크롤 탑에value넣어주면 이동한다~
    });

   });