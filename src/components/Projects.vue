<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Projects</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content">
      <ion-list>
        <ion-item v-for="todo in todos" :key="todo.id">
            <ion-label>{{todo.name}}</ion-label>
        </ion-item>
      </ion-list>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-content>
  </ion-page>
</template>



<script>
import axios from 'axios';
export default {
  data(){
    return {
      todos: []
    }
  },
  methods: {
    addTodo(){
      this.$router.push({path: '/project/add'})
    }
  },
  created(){
    axios.get('http://localhost:3001/todos')
    .then(res => this.todos = res.data)
  }
  
}
</script>
<style>
.todo-fab{
  position: fixed;
  bottom: 25px;
  right: 15px;
  font-size: 30px;
}

.todo-fab-left{
  position: fixed;
  bottom: 25px;
  left: 15px;
  font-size: 30px;
}

.content{
  padding: 10px 10px 10px 0px
}
</style>

