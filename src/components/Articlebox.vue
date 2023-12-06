<template>
    <div class="Article-box">
        <div v-for="Article of Article.users" :key="Article._id" class="Article-item" >
            <SingleArticle :Article=Article />
        </div>
    </div>
</template>


<script>
import SingleArticle from './SingleArticle.vue';


export default {
    name: 'Article-box',
    props: {
    Article: Array
    },
    components: {
    
    SingleArticle
}

}
</script>
<style scoped>

.Article-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.Article-item {
    margin: 10px;
    border: 5px solid;
    background-color:slategray;
}
</style>

