<template>
  <div class="p-5 m-5 bg-white">
    <Button text="xxx" />
  </div>
</template>

<script type="text/javascript">
import { Button } from '~/pxui'

export default {
  name: 'Echarts',
  components: { Button },
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
          { value: 0, name: '41-50岁' }
        ]
      }
    }
  }
}
</script>
<style scoped>
.chart {
  width: 600px;
  height: 300px;
  margin-right: auto;
  margin-left: auto;
}

#my-chart {
  width: 600px;
  height: 300px;
  margin-right: auto;
  margin-left: auto;
}

#my-chart2 {
  width: 600px;
  height: 300px;
  margin-right: auto;
  margin-left: auto;
}
</style>
