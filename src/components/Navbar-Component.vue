<template>
    <nav>
        <ul>
            <li><a href="http://">Home</a></li>
            <li><a href="http://">Post</a></li>
            <li><a href="http://">About</a></li>
            <li><a href="http://">Contact</a></li>
        </ul>
    </nav>
</template>

<script>


export default {
    name: 'Navbar-Component',
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    nav{
        text-align: center;
    }

    nav ul{
        padding: 0;
    }

    nav li{
        display: inline-block;
        list-style-type: none;
        margin: 0;
        padding: 8px;
    }
</style>