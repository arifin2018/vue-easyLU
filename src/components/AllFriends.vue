<template>
  <div id="allfriends">
    <h2>All friends</h2>
    <section v-for="(friend,index) in friends" :key="index">
      <h2 @click="unfriend(friend.name)"> {{ friend.name }} </h2>
      <h5> {{ friend.parrent[0].father }} </h5>
    </section>
  </div>  
</template>

<script>
export default {
  name:'AllFriends',
  props: {
    friends: {
      type: Array,
    }
  },
  methods:{
    unfriend(name){
      this.$emit('delete',name)
    }
  }
}
</script>

<style>

</style>