import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login.vue";
import Charity from "@/components/Charity.vue";
import Beneficiary from "@/components/Beneficiary.vue";
import Donor from "@/components/Donor.vue";
import Register from "@/components/Signup.vue"
Vue.use(Router);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

console.log('Is this working');

export default new Router({
  routes: [
    // below s the component added for the Home path
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/charity",
      name: "Charity",
      component: Charity
    },
    {
      path: "/beneficiary",
      name: "Beneficiary",
      component: Beneficiary
    },
    {
      path: "/donor",
      name: "Donor",
      component: Donor
    },
    {
      path: "/register",
      name: "Register",
      component: Register 
    }
  ]
});
