<template>
  <div id="allfriends">
    <h2>All friends</h2>
    <section v-for="(friend,index) in friends" :key="index">
      <h2> {{ friend.name }} </h2>
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
  data() {
    return {
      // friends:[
      //   {name:'A', online:true, parrent:[
      //     {
      //       father: 'arifin',
      //       mother: 'awd'
      //     }
      //   ]},
      //   {name:'B', online:true, parrent:[
      //     {
      //       father: 'awdw',
      //       mother: 'awdxxx'
      //     }
      //   ]},
      //   {name:'C', online:true, parrent:[
      //     {
      //       father: 'bbbbbb',
      //       mother: 'cccc'
      //     }
      //   ]},
      // ]
    }
  },
  // mounted() {
  //   console.log(this.friends[0].parrent[0].father);
  // },
}
</script>

<style>

</style>