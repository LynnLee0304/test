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

    var arr = [ 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg' ];
    var num = 0;

    ////////////////////////////////////////////////////////////////////////

    var timer = null;

    function autoPlay(){
        timer = setInterval(function(){
            num++;
            num%=arr.length;
            fnTab();
        }, 1000);
    }
    // autoPlay();

    setTimeout( autoPlay, 2000 );

    oLeft.onmouseover = function (){
        clearTimeout( timer );
    };
   // oLeft.onmouseout = autoPlay;

    ////////////////////////////////////////////////////////////////////////


    // 初始化
    function fnTab(){
        oImg.src = arr[num];
        for( var i=0; i<aLi.length; i++ ){
            aLi[i].className = '';
        }
        aLi[num].className = 'active';
    }
    fnTab();

    for( var i=0; i<aLi.length; i++ ){
        aLi[i].index = i;			// 索引值
        aLi[i].onclick = function (){
            num = this.index;
            fnTab();
        };
    }
};