<template>
  <div class="container">
    <AddTodo />
    <Todos />
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import Todos from '@/components/Todos.vue';
  import AddTodo from '@/components/AddTodo.vue';
  @Options({
    components: {
      Todos,
      AddTodo,
    },
  })
  export default class Home extends Vue {}
</script>
