let cnt = 0;
      let $score = null;
      let $fish = null;
      let play = false; //flag vari.
      let timerID = 0;

      $(document).ready(function () {

         init();

         initEvent();

      });

      function init() {
         $score = $("#score");
         $fish = $("#fish");
      }

      function initEvent() {
         //Game starts when the button clicked
         $("#start").click(function () {
            startGame();
         });
         $("#fish").click(function () {
            addScore();
         });
      }

      function startGame() {
         if (play == false) {
            checkEndGame();
            play = true;
            timerID = setInterval(function () {
               moveFish();
            }, 1000);
         }
      }

      function addScore() {
         if (play == true) {
            cnt++;
            $score.html(cnt);
         }
      }
      function moveFish() {
         // alert("move");
         // fish size: 120*70
         // panel size 600*400
         // x= 0~480 (600-120)
         // y= 0~330 (400-70)
         let x = Math.floor(Math.random() * 480);
         let y = Math.floor(Math.random() * 330);
         // alert(x);
         // alert(y);
         $fish.css({
            left: x,
            top: y
         });
      }
      function checkEndGame() {
         //Game ends in 10 sec.
         setTimeout(function () {
            play = false;

            clearInterval(timerID);
            alert("Game over");
         }, 10000);
      }