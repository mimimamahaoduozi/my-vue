<template>
  <div>
    <button v-on:click="$emit('add')">+</button>
  </div>
</template>

<script>
export default {
  name: 'Case1'
}
</script>

<style scoped>
button{
  padding: 10px 20px;
  font-size: 20px;
}
</style>
