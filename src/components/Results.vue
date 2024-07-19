<template>
    <div>
        <h2>Results</h2>
        <p>Reaction time: {{ score }} ms</p>
        <p class="rank">Rank: {{ rank }}</p>
    </div>
  
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
         rank: null   
        }
    },
    mounted() {
        if (this.score < 200) {
            this.rank = 'Ninja'
        } else if (this.score < 300) {
            this.rank = 'Pro'
        } else if (this.score < 400) {
            this.rank = 'Beginner'
        } else {
            this.rank = 'Snail'
        }       
}}

</script>

<style>
.rank {
    color: #0faf87;
    font-size: 2em;
}

</style>