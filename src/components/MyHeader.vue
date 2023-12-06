<template>
  <div>
      <h1>{{ CompanyTitle }}</h1>
      <br>
      <h4>{{ Manager }}</h4>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  props: {
      CompanyTitle: String,
      Manager: String
  }
}
</script>
<style scoped>
div {
  text-align: center;
}
</style>