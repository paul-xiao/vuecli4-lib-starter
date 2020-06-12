<template>
  <div>
    <hr />
    <p>剩余次数{{ count }}</p>
    <p>恭喜！你抽中了 {{ prize }}</p>
    <p>中奖编号: <input type="text" v-model="winnerIndex" placeholder="请输入中奖编号" /></p>
    <br />

    <div class="lottery">
      <div class="gift" ref="gift">
        <div
          class="item"
          v-for="item in data"
          :key="item.id"
          :class="{ active: item.prizeIndex === currentIndex }"
        >
          <template v-if="item.isButton">
            <div class="start-btn" @click="start">
              开始
            </div>
          </template>
          <template v-else>
            {{ item.prize }} <br />
            {{ item.prizeIndex }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PxLottery",
  /* eslint-disable */
  data: () => {
    return {
      count: 5,
      currentIndex: null,
      winnerIndex: 1, // 中奖编号， 后端传入
      isRunning: false,
      prize: "",
      data: [
        {
          id: 1,
          prize: "现金红包10元",
          prizeIndex: 1
        },
        {
          id: 2,
          prize: "现金红包50元",
          prizeIndex: 2
        },
        {
          id: 3,
          prize: "现金红包100元",
          prizeIndex: 3
        },
        {
          id: 4,
          prize: "现金红包150元",
          prizeIndex: 8
        },
        {
          id: 5,
          isButton: true
        },
        {
          id: 6,
          prize: "谢谢参与",
          prizeIndex: 4
        },
        {
          id: 7,
          prize: "谢谢参与",
          prizeIndex: 7
        },
        {
          id: 8,
          prize: "谢谢参与",
          prizeIndex: 6
        },
        {
          id: 9,
          prize: "谢谢参与",
          prizeIndex: 5
        }
      ]
    };
  },
  methods: {
    start() {
      this.prize = "";
      if (this.count > 0 && !this.isRunning) {
        this.isRunning = true;
        this.count -= 1;
        let index = this.currentIndex;
        let duration = 8 * 10 + this.winnerIndex;
        let timer = null;
        const run = () => {
          let speed = this.easeInOut(this.currentIndex, 30, 160, duration);
          if (index < duration) {
            timer = setTimeout(() => {
              index += 1;
              this.currentIndex = index % 8 === 0 ? 8 : index % 8;
              run();
            }, speed);
          } else {
            clearTimeout(timer);
            this.isRunning = false;
            this.prize = this.data.filter(e => e.prizeIndex === this.currentIndex)[0].prize;
          }
        };
        run();
      }
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
  width 300px
  height 300px
  position relative
  .gift
    background cyan
    width 300px
    height 300px
    position relative
    text-align center
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    .item
      border: 1px solid #ccc
      box-sizing border-box
      display flex
      justify-content center
      align-items center
      padding 10px
      font-size 12px
      .start-btn{
        cursor pointer
      }
      &.active{
        border-color red
        background lightcyan
      }
</style>
