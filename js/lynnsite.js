window.onload = function(){
    var oLeft = document.getElementById('left');
    var oRight = document.getElementById('right');
    var oSpan = document.getElementById('span');
    var oOpen = document.getElementById('open');
    var oImg = document.getElementById('img');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oUl = document.getElementById('ul');
    var aLi = oUl.getElementsByTagName('li');


    var arr = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg'];
    var num = 0;
    aLi[0].className ='active';



      for(var i=0;i<arr.length;i++){
          oNext.onclick = function(){
              num++;
              num%=arr.length;
              oImg.src = arr[num];
              aLi[num-1].className ='';


         };
          oPrev.onclick = function(){
              num--;
              num%=arr.length;
              oImg.src = arr[num+3];
              aLi[num+1].className ='';
          }
      }




    oSpan.onclick = function(){

        oRight.style.display = 'none';
        oLeft.style.width = '100%';

    };

    oOpen.onclick = function(){
        oRight.style.display = 'block';
        oLeft.style.width = '80%';
    };


};
