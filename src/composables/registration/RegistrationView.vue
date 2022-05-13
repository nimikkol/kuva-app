<script setup>
import { computed, reactive, ref } from 'vue';
import { registrationService } from '../../services/registrationService';

const confirmPassword = ref('')

const isRegistrationSuccessful = ref(false)

const userData = reactive({
    username: '',
    password: '',
    email: ''

})

const regex = /^[A-Za-z0-9]+$/

const dataValidation = computed(()=>{

    const isUserNameValid = userData.username.length > 2 && regex.test(userData.username)
    const isEmailValid = userData.email.includes('@') && userData.email.includes('.')
    const isPasswordValid = userData.password.length > 7
    const isPasswordConfirmed = userData.password === confirmPassword.value
    const isAllValid = isUserNameValid && isEmailValid && isPasswordValid && isPasswordConfirmed


    return {
    isUserNameValid,
    isEmailValid,
    isPasswordValid,
    isPasswordConfirmed,
    isAllValid
    }



})

const register = async ()=>{
    if(!dataValidation.value.isAllValid){
        return
    }

    const {data, error, statusCode } = await registrationService.useRegister(userData)

    if(!error.value && data.value && statusCode.value === 200){
        isRegistrationSuccessful.value = true
    } 
    else{
        console.log(data.value, error.value, statusCode.value)
    }
}

</script>

<template>

<div v-if="isRegistrationSuccessful">Rekisteröityminen onnistui!</div>
<form v-else @submit.prevent="register">
    <label>Käyttäjänimi</label>
    <small v-if="!dataValidation.isUserNameValid">Käyttäjänimi liian lyhyt tai sisältää erikoismerkkejä</small>
    <input v-model="userData.username" type="text">

    <label>Sähköposti</label>
    <small v-if="!dataValidation.isEmailValid">Tarkista sähköposti</small>
    <input v-model="userData.email" type="email">

    <label>Salasana</label>
    <small v-if="!dataValidation.isPasswordValid">Salasanan tulee olla vähintään 7 merkkiä pitkä</small>
    <input v-model="userData.password" type="password">

    <label>Salasana uudelleen</label>
    <small v-if="!dataValidation.isPasswordConfirmed">Salasanat eivät täsmää</small>
    <input v-model="confirmPassword" type="password">

    <button :disabled="!dataValidation.isAllValid" type="submit">Rekisteröidy</button>


</form>

</template>


<style>
form{
    display: flex;
    flex-direction: column;
    width: 300px;
}

</style>