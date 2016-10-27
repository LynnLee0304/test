/**
 * Created by Lynn on 2016/7/20.
 */

window.onload = function (){

    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oP = document.getElementById('p1');
    var oStrong = document.getElementById('strong1');
    var oImg = document.getElementById('img1');
    var aBtn = document.getElementsByTagName('input');

    var arrUrl = [ 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg' ];
    var arrText = [ '文字一', '文字二', '文字三', '识文断字' ];
    var num = 0;
    var onOff = true;

    aBtn[0].onclick = function (){

        onOff = true;
        document.getElementsByTagName('span')[0].innerHTML = '图片可从最后一张跳转到第一张循环切换';

    };


    aBtn[1].onclick = function (){

        onOff = false;

        document.getElementsByTagName('span')[0].innerHTML = '图片只能到最后一张\或只能到第一张切换';

    };

    // 初始化
    function fnTab(){

        oP.innerHTML = arrText[num];
        oStrong.innerHTML = num+1 + ' / ' + arrText.length;
        oImg.src = arrUrl[num];

    }

    fnTab();

    oPrev.onclick = function (){

        num --;
        if( num == -1 ){
            if(onOff){num = arrText.length-1;}else{
                alert('这已经是第一张了，不能再往前了~~');
                num = 0;

            }
            //num = arrText.length-1;
        }

        fnTab();
    };

    oNext.onclick = function (){

        num ++;
        if( num == arrText.length )
        {

            if(onOff){

                num = 0;
            }
            else{

                alert('已经到最后一张啦~');
                num = arrText.length-1;
            }
        }

        fnTab();
    };

};