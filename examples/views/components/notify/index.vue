<template>
  <div>
    <button @click="onNotify">notify</button>
  </div>
</template>

<script>
export default {
  name: 'Xx',
  data() {
    return {
      pollingTimer: null,
      notify: {}
    }
  },
  beforeDestroy() {
    this.pollingTimer && clearInterval(this.pollingTimer)
  },
  methods: {
    onNotify() {
      this.pollingTimer && clearInterval(this.pollingTimer)
      this.pollingTimer = setInterval(async () => {
        const data = [
          {
            id: 1,
            content:
              '[UUID=39b4d3b7d4ce420f9b3faa0c155ffab4]裸机agent上报部署服务器IP[10.220.100.167]与系统保存IP[10.220.100.168]不一致，请检查。【分布式云平台】'
          },
          {
            id: 2,
            content: '222'
          }
        ]

        for (let item of data) {
          console.log(this.notify)
          if (!this.notify[item.id]) {
            setTimeout(() => {
              this.notify[item.id] = this.$notify({
                title: '系统消息',
                message: item.content,
                customClass: 'notify',
                duration: 0,
                position: 'bottom-right',
                type: 'warning',
                onClose: () => {
                  console.log(item.id)
                  this.notify[item.id] = null
                }
              })
            }, 1000)
          }
        }
      }, 5 * 1000)
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
.notify {
  word-break: break-all;
}
</style>
