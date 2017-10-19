// 商品分类选项卡
{
    let fenlei = document.querySelectorAll(".fenlei");

    function xuanxiangka(val) {
        let fenleiTop = val.querySelectorAll(".fenlei-top-fenlei a");
        let fenleiBot = val.querySelectorAll(".fenlei-bottom .bottom-right");
        fenleiTop.forEach(function (ele, index) {
            ele.onmouseover = function () {
                for (let i = 0; i < fenleiTop.length; i++) {
                    fenleiTop[i].classList.remove("active");
                    fenleiBot[i].style.display = "none";
                }
                ele.classList.add("active");
                fenleiBot[index].style.display = "block";
            }
        });
    }

    for (let i = 0; i < fenlei.length; i++) {
        xuanxiangka(fenlei[i]);
    }
}
    // banner
{
    let dians= document.querySelectorAll(".dianbox li");
    let imgs= document.querySelectorAll(".bannerbox li");

    dians.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<dians.length;i++){
                dians[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            ele.classList.add("active");
            imgs[index].classList.add("active");
            now=index;
        }

    });
    let now=0;
    let st =window.setInterval(fn,2000);
    function fn() {
        now++;
        if(now===dians.length){
            now=0;
        }
        for(let i=0;i<dians.length;i++){
            dians[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        dians[now].classList.add("active");
        imgs[now].classList.add("active");
    }
    let bannerObj=document.querySelector(".banner");
    bannerObj.onmouseover=function () {
        clearInterval(st);

    };
    bannerObj.onmouseout=function () {
        st=setInterval(fn,2000);
    };
}
    // 明星单品
{
    var prev=document.querySelector(".prev")
    var next=document.querySelector(".next")
    var box=document.querySelector(".down-box")
    var bigbox=document.querySelector(".box")


    function nextobj(){
        prev.classList.add("active")
        next.classList.remove("active")
        box.style.marginLeft="-1240px";
    }
    function prevobj(){
        prev.classList.remove("active")
        next.classList.add("active")
        box.style.marginLeft="0";
    }
    var i=1
    var st=setInterval(fn,3000)
    function fn(){
        i++;
        if(i%2==0){
            prevobj()
        }else if(i%2==1){
            nextobj()
        }
    }
    bigbox.onmouseover=function(){
        clearInterval(st)
    }

    bigbox.onmouseout=function(){
        st=setInterval(fn,3000)
    }
    next.onclick=function(){
        nextobj()
    }
    prev.onclick=function(){
        prevobj()
    }
}
// 内容滑动
{
    let neirongs = document.querySelectorAll(".neirong-inner");

    function neirongFn(par) {
        let dots = par.querySelectorAll(".neirong-dots span");
        let container = par.querySelector("#neirong .container ");
        let nrArrowPrev = par.querySelector(".neirong-prev");
        let nrArrowNext = par.querySelector(".neirong-next");
        let num = 0;

        function nrFn(ele, index) {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("selected");
            }
            ele.classList.add("selected");
            container.style.marginLeft = -296 * index + "px";
        }

        function nrArrow(dir = "r") {
            if (dir === "r") {
                num++;
                if (num === dots.length) {
                    num = dots.length - 1;
                }
            } else {
                num--;
                if (num === -1) {
                    num = 0;
                }
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("selected");
            }
            dots[num].classList.add("selected");
            container.style.marginLeft = -296 * num + "px";
        }

        dots.forEach(function (ele, index) {
            ele.onclick = function () {
                nrFn(ele, index);
                num = index;
            };
        });
        nrArrowNext.onclick = function () {
            nrArrow();
        };
        nrArrowPrev.onclick = function () {
            nrArrow("l");
        }


    }

    for (let i = 0; i < neirongs.length; i++) {
        neirongFn(neirongs[i]);
        // console.log(neirongs[i])
    }
}

// 推荐滑动

{
    let num = 1;
    let tjPrevObj = document.querySelector(".tuijian-anniu .prev");
    let tjNextObj = document.querySelector(".tuijian-anniu .next");
    let tjContainer = document.querySelector("#tuijian .container");
    let tjInner = document.querySelectorAll("#tuijian .container .tuijian-right");

    function tjNext() {
        if (num < tjInner.length / 5) {
            num++;
            tjPrevObj.classList.add("selected");
            if (num == tjInner.length / 5) {
                tjNextObj.classList.remove("selected");
            }
        }
        tjContainer.style.marginLeft = -1240 * (num - 1) + "px";
    }

    function tjPrev() {
        if (num > 1) {
            num--;
            tjNextObj.classList.add("selected");
            if (num == 1) {
                tjPrevObj.classList.remove("selected");
            }
        }
        tjContainer.style.marginLeft = -1240 * (num - 1) + "px";
    }

    tjNextObj.onclick = tjNext;

    tjPrevObj.onclick = tjPrev;

}