import { createWebHistory, createRouter } from 'vue-router'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import Dashboard from '../pages/Dashboard/Dashboard.vue'
import Students from '../pages/Dashboard/Students.vue'
import AddStudent from '../pages/Dashboard/AddStudent.vue'
import Index from '../pages/Dashboard/Index.vue'
import Assessments from '../pages/Dashboard/Assessments.vue'
import ManageAssessment from '../pages/Dashboard/ManageAssessmentPage.vue'
// import Register from '@/pages/Register/Register.vue'

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Index,
		children: [
      {
        path: '',
        component: Dashboard,
      },
      {
        path: 'students',
        component: Students,
      },
      {
        path: 'add-student',
        component: AddStudent,
      },
			{
				path: 'assessments',
        component: Assessments,
      },
			{
				path: 'manage-assessment',
				component: ManageAssessment,
			},
    ],
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
})
export default router