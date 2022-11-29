import { defineStore } from 'pinia'
import {computed, reactive, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
// @ts-ignore
import Cookies from 'js-cookie'

export const userStore = defineStore('auth', () => {
    const signed_up = ref(0)
    const user_data = ref({})
    const logged_in = ref(false)

    const router = useRouter()
    const register = (event: any) => {
        event.preventDefault();

        if(event.target.password.value !== event.target.confirm_password.value){
            alert("Password do not match")
            return
        }
        const data = {
            username: event.target.username.value,
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            middle_name: event.target.middle_name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            birth_date: event.target.birth_date.value,
            birth_place: event.target.birth_place.value,
            address: event.target.address.value,
            gender: event.target.gender.value,
            development_center: event.target.cdc.value,
        }

        axios.post(import.meta.env.VITE_BACKEND_HOST+'/api/teacher/register', data).then(async function (response) {
            alert("Account Created")
            await router.replace({name: "Login"})
            return
        }).catch(function (error) {
            alert("Something went wrong")
            console.error(error);
        });

    }

    const login = (event: any) =>{
        event.preventDefault()

        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        axios.post(import.meta.env.VITE_BACKEND_HOST+'/api/token/', data).then(async function (response) {
            Cookies.set('token', response.data)
            logged_in.value = true
            await router.push({path: "/dashboard"})
            return
        }).catch(function (error) {
            alert("Something went wrong")
            console.error(error);
        });

        console.log(data)
    }
    return {signed_up, user_data, register, login }
})
export const assessmentStore = defineStore('assessment_store', () =>{
        const assessments = reactive([])
        const router = useRouter()
        const addAssessment = (event: Event, form: HTMLFormElement) => {
            event.preventDefault()

            const data = new FormData(form)

            return axios.post(import.meta.env.VITE_BACKEND_HOST+'/api/assessment/add', data).then(async response=>{
                alert("Assessment Added")
                // @ts-ignore
                assessments.push(response.data)
                await router.push({'name': 'ManageAssessment', query: {assessment_id: response.data.id, assessment_name: response.data.title}})
            }).catch(error=>{
                alert("Something went wrong")
                console.log(error)
            })
        }

        const getAssessments = () => {
            return axios.get(import.meta.env.VITE_BACKEND_HOST+'/api/assessment/list').then(response=>{
                // @ts-ignore
                Array.prototype.splice.apply(assessments, [0, response.data.length].concat(response.data))
                console.log(assessments)
            }).catch(error=>{
                return error
            })
        }

        const saveAssessment = (data: Array<{
            id: null;
            title: string,instructions: string,materials: string,procedures: string,objectives: Array<{name: string}>}>, id: any) => {
            data = data.filter(function( obj ) {
                return obj.id == null;
            });
            return axios.post(import.meta.env.VITE_BACKEND_HOST+'/api/activity/add', {activities: data, assessment: id}).then(async response=>{
                alert("Assessment Updated")
                console.log(response)
                await router.push({'name': 'AssessmentDashboard'})
            }).catch(error=>{
                alert("Something went wrong")
                console.log(error)
            })
        }


        const getActivities = async  (id: any) =>{
            return await axios.get(import.meta.env.VITE_BACKEND_HOST+`/api/activity/list?assessment_id=${id}`).then(response=>{

                return response.data
            }).catch(error=>{
                console.error(error)
                return []
            })
        }

        const deleteActivity = async (id: any) =>{
            return await axios.delete(import.meta.env.VITE_BACKEND_HOST+`/api/activity/${id}/delete`).then(response=>{
                return id
            }).catch(error=>{
                alert("Something went wrong")
                console.error(error)
                return error
            })
        }

        const deleteAssessment = async (id: any) =>{
            return await axios.delete(import.meta.env.VITE_BACKEND_HOST+`/api/assessment/${id}/delete`).then(response=>{
                let index = assessments.findIndex((element: any) => element.id === id)

                if (index >= 0){
                    assessments.splice(index, 1)
                }

                alert("Assessment Deleted")

            }).catch(error=>{
                alert("Something went wrong")
                console.error(error)
                return error
            })
        }

        const retrieveAssessment = async (id: any) => {
            return await axios.get(import.meta.env.VITE_BACKEND_HOST+`/api/assessment/${id}/get`).then(response=>{
                return response.data
            }).catch(error=>{
                console.error(error)
                return []
            })
        }

        return {assessments, addAssessment, getAssessments, saveAssessment, getActivities, deleteActivity, deleteAssessment, retrieveAssessment}
    }
)
export const studentStore = defineStore('user_store', ()=>{
    const students = ref([])

    const enrollmentCode = ref('')
    const router = useRouter()
    const generateCode = () => {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < 7; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        enrollmentCode.value = result
    }

    const addStudent = async (event: Event, form:  HTMLFormElement, enrollment_code: string) => {
        event.preventDefault();
        const data = new FormData(form);

        data.append('enrollment_code', enrollment_code)

        return axios.post(import.meta.env.VITE_BACKEND_HOST+'/api/student/register', data).then(async response=>{
            alert("Student Added")
            console.log(response)
            await router.push({path: "/dashboard/students"})
        }).catch(error=>{
            alert("Something went wrong")
            console.log(error)
        })
    }

    const getStudents = async () =>{
        return axios.get(import.meta.env.VITE_BACKEND_HOST+'/api/student/list').then(response=>{
            // @ts-ignore
            Array.prototype.splice.apply(students.value, [0, response.data.length].concat(response.data))
            console.log(students)
        }).catch(error=>{
            return error
        })
    }

    return {enrollmentCode, generateCode, addStudent, getStudents, students}
})

export const systemParams = defineStore('sys_param', ()=>{
    const centers = ref([])
    const teachers = ref([])

    const get_centers = async () => {
        return axios.get(import.meta.env.VITE_BACKEND_HOST+'/api/center/list').then(response=>{
            // @ts-ignore
            Array.prototype.splice.apply(centers.value, [0, response.data.length].concat(response.data))

        }).catch(error=>{
            return error
        })
    }

    const get_teachers = async () =>{
        return axios.get(import.meta.env.VITE_BACKEND_HOST+'/api/teacher/list').then(response=>{
            // @ts-ignore
            Array.prototype.splice.apply(teachers.value, [0, response.data.length].concat(response.data))

        }).catch(error=>{
            return error
        })
    }

    return {centers, get_centers, teachers, get_teachers}
})