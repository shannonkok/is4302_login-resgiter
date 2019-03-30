<template>
  <div>
    <div class="login-for-beneficiaries">
      <h3>Sign in for Beneficiaries</h3>
      <input type="text" v-model= "account.beneficiary_ID" placeholder="ID">
      <br>
      <input type="password" v-model= "account.beneficiary_password" placeholder="password">
      <br>
      <a> {{beneficiary_login_response}}</a>
      <br>
      <button @click="login">Log In</button>
    </div>
    <br>

    <div class="login-for-donors">
      <h3>Sign in for Donors</h3>
      <input type="text" v-model= "donor_ID" placeholder="ID">
      <br>
      <input type="password" v-model= "donor_password" placeholder="password">
      <br>
      <button @click="login">Log In</button>
    </div>
    <br>

    <div class="login-for-charity">
      <h3>Sign in for Charity</h3>
      <input type="text" v-model="charityOrg_ID" placeholder="ID">
      <br>
      <input type="password" v-model="charityOrg_password" placeholder="password">
      <br>
      <button @click="login">Log In</button>
      <p>
        You don't have an account ? You can
        <router-link to="Signup">create one</router-link>
      </p>
    </div>
  </div>
</template>

<script>
console.log('Login.vue-Is this working');
export default {
  name: "Login",
  data() {
    return {
      account:{

      },
      //beneficiary_ID: '',
      //beneficiary_password: '',
      donor_ID: '',
      donor_password: '',
      charityOrg_ID: '',
      charityOrg_password: '',
      beneficiary_login_response: '',
    };
  },
  methods: {
    loginB: function() {
      //console.log("pushed")
      this.$router.push({ name: "Beneficiary" });
    },
    loginD: function() {
      this.$router.replace("Donor");
    },
    loginC: function() {
      this.$router.replace("Charity");
    },
    login(){
        let uri = 'http://localhost:3000/';
        this.axios.post(uri, this.account).then((response) => {
          console.log("login vue")
          console.log(response.data);
          if (response["data"] == "Wrong memberID" || response["data"] == "Wrong Password"){
            //this.account = null;
            this.beneficiary_login_response = 'Wrong memberID/Password'
            this.$router.push({name: 'Login'})
            
          }else{
            this.account = response.data;
            this.$router.push({name: 'Beneficiary'})
          }
        })
    }
  }
};
</script>

<style scoped>
.login {
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