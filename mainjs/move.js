// JavaScript Document

//메인 겔러리
    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#f23f42'); //첫번째 불켜
    $('.btn1').css('width','60px'); // 버튼의 너비 증가
    
    $('.gallery .link1').fadeIn('fast'); //첫번째 이미지 보인다..
    $('.gallery .link1 p').delay(1500).animate({top:105, opacity:1},'slow');
 
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
     $('.gallery .link'+cnt).fadeIn('fast'); //자신만 이미지가 보인다..
	 		                    
    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
      
      $('.mbutton').css('background','#fff'); //버튼불다꺼!!
      $('.mbutton').css('width','16px'); // 버튼 원래의 너비
      $('.btn'+cnt).css('background','#f23f42');//자신만 불켜
      $('.btn'+cnt).css('width','60px');    

      $('.gallery li p').css('top', 200).css('opacity', 0); //텍스트의 초기화(원위치)
      $('.gallery .link' + cnt).find('p').delay(500).animate({top:105, opacity:1},'slow');

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.

		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }
      
      //한줄도 고칠게 없지만 여기서 하나 고치라면 if문 갯수를 수정하십쇼, 그리고 글씨 원래 위치도

		  $('.gallery .link'+cnt).fadeIn('fast');  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // } 여기 밑에 색이나 css설정 건들면 된다 
      $('.mbutton').css('background','#fff'); //버튼 모두불꺼
      $('.mbutton').css('width','16px');
      $('.btn'+cnt).css('background','#f23f42');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','60px');
      
      $('.gallery li p').css('top', 200).css('opacity',0);
      $('.gallery .link'+cnt).find('p').delay(1000).animate({top:105, opacity:1},'slow');

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
      }
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
		   onoff=true; 
	   }
  });	
  // 여기랑 건들고

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('fast'); //자신만 이미지가 보인다..
                        
    $('.mbutton').css('background','#fff'); //버튼 모두불꺼
    $('.mbutton').css('width','16');
    $('.btn'+cnt).css('background','#f23f42');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','30px');

    $('.gallery li p').css('top', 200).css('opacity',0);
    $('.gallery .link'+cnt).find('p').delay(1000).animate({top:105, opacity:1},'slow');

    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 4000); //부활

    if(onoff==false){
      onoff=true;
      $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    }
  });


   // product 
   var product = [
    {
        name:'후시딘', 
        information:'농피증(고름피부증)(농가진(고름딱지증), 감염성습진양피부염, 심상성여드름(보통여드름), 모낭염, 종기 및 종기증, 화농(곪음),외상(상처),봉합(꿰맴)창 등에 효과가 있습니다. 식피창(피부이식 후 생긴 상처)에 의한 2차 감염을 방지합니다.',
        imgsrc: '../images/hu.png'
    },
    {
        name:'활명수', 
        information:'까스활명수에 들어있는 창출은 위를 보호하고 배에 가스를 제거합니다. 진피는 위액을 촉진하여, 위장운동을 도와 소화를 원할하게 하는데 효과가 있습니다. 육계, 장향과 같은 한약제 성분은 혈액순환을 개선시켜 위를 따듯하게 하는 작용을 가집니다.', 
        imgsrc: '../images/product.png'
    },
    {
        name:'판콜', 
        information:'감기의 제증상(여러증상)(콧물, 코막힘, 재채기, 기침, 인후(목구멍)통, 가래, 오한(춥고 떨리는 증상), 발열, 두통, 관절통, 근육통)의 통증들이 완화되는 효과가 있습니다.', 
        imgsrc: '../images/a.png'
    },
  ];

  $('.product .productList li:eq(0) a').css('filter','grayscale(0)');
  
  $('.product .productList li a').click(function(e){
    e.preventDefault();
  
    //인덱스 빼내기~ 0~5까지~
    var ind = $(this).index('.product .productList a');

    // 확대 이미지 교체
   $('.product .img_box img').attr('src',product[ind].imgsrc).hide().fadeIn('normal');
   //$('.product .img_box img').attr('src','../images/'+product[ind].imgsrc).hide().fadeIn('slow'); // 없앴다가 다시 나오는 효과이기 때문에 .hide 써줌

    $('.textBack .title').html(product[ind].name); //dt 타이틀 교체
    $('.textBack .main_t').html(product[ind].information); //dd 설명 교체

    $('.product .productList li a').removeClass('current');
    $('.product .productList li:eq('+ind+') a').addClass('current');// eq 0번째부터 시작~ ind로 해당 버튼 활성화 시키기
  });



  // news
  var position=0;  //최초위치
  //var movesize=150; //이미지 하나의 너비
  var movesize=$('.slide_gallery ul li').outerWidth(true); // 360
  var timeonoff2;
 
  $('.slide_gallery ul').after($('.slide_gallery ul').clone());

  function moveG() {
    position-=movesize;  // 150씩 감소
    $('.slide_gallery').animate({left:position}, 'fast',function(){
       if(position<=-2160){
           position=-360;
           $('.slide_gallery').css('left',-360);
        }
      }).clearQueue();
  }

 timeonoff2= setInterval(moveG, 3000);

$('.button').click(function(e){
   e.preventDefault();

  clearInterval(timeonoff2);
   
   if($(this).is('.m1')){  //이전버튼 클릭
       
        position-=movesize;  // 150씩 감소
       $('.slide_gallery').animate({left:position}, 'fast',function(){
          if(position<=-2160){
              position=-360;
              $('.slide_gallery').css('left',-360);
           }
       }).clearQueue();  

   }else if($(this).is('.m2')){  //다음버튼 클릭
        if(position>=0){
          $('.slide_gallery').css('left',-1800);
          position=-1800;
      }

          position+=movesize; // 150씩 증가
          $('.slide_gallery').animate({left:position}, 'fast',
              function(){							
                  if(position>=0){
                      $('.slide_gallery').css('left',-1800);
                      position=-1800;
                  }
              }).clearQueue();

    }
 });







