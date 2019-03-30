<template>
  <div>
    <h2>Donor Page</h2>
    <div class="event">
    <h3><strong>Current Event</strong></h3>
    <img src="../assets/NKF.jpg" alt ="photo of NKF">
    <p class="para">Cillum proident ut mollit occaecat nostrud ad aliquip dolor. 
      Reprehenderit incididunt et excepteur ex esse fugiat adipisicing veniam eu ut aute fugiat est. Tempor et sint officia magna commodo dolore voluptate ex deserunt ad culpa. Elit fugiat occaecat consectetur tempor eiusmod occaecat occaecat officia ut. Reprehenderit dolore ullamco ad enim Lorem et id aliqua et aliquip nostrud. 
      Commodo enim veniam elit anim. Elit velit sint Lorem nisi cillum irure mollit aute eiusmod sit consectetur do. Ea id tempor velit sunt adipisicing enim eiusmod excepteur nisi cillum consectetur magna. Esse reprehenderit proident aute culpa eiusmod veniam id deserunt cupidatat anim mollit. Reprehenderit Lorem eu dolore Lorem et eu excepteur voluptate laborum enim cillum officia ea magna. Lorem consequat nisi amet eu sunt pariatur do elit anim duis deserunt reprehenderit elit.</p>
    <h4>Current Fundraising goal</h4>
    <b-progress :max="max" height="2rem" :striped="striped">
      <b-progress-bar :value="value" :striped="striped">
        Progress: <strong>{{ value.toFixed(3) }} / {{ max }}</strong>
      </b-progress-bar>
    </b-progress><br>
    </div>
    <h4>My Donataions</h4>
    <button @click="showDonation"> Show Donations </button><br>
    <table id="donationTable" class="myDonation">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in myDonation" :key="row.id">
          <td>{{row.date}}</td>
          <td>{{row.Amount}}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <h4>All Transactions</h4>
    <button @click="showTxn"> Show Transactions </button><br>
    <table id="allTxn" class="allTxn">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>From</th>
          <th>To</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in txn" :key="row.id">
          <td>{{row.date}}</td>
          <td>{{row.Amount}}</td>
          <td>{{row.From}}</td>
          <td>{{row.To}}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <div class="wrapper"><br>
      <button>Donate</button><br><br>
      <button @click="logout">Log Out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Donor", //this is the name of the component
  data() {
    return {
        max: 1000,
        value: 750,
      txn: [
        { date: "1/1/19", Amount: 100, From: "OCBC", To: "Shan" },
        { date: "1/2/19", Amount: 100, From: "OCBC", To: "Nic" }
      ],
      myDonation: [
        { date: "1/1/19", Amount: 100 },
        { date: "1/2/19", Amount: 100 }
      ]
    };
  },
  methods:{
    showDonation: function(){
      document.getElementById("donationTable").style.display="inline-table";
    },
    showTxn: function(){
      document.getElementById("allTxn").style.display="inline-table";
    },
    logout: function() {
      //console.log("pushed")
      this.$router.push({ name: "Login" });
  }
  }
};
</script>
<style>
h2,
h3 {
  text-align: center;
}

.wrapper {
  text-align: center;
}

.myDonation {
  display: none;
}

.allTxn {
  display: none;
}

.para{
  text-align:center;
  padding: 50px;
  margin-left: 50px;
  margin-right: 50px;
}

.event{
  border-style: solid;
  margin-left: 50px;
  margin-right: 50px;
}
</style>