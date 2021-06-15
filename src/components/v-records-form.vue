<template>
    <form @submit.prevent="submit">
    <input type="text" id="inputType" name="forms" placeholder="Type" v-model="inputType">
    <input type="text" id="inputId" name="forms" placeholder="Id" v-model="inputId" >
    <input type="number" id="inputCount" name="forms" placeholder="Count" v-model="inputCount" >
    <button type="submit">Button</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            inputCount: this.$store.state.inputCount
        }
    }
}
</script>

<style scoped>
    form {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 100px auto;
  }
</style>