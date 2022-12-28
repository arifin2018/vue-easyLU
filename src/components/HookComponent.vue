<template>
    <div>
        <h1 @click="changeTitle()">{{ title }}</h1>
        <hr>
        <input type="text" placeholder="search..." v-model="searchInput">
        <div v-for="(data) in filterSearching" :key="data.id">
            <h3> {{ $filters.capitalize(data.title) }} </h3>
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
            searchInput: '',
            title:'arifin',
            datas: [],
        }
    },
    methods: {
        changeTitle(){
            this.title = this.title == 'Was update Hook' ? 'arifin' : 'Was update Hook' 
        }  
    },
    computed:{
        filterSearching(){
            return this.datas.filter(name=>{
                return name.title.match(this.searchInput);
            });
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