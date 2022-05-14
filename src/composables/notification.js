
import { readonly, ref } from "vue";

const notificationData = ref({})

export const setError = (errorMsg) => {

    const key = Math.floor(Math.random() * 1E6).toString(16)

    notificationData.value[key] = {
        message: errorMsg,
        color: 'red'
    }
}

export const removeNotificationByKey = (key) =>{
    delete notificationData.value[key]
}

export const getNotifications = readonly(notificationData)