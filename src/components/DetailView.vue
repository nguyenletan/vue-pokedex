<template>
  <section class="detail-view">
    <img class="sprite-image" :alt="pokemon.name" :src="pokemon.sprite"/>
    <div class="data-wrapper">
      <h3 class="data-name">ID: {{pokemon.id}} {{pokemon.name}}</h3>
      <p class="data-char">Type: {{pokemon.type}}</p>
    </div>
  </section>
</template>

<script>
import store from '../store'

export default {
  name: 'DetailView',
  data: function () {
    return {
    }
  },
  computed: {
    pokemon () {
      console.log(store)
      return store.state.Pokemons.selectedPokemon
    }
  },
  props: {

  }
}
</script>

<style>
  .detail-view {
    width: 50%;
    height: 100%;
    padding: 10px;
    background-color: #42b983;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sprite-image {
    width: auto;
    height: auto;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 5px;
    color: #000;
  }

  .data-wrapper {
    width: 80%;
    height: 110px;
    padding: 10px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.22);
    color: #000;
  }

  .data-name {
    margin: 0 0 5px;
  }

  .data-char {
    font-size: 10px;
  }
</style>
