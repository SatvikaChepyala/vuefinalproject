<template>

  <!--Step 3 use the component-->
  <div>
   <MyHeader CompanyTitle="Article Dictionary" Manager="Satvika Chepyala" />
   <Articlebox :Article=Article />
  </div>
</template>

<script>
// Step: 1 Import the components
import MyHeader from './components/MyHeader.vue';
import Articlebox from './components/Articlebox.vue';

export default {
  name: 'App',

  
  // Step 2: Register the components
  components: {
    MyHeader,
    Articlebox

   
  },
  data(){
    return {
      Article: []
    }
  },
  methods:{
    //promises
    async fetchArticle(){
      const res = await fetch("https://satvikafinal.onrender.com/api");
      const data = await res.json();
      console.log(data);
      return data;
    }
  },
  async created(){
    this.Article = await this.fetchArticle();
  }

}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color:lightgrey;
}

.container {
  max-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 0.3em solid black;
  padding: 30px;
  border-radius: 5px;
}

div{
  margin-bottom: 0.5em;

}



</style>

