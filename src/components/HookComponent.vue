<template>
    <div>
        <h1 @click="changeTitle()">{{ title }}</h1>
        <hr>
        <div v-for="(data) in datas" :key="data.id">
            <h3> {{ data.title }} </h3>
            <span> {{ data.body }} </span>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'HookComponent',
    data() {
        return {
            title:'arifin',
            datas: []
        }
    },
    methods: {
        changeTitle(){
            this.title = 'Was update Hook'
            console.info(this.datas);
        }  
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.datas = response.data)
        .catch(error => console.error(error))
    },



}
</script>

<style scoped>
h1{
    color: red;
    text-align: center;
}
</style>