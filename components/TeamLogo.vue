<template>
    <view class="logo-container">
      <image :src="teamLogo" alt="Team Logo"></image>
    </view>
  </template>
  
  <script>
  export default {
    props: {
      teamLogo: String,
    },
  };
  </script>
  
  <style>
  .logo-container {
    text-align: center;
    margin-top: 20px;
  }
  </style>