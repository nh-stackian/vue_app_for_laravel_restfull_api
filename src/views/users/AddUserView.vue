<script setup>
import { useRouter } from "vue-router";
import { reactive, ref } from 'vue';
import axios from "axios";
//import useUsers from '../../composables/users';
const router = useRouter();
//const { storeUser, errors } = useUsers();
const errors = ref({});
const form = reactive({
            name: '',
            email: '',
            image: '',
            gender: '',
            skills: [],             
        })
// const img = ref('');


    function onFileChange(ev) {
       form.image = ev.target.files[0];
      
      // form.image = files; 
      }
      const submit = async () => {
      if (!form.image) {
        alert('please fill the filed');
      } else {
        const formdata = new FormData();
        formdata.append('name', form.name);
        formdata.append('email', form.email);
        formdata.append('image', form.image);
        formdata.append('gender', form.gender);
        formdata.append('skills', form.skills);

        console.log(formdata);

        await axios.post(
          'http://localhost/api/users',
          formdata
        ).then(() => {
          router.push({
            name: 'users',
          });
        })
        .catch((error) => {
          console.log(error);
        });
      }
    };
     




  
</script>

<template>
    
    
    <form class="mt-10" @submit.prevent="submit" >
            <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
                {{errors}}
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 mb-6 w-full group">
                    <input v-model="form.name" type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="">
                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input v-model="form.email" type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="">
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
            </div>

         

            <div class="grid md:grid-cols-2 md:gap-6">

                
            <fieldset>
                <legend class="sr-only">Gender</legend>
                <label for="Gender-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Gender</label>
                <div class="grid md:grid-cols-2 md:gap-6">
                <div class="flex items-center mb-4">
                  <input v-model="form.gender" id="Male" type="radio" name="Male" value="Male" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" >
                  <label for="Male" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Male
                  </label>
                </div>
              
                <div class="flex items-center mb-4">
                  <input v-model="form.gender" id="Female" type="radio" name="Female" value="Female" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
                  <label for="Female" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Female
                  </label>
                </div>
               
                </div>
                </fieldset>
                <fieldset>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Upload file</label>
                    <input v-on:change="onFileChange" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="image" type="file">

                </fieldset>
                
            </div>

          
            <fieldset>
                <legend class="sr-only">skills</legend>
                <label for="skills" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">skills</label>
                <div class="flex items-center mb-4">
                    <input v-model="form.skills"  id="Laravel" type="checkbox" value="Laravel" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="Laravel" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
                </div>
            
                <div class="flex items-center mb-4">
                    <input v-model="form.skills" id="Codeigniter" type="checkbox" value="Codeigniter" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="Codeigniter" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Codeigniter</label>
                </div>
            
                <div class="flex items-center mb-4">
                    <input v-model="form.skills" id="Ajax" type="checkbox" value="Ajax" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="Ajax" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ajax</label>
                </div>

                <div class="flex items-center mb-4">
                    <input v-model="form.skills" id="VUE JS" type="checkbox" value="VUE JS" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="VUE JS" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">VUE JS</label>
                </div>

                <div class="flex items-center mb-4">
                    <input v-model="form.skills" id="MySQL" type="checkbox" value="MySQL" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="MySQL" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">MySQL</label>
                </div>

                <div class="flex items-center mb-4">
                    <input v-model="form.skills" id="API" type="checkbox" value="API" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="API" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">API</label>
                </div>

            
            </fieldset>
              
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    </form>
   
      

</template>