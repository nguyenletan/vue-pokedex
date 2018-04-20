<template>
  <div id="app">
    <PokeList :handle-on-click="handleOnClick"></PokeList>
    <DetailView :pokemon="pokemon"></DetailView>
  </div>
</template>

<script>
import PokeList from './components/PokeList.vue'
import DetailView from './components/DetailView'
import Pokemon from './Pokemon'

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
  },
  methods: {
    handleOnClick: function (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
          this.pokemon = new Pokemon(data)
        })
        .catch(err => console.log(err))
    }
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
