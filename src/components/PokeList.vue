<template>
  <section class="poke-list">
    <PokeCell v-for="cell in cells" :key="cell.id" :id="cell.id" :poke-class="cell.pokeClass" :handle-on-click="handleOnClick" >
      {{ cell.id }}</PokeCell>
  </section>
</template>

<script>
import store from '../store'
import PokeCell from './PokeCell'

export default {
  name: 'PokeList',

  computed: {
    cells () {
      console.log(store.state.Pokemons.pokemons)
      return store.state.Pokemons.pokemons
    }
  },
  props: {
    handleOnClick: {
    }
  },
  created: function () {
    store.commit('getPokemons')
  },
  components: {
    PokeCell
  }

}
</script>

<style>
  .poke-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 10px;
    margin-right: 15px;
    background-color: #42b983;
    // box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
    overflow: auto;
    border-radius: 5px;
  }
</style>
