import { ref, toDisplayString } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://localhost/api";

export default function useUsers() {
  const users = ref([]);
  const user = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getUsers = async () => {
    const response = await axios.get("/users");
    users.value = response.data.data;
  };

  getUsers();
  const getUser = async (id) => {
    const response = await axios.get("users/" + id);
    user.value = response.data.data;
  };

  // const storeUser = async (data) => {
    
  //   try {
  //     const sk =   data.skills.toString();
  //     data.skills = sk;
  //     // console.log(data);     
  //     await axios.post("/users", data);
  //     await router.push({ name: "UserIndex" });
   
  //   } catch (error) {
  //     if (error.response.status === 422) {
  //       errors.value = error.response.data.errors;
  //     }
      
  //   }
  // };

  const updateUser = async (id) => {
    try {
      await axios.put("users/" + id, user.value);
      await router.push({ name: "UserIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroyUser = async (id) => {
    if (!window.confirm("Are You Sure?")) {
      return;
    }
    await axios.delete("/users/" + id);
    await getUsers();
  };

  return {
    user,
    users,
    getUser,
   // getUsers,
   // storeUser,
    updateUser,
    destroyUser,
    errors,
  };
}
