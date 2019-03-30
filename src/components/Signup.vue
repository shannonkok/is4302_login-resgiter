<template>
  <div class="sign-up">
      <p> Let's create a new account</p><br>
      <input type="text" v-model="new_account.memberID" placeholder="memberID"><br>
      <input type="password" v-model="new_account.password" placeholder="password"><br>
      <a> {{register_response}} </a>
      <br>
      <button @click="createUser"> Sign Up </button><br>
      <span>Or Return to <router-link to="/"> Login page</router-link></span>


  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      new_account:{},
      register_response: '',
    };
  },
  methods: {
    createUser(){
      console.log("Hello?")
      let uri = 'http://localhost:3000/register';
      console.log(uri);
      console.log(this.new_account.password);
      this.axios.post(uri, this.new_account).then((response) => {
        console.log("here?")
        if (response["data"] == "memberID has been taken"){
          this.register_response = 'memberID has been taken. Please select another'
          this.$router.push({name: 'Register'})
        }else{
          this.register_response = 'Account has been successfully created. Head over to the login page to log in'
        }
      })
    }
  }
};
</script>

<style scoped>
.sign-up {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>