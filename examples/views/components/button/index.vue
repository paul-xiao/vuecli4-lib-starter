<template>
  <div class="p-5 m-5 bg-white">
    <px-pie class="chart" :config="config"></px-pie>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Echarts',
  data() {
    return {
      config: {
        title: '家庭活跃人数',
        subtext: '303100人',
        data: [
          { value: 0, name: '61岁以上' },
          { value: 0, name: '30岁以下' },
          { value: 0, name: '30-40岁' },
          { value: 0, name: '51-60岁' },
          { value: 0, name: '41-50岁' },
        ],
      },
    }
  },
}
</script>
<style scoped>
.chart {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

#my-chart {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

#my-chart2 {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>
