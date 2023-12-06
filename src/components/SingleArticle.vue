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
   
        Article : Object
           }
}
</script>

<style scoped>
h2 {
    margin: 5px;
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
    font-size: 14px;
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

</style>