<template>
  <div>
    <hr />
    <p>剩余次数{{ count }}</p>
    <p>恭喜！你抽中了 {{ prize }}</p>
    <p>中奖编号: <input type="number" v-model="winnerIndex" placeholder="请输入中奖编号" /></p>
    <br />
    <div class="lottery">
      <div class="gift" ref="gift">
        <div class="item" v-for="item in data" :key="item.id">
          {{ item.prize }} <br />
          {{ item.prizeIndex }}
        </div>
      </div>
      <div class="spinner" @click="start"></div>
    </div>
  </div>
</template>
<script>
import anime from "animejs/lib/anime";

export default {
  name: "PxSpinner",
  /* eslint-disable */
  data: () => {
    return {
      count: 5,
      currentIndex: 0,
      winnerIndex: 0,
      isRunning: false,
      prize: "",
      angle: 0,
      data: [
        {
          id: 1,
          prize: "现金红包10元",
          prizeIndex: 1
        },
        {
          id: 2,
          prize: "现金红包50元",
          prizeIndex: 6
        },
        {
          id: 3,
          prize: "现金红包100元",
          prizeIndex: 5
        },
        {
          id: 4,
          prize: "现金红包150元",
          prizeIndex: 4
        },
        {
          id: 5,
          prize: "现金红包500元",
          prizeIndex: 3
        },
        {
          id: 6,
          prize: "谢谢参与",
          prizeIndex: 2
        }
      ]
    };
  },
  methods: {
    start() {
      if (Number(this.winnerIndex) && this.count > 0 && !this.isRunning) {
        let mutation = 0; //转动格数

        this.isRunning = true;
        mutation = this.currentIndex
          ? Number(this.winnerIndex) - this.currentIndex
          : Number(this.winnerIndex) - 1;
        this.count -= 1;
        this.angle += 360 * 12 + 60 * mutation;

        anime({
          targets: this.$refs.gift,
          duration: 3000,
          rotate: this.angle,
          easing: "easeInOutCubic",
          complete: d => {
            this.isRunning = false;
            this.currentIndex = Number(this.winnerIndex); //当前index
            this.prize = this.data.filter(d => d.prizeIndex === this.currentIndex)[0].prize;
            console.log("当前位置：", this.currentIndex);
          }
        });
      }
    },
    randomIndex(m, n) {
      // 总抽奖次数 10000
      return Math.floor(Math.random() * (m - n + 1) + n);
    },
    /* eslint-disable */
    easeInOut(t, b, c, d) {
      //t当前时间 b初始值，c变化量，d持续时间
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    }
  }
};
</script>
<style lang="stylus" scoped>
.lottery
  width 350px
  height 350px
  position relative
  .spinner
    cursor pointer
    width: 30px;
    height: 30px;
    background: #f00;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    margin-top: -15px;
    transform: rotate(90deg);
    &:after
      content: '';
      position: absolute;
      top: 14px;
      right: 14px;
      width: 80px;
      height: 2px;
      background: red;
  .gift
    background cyan
    width 350px
    height 350px
    border-radius 50%
    position relative
    text-align center
    .item
     position absolute
     display inline-block
     width 100px
     text-align center
     font-size 12px
     line-height 50px
     margin-left -25px
     &:nth-child(2)
      transform rotate(60deg)
      transform-origin 25px 175px
     &:nth-child(3)
       transform rotate(120deg)
      transform-origin 25px 175px
     &:nth-child(4)
      transform rotate(180deg)
      transform-origin 25px 175px
     &:nth-child(5)
      transform rotate(240deg)
      transform-origin 25px 175px
     &:nth-child(6)
      transform rotate(300deg)
      transform-origin 25px 175px
</style>
