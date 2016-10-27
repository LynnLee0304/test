window.onload = function() {

    var oDiv = document.getElementById('pic');
    var oUl = oDiv.getElementsByTagName('ul');
    var oImg = oDiv.getElementsByTagName('img');
    var oP = oDiv.getElementsByTagName('p');
    var oSpan = oDiv.getElementsByTagName('span');
    var aLi = oUl[0].getElementsByTagName('li');

    var arrUrl = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg' ];
    var arrText = ['图片一', '图片二', '图片三', '图片四'];
    var num = 0;

    for(var i=0; i<arrUrl.length; i++){
        oUl[0].innerHTML += '<li></li>';
    }

    //初始化
    oImg.src = arrUrl[num];
    oSpan.innerHTML = 1+num+' / '+arrUrl.length;
    oP.innerHTML = arrText[num];
    aLi[num].className = 'active';

    for(var i=0; i<aLi[0].length; i++){

        aLi[i].index = i;// 索引值

        aLi[i].onclick = function (){
            oImg.src = arrUrl[ this.index ];
            oP.innerHTML = arrText[ this.index ];
            oSpan.innerHTML = 1+this.index + ' / '+arrText.length;
        }

    }





};











