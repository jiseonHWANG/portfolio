

    
    

  $('.maps').css({
    "background" : "url(./images/apexmaps_1.jpg) center bottom no-repeat",
    "background-size" : "cover",
    "background-attachment": "fixed"
});


$('.maps_p li a').click(function(e){
    e.preventDefault();

    var ind = $(this).index('.maps_p li a')+1;
    //console.log(ind);

    $('.maps').css({
        "background" : "url(./images/apexmaps_" + ind + ".jpg) center bottom no-repeat",
        "background-size" : "cover",
        "background-attachment": "fixed"
    });
});

  
// 캐릭터 박스 이름 바꾸고 경로에 이름만 바꾸고 사진을 뒤에 1.png 2.png로 저장하면 된다 

// footer 
(d => {
    const word = d.querySelector(".word");
  
    const shadow = e => {
      const { x, y } = e;
      const gBCR = word.getBoundingClientRect();
      const w = this;
      const xM = (x - gBCR.left - gBCR.width / 2) / gBCR.width * 5;
      const yM = (y - gBCR.top - gBCR.height / 2) / gBCR.height * 5;
      
      transform(xM, yM);
    };
  
    const transform = (x, y) => {
      word.style.textShadow = `${x}px ${-y}px 0px rgb(218, 41, 42, 0.7),
                               ${-x}px ${y}px 0px rgb(218, 41, 42, 0.7),
                               ${y}px ${-x}px 0px rgb(242, 197, 61, 0.7),
                               ${-y}px ${x}px 0px rgb(242, 197, 61, 0.7)`;
    };
  
    window.addEventListener("mousemove", shadow);
  })(document);