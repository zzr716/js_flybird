var bird = {
  div: document.createElement('div'),
  fallSpeed: 0,
  flyTimer: null,
  wingTimer: null,
  showBird: function (parentObj) {
    this.div.style.width = '40px';
    this.div.style.height = '28px';
    this.div.style.backgroundImage = 'url(/img/bird0.png)';
    this.div.style.backgroundRepeat = 'none';
    this.div.style.position = 'absolute';
    this.div.style.left = '50px';
    this.div.style.top = '200px';
    this.div.style.zIndex = '1';
    parentObj.appendChild(this.div);
  },
  flyBird: function () {
    this.flyTimer = setInterval(fly, 40);
    var that = this;
    function fly () {
      that.div.style.top = that.div.offsetTop + that.fallSpeed++ + 'px';
      if (that.div.offsetTop < 0) {
        that.fallSpeed = 2;
      }
      if (that.div.offsetTop >= 395) {
        bird.fallSpeed = 0;
        clearInterval(that.flyTimer);
        clearInterval(that.wingTimer);
      }
      if (bird.fallSpeed > 12) {
        bird.fallSpeed = 12;
      }
    }
  },
  wingWave: function () {
    var up = ["url(img/up_bird0.png)", "url(img/up_bird1.png)"];
    var down = ["url(img/down_bird0.png)", "url(img/down_bird1.png)"];
    var i = 0, j = 0;
    this.wingTimer = setInterval(wing, 120);
    var that = this;
    function wing() {
      if (that.fallSpeed > 0) {
        that.div.style.backgroundImage = down[i++];
        if (i >= 2) {
          i = 0;
        }
      } else {
        that.div.style.backgroundImage = up[j++];
        if (j >= 2) {
          j = 0;
        }
      }
      // 如何完成向上飞向下降？
    }
  }
}
