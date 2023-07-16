<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { addTrainingNote } from '../api/training.js';

const sport = ref('');
const groupCount = ref(0);
const amount = ref(0);
const unit = ref('');
const comment = ref('');

async function submit() {
  if (sport.value === '') {
    ElMessage({ type: 'warning', message: '请选择运动类型' });
    return;
  }
  try {
    const result = await addTrainingNote({ sport, groupCount, amount, unit, comment });
    ElMessage({ type: 'success', message: '记录成功' });
  } catch (err) {
    ElMessage({ type: 'error', message: err });
  }
}
</script>

<template>
  <div id="page-header">
    <h2>书写锻炼笔记</h2>
  </div>

  <el-form id="page-form" label-width="100px" label-position="left">
    <el-form-item label="运动">
      <el-select v-model="sport" placeholder="请选择运动类型">
        <el-option label="跑步" value="running"></el-option>
        <el-option label="引体向上" value="pull-up"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="组数">
      <el-input-number v-model="groupCount" placeholder="请输入组数"></el-input-number>
    </el-form-item>
    <el-form-item label="每组运动量">
      <el-input-number v-model="amount" placeholder="请输入运动量"></el-input-number>
    </el-form-item>
    <el-form-item label="单位">
      <el-select v-model="unit" placeholder="请选择计算方式">
        <el-option label="次" value="count"></el-option>
        <el-option label="米" value="meter"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="comment" type="textarea"></el-input>
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
