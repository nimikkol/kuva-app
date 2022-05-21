<script setup>

defineProps({
    publication: Object
})

</script>

<template>
<div class="item">
    <img :src="publication.url" />
          {{publication.owner ? publication.owner.username : 'Anonyymi'}}
</div>

</template>

<style scoped>
.item{
    font-family: "Arial";
    font-size: 14pt;
}
 img{
    width: 400px;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    padding: 10px;
}
</style>