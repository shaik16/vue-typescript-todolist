<template>
  <h1>Todos</h1>
  <div class="todos">
    <div class="todo" v-for="allTodo in allTodos" :key="allTodo.id">
      {{ allTodo.title }}
      <i @click="deleteTodo(allTodo.id)" class="fas fa-trash-alt"></i>
    </div>
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import { mapGetters, mapActions } from 'vuex';

  @Options({
    computed: mapGetters(['allTodos']),
    methods: mapActions(['fetchTodos', 'deleteTodo']),
    created() {
      this.fetchTodos();
    },
  })
  export default class Todos extends Vue {}
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
</style>
