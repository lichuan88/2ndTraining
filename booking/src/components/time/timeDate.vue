<template>
    <div class="datetime">
      <p>{{ currentDate }}</p>
      <p>{{ currentTime }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentDate: '',
        currentTime: ''
      };
    },
    mounted() {
      // 初始调用一次，然后每秒更新一次
      this.updateDateTime();
      setInterval(this.updateDateTime, 1000);
    },
    methods: {
      updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        this.currentDate = now.toLocaleDateString(undefined, options);
        this.currentTime = now.toLocaleTimeString();
      }
    }
  };
  </script>
  
  <style scoped>
  .datetime {
    font-size: 18px;
    text-align: center;
    margin: 10px 0;
    background-color: #ffffff;
    height: 20vh;
    display: flex;
    justify-content: center;
    color: #5e7a88;
    font-size: 25px;
    flex-direction: column;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  }
  </style>
  