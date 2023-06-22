<template>
    <view class="match-container">
      <text>{{ nextMatch.details }}</text>
      <!-- Ajoutez plus d'informations sur le match ici -->
    </view>
  </template>
  
  <script>
  export default {
    props: {
      nextMatch: Object,
    },
  };
  </script>
  
  <style>
  .match-container {
    background-color: #f0f0f0;
    padding: 20px;
    margin: 20px;
  }
  </style>
  