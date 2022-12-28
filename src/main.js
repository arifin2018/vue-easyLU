import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$filters = {
    capitalize(value){
        return value.toUpperCase();
    }
}
app.mount('#app')
