<template>
  <div>
    {{ title }}
  </div>
  <NavbarComponent/>
  <HookComponent/>
  <!-- <AllFriends :friends="friends" @delete="deleteFriend"/>
  <OnlineFriends :friends="friends"/> -->


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavbarComponent from "./components/Navbar-Component.vue";
import HookComponent from "./components/HookComponent.vue";
// import AllFriends from "./components/AllFriends.vue";
// import OnlineFriends from "./components/OnlineFriends.vue";

export default {
  name: 'App',
  components: {
    // AllFriends,
    NavbarComponent,
    HookComponent,
    // OnlineFriends
  },
  data() {
      return {
        title: 'Wow',
        friends:[
          {name:'A', online:true, parrent:[
              {
                father: 'arifin',
                mother: 'awd'
              }
            ]
          },
          {name:'B', online:true, parrent:[
              {
                father: 'awdw',
                mother: 'awdxxx'
              }
            ]
          },
          {name:'C', online:false, parrent:[
              {
                father: 'bbbbbb',
                mother: 'cccc'
              }
            ]
          },
        ]
      }
    },
    methods:{
      deleteFriend(name){
        this.friends.filter(function(friend){
          if (friend.name == name) {
            return friend.online = !friend.online;
          }
        });
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
