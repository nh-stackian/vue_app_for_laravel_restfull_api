<!-- <script setup>

import UsersView from './UsersView.vue';
import { reactive } from 'vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import useUsers from '../../composables/users';

const { storeUser, errors } = useUsers();

// const form = reactive({
//     name:'',
//     email:'',
//     photo:'',
//     gender:'',
//     skill:'',
// })

const form = ref({
    name: '',
    email: '',
    photo: '',
    gender: '',
    skills: [],

 })

 




const getPhoto = () => {
    let photo = "/upload/image.png"
    if(form.value.photo.indexOf('base64') != -1){
        photo = form.value.photo
    }else{
        photo = '/upload/'+form.value.photo
    }
}

const updatePhoto = (e) => {

    let file = e.target.files[0]; 
    let reader = new FileReader();
    let limit = 1024 * 1024 * 2;
    if(file['size'] > limit){
        return false
    }

 
reader.oneloadend =(file) => {
    form.value.photo = reader.result;
    }
    reader.readAsdataURL(file);    
}


console.log(form)


</script>


<template>

   
    <div>

        <div class=" pt-6  bg-white   ">

            <form  action="#" method="POST" >
        
                <div class="mx-auto max-w-2xl  py-3 bg-gray-50 border-0 shadow-md sm:rounded-3xl">
                
                
            
                <div class=" sm:p-6">
                    <div class="space-x-2 flex flex-row">
                    <div class=" sm:col-span-3">
                        <label for="first-name" class="text-base font-medium text-gray-900">Name</label>
                        <input
                            v-model="form.name"
                            type="text"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        
                            id="exampleFormControlInput1"
                            placeholder="Ex-Abdul Karim"
                            />
                       
                        </div>

                    <div class="sm:col-span-4">
                        <label for="email-address" class="text-base font-medium text-gray-900">Email</label>

                        <input
                        v-model="form.email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />

                    </div>               
                    </div>
                
                </div>
                
            

                <div class="grid grid-cols-3 gap-3 px-6">




                    <div>

                        <fieldset>
                            <legend class="contents text-base font-medium text-gray-900">Gender</legend>
                            <div class="mt-2 space-x-4  flex flex-row">
                                <div class="flex items-center">
                                    <input v-model="form.gender" id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Male</label>
                                </div>

                                <div class="flex items-center">
                                    <input v-model="form.gender" id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Female</label>
                                </div>
                            </div>
                        </fieldset>

                    </div>
                     

                    <div class="">
                        <label class="text-base font-medium text-gray-900">Upload Image</label>
                        <div class="flex items-center">
                            <span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            </span>
                           
                         
                            <button  type="file" @change="updatePhoto"  class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">change</button>
                        </div>
                    </div>
                    
                 

                       <div>
                            <label class="text-base font-medium text-gray-900">Cover photo</label>
                            <div class=" flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 ">
                            <div class="text-center">
                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="flex text-sm text-gray-600">
                                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" :src="getPhoto()" type="file" class="sr-only" />
                                </label>
                                
                                </div>
                                
                            </div>
                            </div>
                      </div>






                    

                </div>


             

                
                    <div class="space-y-3  px-4 py-5 sm:p-6">
            
                      

                        <fieldset>
                        <legend class="sr-only">Skills</legend>
                            <div class="text-base font-medium text-gray-900" aria-hidden="true">Skills</div>
                            <div class="mt-2 grid grid-cols-3 gap-3">
                                <div class="flex items-start">
                                    <div class="flex h-5 items-center">
                                        <input v-model="form.skills" id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="comments" class="font-medium text-gray-700">Laravel</label> 
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex h-5 items-center">
                                        <input v-model="form.skills" id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="candidates" class="font-medium text-gray-700">Ajax</label>
                                    
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex h-5 items-center">
                                        <input v-model="form.skills" id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="offers" class="font-medium text-gray-700">MySQL</label>
                                        
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="flex h-5 items-center">
                                        <input v-model="form.skills" id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="offers" class="font-medium text-gray-700">Codeigniter</label>
                                        
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="flex h-5 items-center">
                                        <input v-model="form.skills" id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="offers" class="font-medium text-gray-700">VUE JS</label>
                                        
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="flex h-5 items-center">
                                        <input v-model="form.skills" id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="offers" class="font-medium text-gray-700">API</label>
                                        
                                    </div>
                                </div>

                            </div>
                        </fieldset>

                    </div>
                
                



                <div class=" px-4 py-3 text-center sm:px-6">
                    <button @click="storeUser(form)" type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-24 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
                </div>
                </div>
                <div v-if="errors.name">
                    <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
                  </div>

            </form>
            

        </div>
      


    </div>
</template> -->