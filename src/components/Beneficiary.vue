<template>
<div>
  <h2>Beneficiary Page</h2>
  <h3> My Payout </h3>
      <table id="payout" class="center">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pay in myPayout" :key="pay.id">
          <td>{{pay.date}}</td>
          <td>{{pay.Amount}}</td>
        </tr>
      </tbody>
    </table><br>

  <button @click="goWeb"> Report </button>
  <h3>Transaction Log</h3>
  <body>
    <table id="firstTable" class="center">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>From</th>
          <th>To</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>{{row.date}}</td>
          <td>{{row.Amount}}</td>
          <td>{{row.From}}</td>
          <td>{{row.To}}</td>
        </tr>
      </tbody>
    </table>
  </body>
  <br>
  <button @click="returnToLogin">Log Out</button>
</div>
</template>



<script>
export default {
  name: "Beneficiary", //this is the name of the component
  data() {
    return {
      rows: [
        { date: "1/1/19", Amount: 100, From: "OCBC", To: "Shan" },
        { date: "1/2/19", Amount: 100, From: "OCBC", To: "Nic" }
      ],
      myPayout: [
        {date:"10/3/19" , Amount:500}
      ]
    };
  },
  methods: {
    returnToLogin: function() {
      //console.log("pushed")
      this.$router.push({ name: "Login" });
    },
    goWeb: function(){
      window.open('https://www.nkfs.org/about-nkf/contact-us/')
    }
  }
};
</script>
<style>
table {
  font-family: "Open Sans", sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}

table.center {
  margin-left: auto;
  margin-right: auto;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: rgb(96, 97, 109);
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: rgb(179, 180, 187);
}
</style>
