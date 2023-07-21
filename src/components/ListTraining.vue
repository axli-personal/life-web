<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { listTrainingNote } from '../api/training.js';
import Training from './AddTraining.vue';

const drawer = ref(false);

function openDrawer() {
  drawer.value = true;
}

const notes = ref([]);

function transform(data) {
  let result = [];
  for (const item of data) {
    result.push({
      ...item,
      amountSummary: `${item.amount} ${item.unit}`,
    });
  }
  return result;
}

async function syncNotes() {
  try {
    const response = await listTrainingNote();
    notes.value = transform(response.data);
    ElMessage({ type: 'success', message: '请求成功' });
  } catch (err) {
    ElMessage({ type: 'error', message: err });
  }
}

function beforeCloseDrawer(done) {
  syncNotes();
  done();
}

syncNotes();
</script>

<template>
  <div id="page-header">
    <el-button @click="openDrawer">书写锻炼笔记</el-button>
  </div>

  <el-drawer v-model="drawer" :before-close="beforeCloseDrawer" :with-header="false" size="40%">
    <Training></Training>
  </el-drawer>

  <el-table :data="notes" border>
    <el-table-column type="index"></el-table-column>
    <el-table-column prop="sport" label="运动" width="150px"></el-table-column>
    <el-table-column prop="amountSummary" label="运动量" width="150px"></el-table-column>
    <el-table-column prop="groupCount" label="组数" width="150px"></el-table-column>
    <el-table-column prop="comment" label="备注"></el-table-column>
  </el-table>
</template>

<style scoped>
#page-header {
  margin-bottom: 20px;
}
</style>
