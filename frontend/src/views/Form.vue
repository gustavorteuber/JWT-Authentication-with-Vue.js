<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-br from-cyan-200 to-cyan-400"
  >
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md">
      <label class="block text-gray-700 font-bold mb-2" for="id">ID:</label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        id="id"
        type="text"
        v-model="id"
        placeholder="Digite o ID..."
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        @click="buscar"
      >
        Buscar
      </button>
      <div v-if="resultado">
        <h2 class="text-xl font-bold mt-8">Resultado:</h2>
        <pre class="bg-gray-100 rounded-lg p-4 mt-4">{{ resultado }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      id: "",
      resultado: null,
    };
  },
  methods: {
    buscar() {
      axios
        .get(`http://localhost:3000/api/tbl/${this.id}`)
        .then((response) => {
          this.resultado = response.data;
        })
        .catch((error) => {
          console.error("Erro ao buscar dados: ", error);
        });
    },
  },
};
</script>
