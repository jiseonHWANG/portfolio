

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {imgsrc:'big1.jpg' ,title:'제품명1', price:'10,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big2.jpg' ,title:'제품명2', price:'20,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big3.jpg' ,title:'제품명3', price:'25,000원', sub1:'제품설명1', sub2:'제품설명2'},
        {imgsrc:'big4.jpg' ,title:'제품명4', price:'30,000원', sub1:'제품설명1', sub2:'제품설명2'},

      ];

      //  memo[2].price => 25,000원
    
 
  $('.pop .pop_menu a').click(function(e){
      e.preventDefault();
      var txt ='';  //dl태그 생성
      var ind = $(this).index('.pop .pop_menu a');  // 0 1 2 3

      $('.pop .modal_box').fadeIn('fast');
      $('.pop .popup').fadeIn('slow');

      //$('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');//객체배열에 경로를 담지 않았을때
      $('.pop .popup img').attr('src','./images/'+memo[ind].imgsrc);
      
      $('.pop .popup .txt dt').text('제품명 : '+memo[ind].title);
      $('.pop .popup .txt dd:eq(0)').text('제품가격 : '+memo[ind].price);
      $('.pop .popup .txt dd:eq(1)').text('제품설명1 : '+memo[ind].sub1);
      $('.pop .popup .txt dd:eq(2)').text('제품설명2 : '+memo[ind].sub2);
    

  });

  $('.close_btn,.pop .modal_box').click(function(e){
      e.preventDefault();
      $('.pop .modal_box').hide();
      $('.pop .popup').hide();
  });
});
