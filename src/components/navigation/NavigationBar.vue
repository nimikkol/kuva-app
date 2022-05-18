<script setup>
import { onMounted, onUnmounted, provide, ref } from 'vue';
import {RouterLink} from 'vue-router'
//import { setError } from '../../composables/notification';
import { authService } from '../../services/authService';
import { isAuth } from '../../store';
import LoginView from '../login/LoginView.vue';
import { Home, Account, Plus, Login, Logout } from 'mdue'


    const showLoginView = ref(false)

    provide('showLogin', showLoginView)

    const width = ref(0)

    const setScreenWidth = ()=>{
        width.value = window.innerWidth;
    };

    onMounted(()=>{
        setScreenWidth()
        window.addEventListener('resize', setScreenWidth);
    });

    onUnmounted(()=>{
        window.removeEventListener('resize', setScreenWidth);
    });

    const logout = ()=>{
        authService.useLogout();
    };

</script>

<template>
<div v-if="width > 600" class="nav">
    <router-link to="/">Koti</router-link>
<router-link v-if="isAuth" to="/users">Käyttäjät</router-link>
<router-link to="/create">Uusi postaus</router-link>
<a href="#" v-if="isAuth" @click.prevent="logout">Ulos</a>
<a href="#" v-else @click.prevent="showLoginView= !showLoginView">Kirjaudu</a>

<!--<button @click="setError('Testi virhe')">Testaa ilmoitus</button>-->

</div>

<div v-else class="nav-mobile">
    <router-link to="/">
        <Home class="home"></Home>
    </router-link>

<router-link v-if="isAuth" to="/users">
    <Account class="home"></Account>
</router-link>
<router-link to="/create">
    <Plus class="home"></Plus>
</router-link>

<a href="#" v-if="isAuth" @click.prevent="logout">
    <Logout class="home"></Logout>
</a>
<a href="#" v-else @click.prevent="showLoginView= !showLoginView">
    <Login class="home"></Login>
</a>

</div>

<login-view v-if="showLoginView && !isAuth"></login-view>

</template>

<style scoped>

.home{
    color: green;
}


.nav-mobile{
    position: fixed;
    bottom: 0px;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.nav{
    display: flex;
    justify-content: center;

}

a {
    margin: 20px;
    font-size: 18px;
}
</style>