import { createWebHistory, createRouter } from 'vue-router'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import Dashboard from '../pages/Dashboard/Dashboard.vue'
import Students from '../pages/Dashboard/Students.vue'
import AddStudent from '../pages/Dashboard/AddStudent.vue'
import EditStudent from '../pages/Dashboard/EditStudent.vue'
import Index from '../pages/Dashboard/Index.vue'
import Assessments from '../pages/Dashboard/Assessments.vue'
import ManageAssessment from '../pages/Dashboard/ManageAssessmentPage.vue'
import StartAssessment from '../pages/Dashboard/StartAssessment.vue'
import ViewAssessmentPage from '../pages/Dashboard/ViewAssessmentPage.vue'
import LearningMaterials from '../pages/Dashboard/LearningMaterials.vue'
import InteractiveMaterials from '../pages/Dashboard/InteractiveMaterials.vue'
import AnimalSound from '../pages/Dashboard/Games/AnimalSound.vue'
import MazeGame from '../pages/Dashboard/Games/MazeGame.vue'
import TicTacToe from '../pages/Dashboard/Games/TicTacToe.vue'
import Alphabet from '../pages/Dashboard/Materials/Alphabet.vue'
import Colors from '../pages/Dashboard/Materials/Colors.vue'
import Numbers from '../pages/Dashboard/Materials/Numbers.vue'
import Shapes from '../pages/Dashboard/Materials/Shapes.vue'
import StudentLogin from '../pages/Student/Login.vue'
import StudentDashboard from '../pages/Student/Dashboard.vue'
import StudentDetails from '../pages/Student/Details.vue'
import StudentViewAssessment from '../pages/Student/ViewAssessment.vue'
import LandingPage from '../pages/LandingPage.vue'
// import Register from '@/pages/Register/Register.vue'

const routes = [
	{
		path: '/',
		name: 'LandingPage',
		component: LandingPage,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
	{
		path: '/student/login',
		name: 'StudentLogin',
		component: StudentLogin,
	},
	{
		path: '/student',
		name: 'StudentDashboard',
		component: StudentDashboard,
	},
	{
		path: '/student/details',
		name: 'StudentDetails',
		component: StudentDetails,
	},
	{
		path: '/student/view-assessment',
		name: 'StudentViewAssessment',
		component: StudentViewAssessment,
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
	    name: 'ManageStudentDashboard',
        component: Students,
      },
      {
        path: 'add-student',
        component: AddStudent,
      },
      {
        path: 'edit-student',
        component: EditStudent,
      },
      {
        path: 'add-student',
        component: AddStudent,
      },
			{
				path: 'assessments',
				name: "AssessmentDashboard",
        component: Assessments,
      },
			{
				path: 'manage-assessment',
				name: 'ManageAssessment',
				component: ManageAssessment,
			},
			{
				path: 'start-assessment',
				component: StartAssessment,
			},
			{
				path: 'view-assessment',
				component: ViewAssessmentPage,
			},
			{
				path: 'learning-materials',
				component: LearningMaterials,
			},
			{
				path: 'interactive-materials',
				component: InteractiveMaterials,
			},
			{
				path: 'games/animal-sound',
				component: AnimalSound,
			},
			{
				path: 'games/maze-game',
				component: MazeGame,
			},
			{
				path: 'games/tictactoe',
				component: TicTacToe,
			},
			{
				path: 'learning-materials/alphabet',
				component: Alphabet,
			},
			{
				path: 'learning-materials/colors',
				component: Colors,
			},
			{
				path: 'learning-materials/numbers',
				component: Numbers,
			},
			{
				path: 'learning-materials/shapes',
				component: Shapes,
			},
    ],
	},
	
]
const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
})
export default router