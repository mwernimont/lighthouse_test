<template>
  <div id="visualization">
    <h1>{{ title }}</h1>

  </div>
</template>

<script>
    export default {
        name: 'Visualization',
        props: {
            title: {
                type: String,
                default: 'Add titles in App.vue'
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
