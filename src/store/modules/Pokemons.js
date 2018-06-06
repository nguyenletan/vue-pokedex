// initial state
// shape: [{ id, quantity }]
import { pokeClasses } from '../../PokeClasses'
import Pokemon from '../../Pokemon'

const state = {
  added: [],
  selectedId: 0,
  selectedPokemon: {
    id: '',
    name: '',
    sprite: '',
    type: ''
  },
  pokemons: pokeClasses.map(pokeClass => {
    console.log(pokeClass)
    return {
      id: pokeClass.id,
      pokeClass: pokeClass
    }
  })
}

// getters
const getters = {
  // allPokemons: state => state.all
  // pokemons: state => state.pokemons
}

// actions
const actions = {
  getAllProducts ({commit}) {
    pokeClasses.map(pokeClass => {
      commit('setPokemons', pokeClass)
    })
  }

}

// mutations
const mutations = {
  selectedPokemon (state, id) {
    console.log(id)
    state.selectedId = id
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        state.selectedPokemon = new Pokemon(data)
      })
      .catch(err => console.log(err))
  },
  setPokemons (state, pokeClass) {
    state.all = pokeClass
  },
  getPokemons (state, pokClass) {
    state.pokemons = pokeClasses.map(pokeClass => {
      return {
        id: pokeClass.id,
        pokeClass: pokeClass
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
