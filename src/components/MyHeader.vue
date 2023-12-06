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
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 2px solid;
  background-color:  teal;
}
</style>