<script setup >
import { onClickOutside } from '@vueuse/core';
import { inject, reactive, ref } from 'vue'
import {authService} from '../../services/authService'
import { RouterLink } from 'vue-router';

const showLoginView = inject('showLogin')


    const credentials = reactive({
        username: '',
        password: ''
    })

    const login = async ()=>{

        await authService.useLogin(credentials)
        
        credentials.username = ''
        credentials.password = ''
    }

    const target = ref(null)

    onClickOutside(target, () =>{
        showLoginView.value = false
        
    })
</script>
    

<template>
    <form ref="target" class="login" @submit.prevent="login">
        <label>Käyttäjänimi</label>
        <input v-model="credentials.username" type="text">

        <label>Salasana</label>
        <input v-model="credentials.password" type="password">
        <router-link to="/register" @click="showLoginView = false">Rekisteröidy</router-link>
        <button type="submit">Kirjaudu</button>

    </form>
</template>

<style>

.login{
    width: 250px;
    position: fixed;
    left: 50%;
    right: 50%;
    top: 50%;
    display: flex;
    flex-flow: column wrap;
    background-color: lightpink;
    padding: 20px;
    transform: translate(-50%, -50%);

}

input, label, button {
    margin-top: 6px;
}

</style>