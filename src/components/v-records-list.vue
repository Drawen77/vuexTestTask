<template>
    <ul>
        <li v-for="(dataItem, index) in ourData" :key="index" >
            <b>id:</b> {{ dataItem.id }} <br/> <b>title:</b> {{ dataItem.title }}<br/> <b>body:</b> {{ dataItem.body }} <br/>{{ dataItem.url }}
        </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {}
  },
  computed: mapGetters(["ourData"])
  
}
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    }

  li {
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style-type: none;
  padding: 5px;
  max-width: 250px;
    }
</style>