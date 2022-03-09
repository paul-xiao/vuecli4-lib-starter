<template>
  <div class="dv-active-ring-chart">
    <div ref="active-ring-chart" class="active-ring-chart-container" />
    <div class="active-ring-info">
      <!-- <dv-digital-flop :config="digitalFlop" /> -->
      <div>{{ digitalFlop }}</div>
      <div class="active-ring-name" :style="fontSize">{{ ringName }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      mergedConfig: null,
      chart: null,
      activeIndex: 0,
    }
  },
  computed: {
    digitalFlop() {
      return this.config.data[this.activeIndex].value
    },
    fontSize() {
      return this.config.fontSize
    },
    ringName() {
      return this.config.data[this.activeIndex].name
    },
  },
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      // 找到容器
      const myChart = this.$echarts.init(this.$refs['active-ring-chart'])
      // 开始渲染
      function getEhartsOption(data) {
        return {
          color: ['#FFD600', '#00A2FF', '#6924FE', '#CA44FB', '#6B61FF'],
          title: {
            text: data.title,
            subtext: data.subtext,
            x: 'center',
            y: '70%',
            textStyle: {
              fontSize: 16,
              color: '#ccc', // 主标题文字颜色
            },
            subtextStyle: {
              fontSize: 20,
              color: '#FFD600', // 副标题文字颜色
            },
          },
          series: [
            {
              name: '',
              type: 'pie',
              center: ['50%', '40%'],
              radius: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center',
                },
                emphasis: {
                  show: false,
                  formatter(params) {
                    const name = params.data.name
                    const arr = name.split(':')
                    const percent = params.percent
                    const str = percent + '%' + '\n' + arr[0]
                    return str
                  },
                  textStyle: {
                    fontSize: '15',
                    fontWeight: 'bold',
                    color: '#ccc',
                  },
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: data.data,
            },
          ],
        }
      }

      myChart.setOption(getEhartsOption(this.config))
      let i = 0
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: i,
      }) // 设置默认选中高亮部分
      setInterval(() => {
        i++
        if (i === 5) {
          i = 0
        }
        this.activeIndex = i
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: i === 0 ? 4 : i - 1,
        })
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: i === 5 ? 0 : i,
        }) // 设置默认选中高亮部分
      }, 1000)
    },
  },
}
</script>
<style scoped>
.dv-active-ring-chart {
  position: relative;
}

.dv-active-ring-chart .active-ring-chart-container {
  width: 100%;
  height: 100%;
}

.dv-active-ring-chart .active-ring-info {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dv-active-ring-chart .active-ring-info .dv-digital-flop {
  width: 100px;
  height: 30px;
}

.dv-active-ring-chart .active-ring-info .active-ring-name {
  width: 100px;
  height: 30px;
  color: #ccc;
  text-align: center;
  vertical-align: middle;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
