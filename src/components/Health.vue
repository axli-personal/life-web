<script setup>
import { ref } from 'vue';
import { collectHealthData } from '../api/health.js';
import { ElMessage } from 'element-plus';

const type = ref('');
const amount = ref(0);
const unit = ref('');
const collectDate = ref(new Date());

async function submit() {
  if (type.value === '') {
    ElMessage({ type: 'warning', message: '请选择类型' });
    return;
  }
  try {
    const result = await collectHealthData({ type, amount, unit, collectDate });
    ElMessage({ type: 'success', message: '保存成功' });
  } catch (err) {
    ElMessage({ type: 'error', message: err });
  }
}
</script>

<template>
  <div id="page-header">
    <h2>收集健康数据</h2>
  </div>

  <el-form id="page-form" label-width="70px" label-position="left">
    <el-form-item label="类型">
      <el-select v-model="type" placeholder="请选择类型">
        <el-option label="身高" value="height"></el-option>
        <el-option label="体重" value="weight"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="读数">
      <el-input-number v-model="amount" :precision="2" placeholder="请输入读数"></el-input-number>
    </el-form-item>
    <el-form-item label="单位">
      <el-select v-model="unit" placeholder="请选择单位">
        <el-option label="米" value="meter"></el-option>
        <el-option label="千克" value="kilogram"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="时间">
      <el-date-picker v-model="collectDate" type="datetime" placeholder="请选择数据时间"></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
#page-header {
  border-bottom: 1px solid #dcdfe6;
  margin-bottom: 20px;
}

#page-form {
  width: 500px;
}
</style>
