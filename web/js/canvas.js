//得到画布
var mycanvas = document.querySelector("canvas");
//设置画布和屏幕一样大
mycanvas.width = document.documentElement.clientWidth;
mycanvas.height = document.documentElement.clientHeight;

window.onresize = function() {
      mycanvas.width = document.documentElement.clientWidth;
      mycanvas.height = document.documentElement.clientHeight;
   }
   //上下文
var ctx = mycanvas.getContext("2d");
//面向对象，ES6语法
function Ball(idx) {
   this.x = parseInt(Math.random() * mycanvas.width);
   this.y = parseInt(Math.random() * mycanvas.height);
   this.r = 3;
   //自己的序号
   this.idx = idx;
   //随机一个方向，为了保证不是0，所以写了一个while语句，如果是0重新随一个
   while (true) {
      var m = parseInt(Math.random() * 8) - 4;
      if (m != 0) {
         this.dx = m;
         break;
      }
   }
   while (true) {
      var m = parseInt(Math.random() * 8) - 4;
      if (m != 0) {
         this.dy = m;
         break;
      }
   }
   //放入数组
   ballArr.push(this);
}
//渲染
Ball.prototype.render = function() {
      //渲染小球
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
      ctx.fillStyle = "#fff";
      ctx.globalAlpha = 0.1; //透明度
      ctx.fill();

      //划线，依次探访比自己序号大的小球，看看这个小球是不是离自己够近
      for (var i = this.idx + 1; i < ballArr.length; i++) {
         if (Math.abs(this.x - ballArr[i].x) < 140 && Math.abs(this.y - ballArr[i].y) < 140) {
            //this这个球，和ballArr[i] 这两个小球足够近
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(ballArr[i].x, ballArr[i].y);
            ctx.strokeStyle = "#fff";
            ctx.globalAlpha = 0.1;
            ctx.stroke();
         }
      }

   }
   //更新
Ball.prototype.update = function() {
      this.x += this.dx;
      this.y -= this.dy;
      //验收，如果小球出了屏幕，重新设置一下x、y
      if (this.x > mycanvas.width + this.r) {
         this.x = -this.r;
      } else if (this.x < -this.r) {
         this.x = mycanvas.width + this.r
      }

      if (this.y > mycanvas.height + this.r) {
         this.y = -this.r;
      } else if (this.y < -this.r) {
         this.y = mycanvas.height + this.r
      }
   }
   //收听鼠标位置
Ball.prototype.listen = function(x, y) {
   // console.log("我是" + this.idx + "号小球，我收听到了鼠标的位置为" + x + "," + y);
   var dx = x - mycanvas.width / 2;
   var dy = y - mycanvas.height / 2;
   this.x += dx / 400;
   this.y += dy / 200;
}

//小球数组
var ballArr = [];

//生成30个小球
for (var i = 0; i < 18; i++) {
   new Ball(i);
}

//定时器
setInterval(function() {
   //清屏
   ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
   //渲染所有小球
   ballArr.forEach(function(item) {
      item.update();
      item.render();
   });
}, 30);


//鼠标的监听
mycanvas.onmousemove = function(event) {
   //调用所有收听者（就是所有小球）的listen函数，把最新信息告诉他们
   ballArr.forEach(function(item) {
      item.listen(event.offsetX, event.offsetY);
   });
}
