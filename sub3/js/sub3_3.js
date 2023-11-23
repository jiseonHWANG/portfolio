
$(document).ready(function(){
    //객체배열(json)
    var memo = [
          {imgsrc:'big13.jpg' ,title:'이너프레쉬', field:'식품ㆍ음료', efficacy:'마늘, 양파 등 양념이 강한 음식을 먹은 후, 육류 섭취 후, 음주, 흡연 후 등 양치와 가글액 만으로도 해결이 안 되는 뱃 속 냄새를 파슬리 잎에서 추출한 오일로 중화시켜 상쾌함을 느낄 수 있습니다.',capacity:'물이나 음료와 함께 2캡슐을 드시길 권해드립니다.'},
        {imgsrc:'big14.jpg' ,title:'부채표 쌍화음료(약국용)', field:'식품ㆍ음료', efficacy:'허약체질, 피로회복, 과로, 자한(自汗, 정신이 멀쩡하고 움직이지도 않았는데 저절로 땀이 나는 증상), 병중병후', capacity:'성인 1회 1병(100mL)을 1일 3회 식전 또는 식간에(식사때와 식사때 사이에) 복용한다.'}, 
        {imgsrc:'big15.jpg' ,title:'비타천플러스', field:'식품ㆍ음료', efficacy:'비타천플러스는 비타민 C, 비타민 B군 등으로 이루어진 현대인을 위한 음료입니다.', capacity:'직접음용'}, 
        {imgsrc:'big16.jpg' ,title:'부채표 쌍화음료(유통용)', field:'식품ㆍ음료', efficacy:'허약체질, 피로회복, 과로, 자한(自汗, 정신이 멀쩡하고 움직이지도 않았는데 저절로 땀이 나는 증상), 병중병후', capacity:'성인 1회 1병(100mL)을 1일 3회 식전 또는 식간에(식사때와 식사때 사이에) 복용한다.'},
        {imgsrc:'big17.jpg' ,title:'황제골드', field:'식품ㆍ음료', efficacy:'황제골드는 상황버섯, 홍삼, 구기자, 대추, 가시오가피, 영지 등을 함유하고 있는 스트레스에 지친 현대인을 위한 음료입니다.', capacity:'성인 1회 1병(100ml)을 1일 3회 식전 또는 식간에(식사때와 식사때 사이에) 복용한다.'},
        {imgsrc:'big19.jpg' ,title:'동화 홍삼 골드', field:'식품ㆍ음료', efficacy:'우리 땅에서 나고 자란 "국내산 6년근 홍삼"으로 정성껏 만든 홍삼음료', capacity:'직접음용.'},
        {imgsrc:'big18.jpg' ,title:'덴티프로', field:'식품ㆍ음료', efficacy:'유산균 증식 및 유해균 억제· 배변활동 원활· 장건강에 도움을 줄 수 있음.', capacity:'1회 1정(1일 2회) 또는 1회 2정(1일 1회)을 천천히 씹어서 섭취하십시오.'},
        {imgsrc:'big20.jpg' ,title:'헬미나', field:'식품ㆍ음료', efficacy:'간 건강에 도움을 줄 수 있음, 정상적인 면역기능에 필요, 정상적인 세포분열에 필요, 뼈 형성에 필요, 에너지 이용에 필요, 유해산소로부터 세포를 보호하는데 필요', capacity:'1일 1회, 1회 1병을 섭취하십시오.'},
        {imgsrc:'big21.jpg' ,title:'생생포도당 MAX', field:'식품ㆍ음료', efficacy:'생생포도당 MAX는 뇌와 근육의 에너지원인 포도당을 제공하여, 빠른 피로회복/ 두뇌영양공급/ 입맛 없을 때 기력을 충전해 줍니다.', capacity:'성인 1회 1병(100ml)을 1일 3회 식전 또는 식간에(식사때와 식사때 사이에) 복용한다.'},
        {imgsrc:'big22.jpg' ,title:'생생톤UP', field:'식품ㆍ음료', efficacy:'생기넘치는 하루를 위한 활력드링크 "생생톤UP', capacity:'성인 1회 1병(100ml)을 1일 3회 식전 또는 식간에(식사때와 식사때 사이에) 복용한다.'},
        {imgsrc:'big23.jpg' ,title:'도구리 파워 비타민', field:'식품ㆍ음료', efficacy:'험난한 사회, 피곤한일상 속에서 살아남기 위해 오늘도 고군분투하는 "도구리"를 위한 활력 드링크', capacity:'성인 1회 1병(100ml)을 1일 3회 식전 또는 식간에(식사때와 식사때 사이에) 복용한다.'},
        {imgsrc:'big24.jpg' ,title:'슈퍼히어로드링크', field:'식품ㆍ음료', efficacy:'초인적인 힘을 가진 슈퍼히어로, 영웅의 상징 “슈퍼맨”위기에서 구해줄 “슈퍼맨”이 전하는 희망의 메시지를 담은 드링크', capacity:'성인 1회 1병(100ml)을 1일 3회 식전 또는 식간에(식사때와 식사때 사이에) 복용한다.'},
  
        ];
  
        //  memo[2].price => 25,000원
    $('.popup').css('opacity','1');  
    $('.popup').hide();
  
    $('.pop .pop_menu a').click(function(e){
        e.preventDefault();
        var txt ='';  //dl태그 생성
        var ind = $(this).index('.pop .pop_menu a');  // 0 1 2 3
      
        $('.pop .modal_box').fadeIn('fast');
        $('.pop .popup').fadeIn('slow');
  
        //$('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');//객체배열에 경로를 담지 않았을때
        $('.pop .popup img').attr('src','./images/content2/'+memo[ind].imgsrc);
  
       $('.pop .popup .txt p').text(memo[ind].title);
      //  $('.pop .popup .txt dt:eq(1)').text(memo[ind].title1);
      //  $('.pop .popup .txt dt:eq(2)').text(memo[ind].title2);
      //  $('.pop .popup .txt dt').text(memo[ind].title1);
      //  $('.pop .popup .txt dt').text(memo[ind].title2);
  
        $('.pop .popup .txt dd:eq(0)').text(memo[ind].field);
        $('.pop .popup .txt dd:eq(1)').text(memo[ind].efficacy);
        $('.pop .popup .txt dd:eq(2)').text(memo[ind].capacity);
      
        //console.log(ind)
    });
  
    $('.close_btn,.pop .modal_box').click(function(e){
        e.preventDefault();
        $('.pop .modal_box').hide();
        $('.pop .popup').hide();
    });
  });
  