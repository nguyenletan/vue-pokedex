<template>
  <section class="poke-list">
    <PokeCell v-for="cell in cells" :key="cell.id" :id="cell.id" :poke-class="cell.pokeClass" :handle-on-click="handleOnClick" >
      {{ cell.id }}</PokeCell>
  </section>
</template>

<script>

import PokeCell from './PokeCell'
import { pokeClasses } from '../PokeClasses'

export default {
  name: 'PokeList',
  data: function () {
    return {
      cells: [{}]
    }
  },
  props: {
    handleOnClick: {
    }
  },
  created: function () {
    // `this` points to the vm instance
    this.cells = pokeClasses.map(pokeClass => {
      return {
        id: pokeClass.id,
        pokeClass: pokeClass
      }
    })
    // console.log(this.handleOnClick())
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
