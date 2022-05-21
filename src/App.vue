<script setup>

import { RouterView } from 'vue-router'
import NotificationContainer from './components/notification/NotificationContainer.vue';
import BaseLayout from './components/layout/BaseLayout.vue';

</script>

<template>
<NotificationContainer></NotificationContainer>

  
  <BaseLayout>  
    <router-view></router-view>
 </BaseLayout>
  



</template>

<style>
body {
  margin: 0px;
}

</style>
