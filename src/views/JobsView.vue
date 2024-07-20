<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.id }}</h2>

  </div>
</template>

<script>
export default {
    data(){
        return {
            jobs: [
                {id: 1, title: 'Job 1', description: 'This is job 1'},
                {id: 2, title: 'Job 2', description: 'This is job 2'},
                {id: 3, title: 'Job 3', description: 'This is job 3'},
                {id: 4, title: 'Job 4', description: 'This is job 4'},
                {id: 5, title: 'Job 5', description: 'This is job 5'},
            ]
        }
    }

}
</script>

<style>

</style>