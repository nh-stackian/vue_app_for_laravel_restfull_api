<script setup>
//import useUsers from "../../composables/users";
import axios from "axios";
import { ref, onMounted } from "vue";
import { TailwindPagination } from "laravel-vue-pagination";
//const { users, getUsers, destroyUser } = useUsers();
axios.defaults.baseURL = "http://localhost/api";
const users = ref({});
const getUsers = async (page = 1) => {
  const response = await axios.get(`/users?page=${page}`);
  users.value = response.data;
};
getUsers();
// console.log(users);
//onMounted(() => getUsers());

// const laravelData = ref({});

// const getResults = async (page = 1) => {
//   const response = await fetch(`http://localhost/api/users`);
//   laravelData.value = await response.json();
// };

// getResults();

const destroyUser = async (id) => {
  if (!window.confirm("Are You Sure?")) {
    return;
  }
  await axios.delete("/users/" + id);
  await getUsers();
};
</script>

<template>
  <div class="">
    <!-- component -->

    <div class="text-gray-900">
      <!-- <div class="p-4 flex">
                <h1 class="text-3xl">
                    Users
                </h1>
            </div> -->
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-indigo-50 shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-1 px-5">Name</th>
              <th class="text-left p-1 px-5">Email</th>
              <th class="text-left p-1 px-5">Gender</th>
              <th class="text-left p-1 px-5">Skills</th>

              <th></th>
            </tr>
            <!-- <tr v-for="user in users.slice().reverse()" :key="user.id" class="border-b hover:bg-orange-100 bg-gray-100"> -->
            <tr
              v-for="user in users.data"
              :key="user.id"
              class="border-b hover:bg-orange-100 bg-gray-100"
            >
              <td class="text-left p-3 px-5">{{ user.name }}</td>
              <td class="text-left p-3 px-5">{{ user.email }}</td>
              <td class="text-left p-3 px-5">{{ user.gender }}</td>
              <td class="text-left p-3 px-5">{{ user.skills }}</td>

              <td class="p-3 px-5 flex justify-end">
                <button
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Edit</button
                ><button
                  @click="destroyUser(user.id)"
                  type="button"
                  class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- <TailwindPagination
      :data="laravelData"
      @pagination-change-page="getResults"
    /> -->

    <TailwindPagination :data="users" @pagination-change-page="getUsers" />
  </div>
</template>
