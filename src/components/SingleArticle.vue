<template>
    <div :class="Single-Article">
        <h2>{{ Article.users}}</h2>
        <p  class="Article-info"> Number: {{ Article._id}}</p>
        <p  class="Article-info"> Name: {{ Article.Name }}</p>
        <p  class="Article-info"> Description: {{ Article.Description }}</p>
        <p  class="Article-info"> size: {{ Article.Size }}</p>
        <p  class="Article-info"> units: {{ Article.Units }}</p>
        <p class="Article-info"> values: {{Article.Values }}</p>
        <p class="Article-info"> MRP: {{ Article.MRP }}</p>
        <p class="Article-info"> ExpiryDate: {{ Article.ExpiryDate }}</p>
        <a :href="Article.reference_url" target="_blank" class="Article-link">Reference</a>

    </div>
</template>

<script>
export default {
    name: 'SingleArticle',
    props: {
<<<<<<< HEAD
   
        Article : Object
           }
=======
    //     Article :{
    //         type: Array,
             
    //   required: true,
    //     }
        Article : Array
    }
>>>>>>> af85d49e58efff452993c476d664324847973e88
}
</script>

<style scoped>
h2 {
<<<<<<< HEAD
    margin: 5px;
=======
    margin: 2px;
>>>>>>> af85d49e58efff452993c476d664324847973e88
}

.Single-Article {
    background-color: #9effae;
    color: black;
    padding: 1em;
    text-align: center;
    width: 300px;
    margin: 10px;
}

.Article-info {
    margin: 5px 0;
<<<<<<< HEAD
    font-size: 14px;
=======
>>>>>>> af85d49e58efff452993c476d664324847973e88
}

.Article-link {
    display: block;
    margin-top: 10px;
    color: #0057ff;
    text-decoration: none;
}

.Article-link:hover {
    text-decoration: underline;
}
<<<<<<< HEAD

=======
>>>>>>> af85d49e58efff452993c476d664324847973e88
</style>