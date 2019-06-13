<template>
  <ion-page>
    <ion-header class="toolbar-md-primary">
      <ion-toolbar>
        <ion-title>Daily commitment</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content class="content">
      <ion-item>
        <ion-input :value="name" ref="newTodoItem" @input="updateTodoName" placeholder="How much time willing to spend a day for this goal"></ion-input>
      </ion-item>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="checkmark"></ion-icon>
      </ion-fab-button>
      <ion-fab-button class="todo-fab-left" @click="close">
        <ion-icon name="close"></ion-icon>
      </ion-fab-button>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      name: ''
    }
  },
  methods:{
    addTodo(){
      this.$router.push({path: '/project/startDate'})
      // const newTodo = {name: this.name}
      // axios.post('http//localhost:3001/todos' , newTodo)
      // .then(res => {
      //   console.log('I have been pressed and working')
      //   this.$router.push({path: '/todos'})
      // })
    },
    updateTodoName(){
      this.name = this.$refs.newTodoItem.value
    },
     close(){
      this.$router.push({path: '/projects'})
    },
  }
}
</script>
