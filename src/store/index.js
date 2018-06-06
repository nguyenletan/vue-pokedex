import Vue from 'vue'
import Vuex from 'vuex'
import PokemonsModule from './modules/Pokemons'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {Pokemons: PokemonsModule}
})
