<template>
  <ElForm ref="pxForm" :model="form" status-icon label-width="150px" class="demo-pxForm">
    <ElFormItem
      v-for="item of schema"
      :key="item.prop"
      :label="item.label"
      :prop="item.prop"
      :rules="item.rules"
    >
      <slot v-if="item.slot" :name="item.prop"></slot>
      <ElInput v-else v-model="form[item.prop]" :type="item.type" autocomplete="off"></ElInput>
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="submitForm('pxForm')">提交</ElButton>
      <ElButton @click="resetForm('pxForm')">重置</ElButton>
    </ElFormItem>
  </ElForm>
</template>
<script>
export default {
  props: {
    schema: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      form: this.value
    }
  },
  methods: {
    submitForm(val) {
      this.$refs[val].validate((valid) => {
        if (valid) {
          this.$emit('submit', this.form)
        } else {
          return false
        }
      })
    },
    resetForm(val) {
      this.$refs[val].resetFields()
    }
  }
}
</script>
