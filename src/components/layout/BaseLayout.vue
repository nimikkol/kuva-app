<script setup>
import NavigationBar from '../navigation/NavigationBar.vue';

</script>

<template>
<div class="nav">
    <NavigationBar></NavigationBar>
</div>
<div class="container">
    <slot>

    </slot>
</div>

</template>

<style scoped>

.container{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    padding-top: 60px;
    background-color: burlywood;
}

.nav{
    display: flex;
    position: fixed;
    background-color: crimson;
    top: 0px;
    width: 100%;
}

</style>