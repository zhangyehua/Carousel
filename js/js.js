/**
 * Created by Lenovo on 2016/9/13.
 */
window.onload = function () {
    var arr = [
        {   //  1
            width:180,
            top:40,
            left:180,
            opacity:40,
            zIndex:2
        },
        {  // 2
            width:230,
            top:60,
            left:80,
            opacity:60,
            zIndex:3
        },
        {   // 3
            width:280,
            top:70,
            left:0,
            opacity:70,
            zIndex:4
        },
        {  // 4
            width:330,
            top:80,
            left:100,
            opacity:80,
            zIndex:5
        },
        {   //5
            width:380,
            top:100,
            left:190,
            opacity:100,
            zIndex:6
        },
        {   //6
            width:330,
            top:80,
            left:340,
            opacity:80,
            zIndex:5
        },
        {   //7
            width:280,
            top:70,
            left:480,
            opacity:70,
            zIndex:4
        },
        {   //8
            width:230,
            top:60,
            left:460,
            opacity:40,
            zIndex:3
        },
        {   //9
            width:180,
            top:40,
            left:420,
            opacity:40,
            zIndex:2
        }
    ];

    //0.获取元素
    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = slide.children[1];
    var arrowChildren = arrow.children;
    //设置一个开闭原则变量，点击以后修改这个值。
    var flag = true;

    //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    slide.onmouseenter = function () {
        //arrow.style.opacity = 1;
        animate(arrow,{"opacity":100});
    }
    slide.onmouseleave = function () {
        //arrow.style.opacity = 1;
        animate(arrow,{"opacity":0});
    }

    move();
    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
    arrowChildren[0].onclick = function () {
        if(flag){
            flag = false;
            move(true);
        }
    }
    arrowChildren[1].onclick = function () {
        if(flag){
            flag = false;
            move(false);
        }
    }

    //4.书写函数。
    function move(bool){
        //判断：如果等于undefined,那么就不执行这两个if语句
        if(bool === true || bool === false){
            if(bool){
                arr.unshift(arr.pop());
            }else{
                arr.push(arr.shift());
            }
        }
        //在次为页面上的所有li赋值属性，利用缓动框架
        for(var i=0;i<liArr.length;i++){
            animate(liArr[i],arr[i], function () {
                flag = true;
            });
        }
    }

    $("button").click(function (){

        //清空之前的
        var arr1 = [
            //1
            {"width":220,
             "height":160,
             "top": 0,
             "left":0
            },
            //2
            {"width":220,
                "height":160,
                "top": 0,
                "left":290
            },
            //3
            {"width":220,
                "height":160,
                "top": 0,
                "left":560
            },
            //4
            {"width":220,
                "height":160,
                "top": 170,
                "left":0
            },
            //5
            {"width":220,
                "height":160,
                "top": 170,
                "left":290
            },
            //6
            {"width":220,
                "height":160,
                "top": 170,
                "left":560
            },
            //7
            {"width":220,
                "height":160,
                "top": 340,
                "left":0
            },
            //8
            {"width":220,
                "height":160,
                "top": 340,
                "left":290
            },
            //9>
            {"width":220,
                "height":160,
                "top": 340,
                "left":560
            },
        ]
       $("#slide>ul>li img").each(function (index,element){
           $(element).animate(arr1[$(element).index()],1000);
       });
        $("#slide>ul>li").each(function (index,element){
            $(element).animate(arr1[$(element).index()],1000);
        });
        //需求：鼠标放入li中，其他的li半透明，当前盒子，opacity值为1；离开wrap的时候所有的li全部opacity值为1；
        $("#slide").find("li").mouseenter(function () {
            //连式编程
            $(this).css("opacity",1).siblings("li").css("opacity",0.4);
        });

        //离开wrap的时候所有的li全部opacity值为1；
        $("#slide").mouseleave(function () {
            $(this).children().children("li").css("opacity",1);
//                $(".wrap li").css("opacity",1);
        });
        $("#arrow").hide();
    });

}