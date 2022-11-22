import { defineStore } from 'pinia'
import {computed, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
// @ts-ignore
import Cookies from 'js-cookie'


const router = useRouter();

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

export const systemParams = defineStore('sys_param', ()=>{
    const centers = ref([])

    const get_centers = async () => {
        return axios.get(import.meta.env.VITE_BACKEND_HOST+'/api/center/list').then(response=>{
            // @ts-ignore
            Array.prototype.splice.apply(centers.value, [0, response.data.length].concat(response.data))

        }).catch(error=>{
            return error
        })
    }

    return {centers, get_centers}
})