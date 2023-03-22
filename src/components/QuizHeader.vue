<script setup>
    import { defineProps } from 'vue'

    const {questionStatus, progressBar} = defineProps(['questionStatus', 'progressBar'])
    
</script>

<template>
    <header>
        <h4 class="title">Question {{ questionStatus }}</h4>
        <div class="bar">
          <div class="completion" :style="{width: progressBar}"></div>
        </div>
      </header>
</template>

<style scoped>
header {
    margin-top: 20px;
  }
  .title {
    font-size: 30px;
  }
  .bar {
    width: 100%;
    height: 30px;
    border: 3px solid bisque;
  }
  .completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
  }
</style>