<template>
  <div id="onlinefriends">
    <h2> Online Friends </h2>
    <section v-for="(friend,index) in validationOnline()" :key="index">
      <h2> {{ friend.name }} </h2>
      <h5> {{ friend.parrent[0].father }} </h5>
    </section>
  </div>  
</template>

<script>
export default {
  name:'AllFriends',
  props: ['friends'],
  methods: {
    validationOnline(){
      let data = []
      this.friends.forEach(element => {
        if (element.online == true) {
          data.push(element);
        }
      });
      return data;
    }
  },
}
</script>

<style>

</style>