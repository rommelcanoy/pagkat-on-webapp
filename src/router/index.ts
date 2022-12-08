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
import StudentLogin from '../pages/Student/Login.vue'
import StudentDashboard from '../pages/Student/Dashboard.vue'
import StudentDetails from '../pages/Student/Details.vue'
import AnimalSound from '../pages/Student/Games/AnimalSound.vue'
import MazeGame from '../pages/Student/Games/MazeGame.vue'
import TicTacToe from '../pages/Student/Games/TicTacToe.vue'
import Alphabet from '../pages/Student/Materials/Alphabet.vue'
import Colors from '../pages/Student/Materials/Colors.vue'
import Numbers from '../pages/Student/Materials/Numbers.vue'
import Shapes from '../pages/Student/Materials/Shapes.vue'
import FirstAssessment from '../pages/Student/Assessments/Asessment1.vue'
import StudentViewAssessment from '../pages/Student/ViewAssessment.vue'
import ViewLearningMaterials from '../pages/Student/ViewLearningMaterials.vue'
import InteractiveMaterials from '../pages/Student/InteractiveMaterials.vue'
import LandingPage from '../pages/LandingPage.vue'
import ViewStudentDetails from '../pages/Dashboard/ViewStudentDetails.vue'
import {studentDashboard} from "../store";
// import Register from '@/pages/Register/Register.vue'

const routes = [
	{
		path: '/',
		name: 'LandingPage',
		component: StudentLogin,
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
		path: '/student/learning-materials',
		name: 'ViewLearningMaterials',
		component: ViewLearningMaterials,
	},
	{
		path: '/student/interactive-materials',
		name: 'StudentInteractiveMaterials',
		component: InteractiveMaterials,
	},
	{
		path: '/student/games/animal-sound',
		component: AnimalSound,
	},
	{
		path: '/student/games/maze-game',
		component: MazeGame,
	},
	{
		path: '/student/games/tictactoe',
		component: TicTacToe,
	},
	{
		path: '/student/learning-materials/alphabet',
		component: Alphabet,
	},
	{
		path: '/student/learning-materials/colors',
		component: Colors,
	},
	{
		path: '/student/learning-materials/numbers',
		component: Numbers,
	},
	{
		path: '/student/learning-materials/shapes',
		component: Shapes,
	},
	{
		path: '/student/assessment/1',
		component: FirstAssessment,
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
				path: '/learning-materials',
				component: LearningMaterials,
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
				path: 'view-student-details',
				component: ViewStudentDetails,
			},
			{
				path: 'learning-materials',
				component: LearningMaterials,
			},

		],
	},

]
const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
})
export default router