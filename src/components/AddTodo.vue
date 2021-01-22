<template>
  <div>
    <h1 style="text-align:center">Todo List</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="title" placeholder="Add to do" />
      <button type="submit">{{ getButtonStatus }}</button>
    </form>
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import { mapGetters, mapActions } from 'vuex';

  @Options({
    computed: mapGetters(['getButtonStatus']),
    methods: {
      ...mapActions(['addTodo']),
      onSubmit() {
        this.addTodo(this.title);
      },
    },
  })
  export default class AddTodo extends Vue {
    title = '';
  }
</script>

<style scoped>
  form {
    display: flex;
    margin-bottom: 1rem;
  }

  input[type='text'] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
    border-radius: 5px;
  }

  button {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 10px;
  }
</style>
