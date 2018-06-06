<template>
  <div id="app">
    <PokeList></PokeList>
    <DetailView :pokemon="pokemon"></DetailView>
  </div>
</template>

<script>
import PokeList from './components/PokeList.vue'
import DetailView from './components/DetailView'

export default {
  name: 'app',
  data: function () {
    return {
      pokemon: []
    }
  },
  components: {
    PokeList,
    DetailView
  }
}
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 980px;
    height: 92vh;
    padding: 15px;
    margin: 4vh auto;
    background-color: #42b983;
    border-radius: 5px;
    box-shadow: 0 14px 45px rgba(0, 0, 0, 0.22), 0 18px 45px rgba(0, 0, 0, 0.22);
  }
</style>
