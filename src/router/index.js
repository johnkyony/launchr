import Vue from 'vue'
import VueRouter from 'vue-router'

// import TodoList from '../components/TodoList'
// import AddTodoItem from '../components/AddTodoItem'
import Projects from '../components/Projects'
import ProjectDetails from '../components/ProjectDetails'
import AddProjectName from '../components/AddProjectName'
import AddProjectStartDate from '../components/AddProjectStartDate'
import AddProjectDueDate from '../components/AddProjectDueDate'
import AddProjectHours from '../components/AddProjectHours'
import AddProjectDescription from '../components/AddProjectDescription'
import AddProjectWorkSessionStartTime from '../components/AddProjectWorkSessionStartTime'
import AddProjectWorkSessionEndTime from '../components/AddProjectWorkSessionEndTime'
import ProjectWorkSessionCountDownTimer from '../components/ProjectWorkSessionCountDownTimer'
Vue.use(VueRouter)

const routes = [
  {path: '' , redirect: '/projects'},
  {path: '/projects' , component: Projects},
  {path: '/project/add' , component: AddProjectName},
  {path: '/project/startDate' , component: AddProjectStartDate },
  {path: '/project/dueDate' , component: AddProjectDueDate },
  {path: '/project/dedicatedHours' , component: AddProjectHours },
  {path: '/project/:id/details' , component: ProjectDetails},
  {path: '/project/projectDescription' , component: AddProjectDescription},
  {path: '/project/:id/sessionStartTime' , component: AddProjectWorkSessionStartTime},
  {path: '/project/:id/sessionEndTime' , component: AddProjectWorkSessionEndTime},
  {path: '/project/:id/countDownTimer' , component: ProjectWorkSessionCountDownTimer}
]

export default new VueRouter({routes})