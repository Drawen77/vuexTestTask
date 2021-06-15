<template>
  <div id="App">
    <v-records-form/>
    <v-records-list/>
  </div>
</template>

<script>
import VRecordsForm from './components/v-records-form.vue';
import VRecordsList from './components/v-records-list.vue';


export default {
  name: "App",
  components: {
    VRecordsForm,
    VRecordsList
  },
  async mounted() {
    this.$store.dispatch("search")
  } 
};
</script>

<style>

</style>
