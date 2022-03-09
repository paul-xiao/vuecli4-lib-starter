<template>
  <el-form
    ref="pxForm"
    :model="form"
    status-icon
    label-width="150px"
    class="demo-pxForm"
  >
    <el-form-item
      v-for="item of schema"
      :key="item.prop"
      :label="item.label"
      :prop="item.prop"
      :rules="item.rules"
    >
      <slot v-if="item.slot" :name="item.prop"></slot>
      <el-input
        v-else
        v-model="form[item.prop]"
        :type="item.type"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('pxForm')">提交</el-button>
      <el-button @click="resetForm('pxForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'PxForm',
  props: {
    schema: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      form: this.value,
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
    },
  },
}
</script>
