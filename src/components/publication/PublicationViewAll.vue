
<script setup>
// Tuodaan vue:sta ref, eli funktio reaktiivisen datan luomiseksi
import { useRouter } from 'vue-router';
import { publicationService } from '../../services/publicationService';
import PublicationView from './PublicationView.vue';

const {data, error, isFinished} = publicationService.useGetAll()

const router =  useRouter()

</script>

<template>
  <h1>Applander</h1>
  <h3>Alla näet hauskoja memejä!</h3>
  <div v-if="error"> Datan lataaminen epäonnistui</div>
  <div v-else-if="!isFinished"> Ladataan...</div>
  <template v-else-if="data?.publications">
  
      <div class="item" @click="router.push('/publication/'+ publication._id)" v-for="publication in data.publications">
      <PublicationView :publication="publication"></PublicationView>
      
      </div>
  

  </template> 
</template>

<style scoped>

.item{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:antiquewhite;
    margin: 20px;
}

body{
    margin: 30px;
}

</style>