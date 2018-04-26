

var app = new Vue({
  el: '#app',
  data: {
    partyName: "party",
    party: [],
    size: 0,
    /*speed: 0;*/
    newName: "",
    newWeight: "",
    newKart: "",
    newWheel: "",
    newSpeed: 1 + Math.floor(Math.random() * 20),
    error: "",
  },

  computed:{
    getPartyName: function() {
    if(this.partyName === '')
      {return "party";}
      else{
        return this.partyName;
      }
    }
  },
  created: function() {
    this.getParty();
  },
  methods: {
    getSpeed: function() {
      var constants = require("./constants");
      console.log(constants.feather);
      console.log(constants.medium);
      console.log(constants.light);
      console.log(constants.cruiser);
      console.log(constants.heavy);
      console.log(constants.bdasher);
      console.log(constants.egg);
      console.log(constants.kclown);
      console.log(constants.standardk);
      console.log(constants.btrain);
      console.log(constants.monster);
      console.log(constants.slick);
      console.log(constants.sponge);
      console.log(constants.wood);
      console.log(constants.standardw);
      /*math.sum(this.newWeight, this.newKart, this.newWheel);*/
      var newWeight = {};
      var feather = 'foo';
      newWeight[feather] = 0;
      newWeight.foo // = 0

    },
    sendName: function() {
      axios.put("/api/name", {
        partyName: this.partyName
      }).then(response => {

      }).catch(err => {});
    },
    addCharacter: function() {
      if(this.newName !== "" && this.newWeight !== "" && this.newKart !== ""
        && this.newWheel !== "")
      {
        axios.post("/api/items", {
      	name: this.newName,
        weight: this.newWeight,
        kart: this.newKart,
        wheel: this.newWheel,
            }).then(response => {
                              	this.size = this.size + 1;
                                this.newName = "";
                                this.newWeight = "";
                                this.newKart = "";
                                this.newWheel = "";
                              	this.getParty();
                              	return true;}).catch(err => {});
      }
      else{
        this.error = "Please fill all fields."
      }
    },
    removeCharacter: function(character) {
      axios.delete("/api/items/" + character.id).then(response => {
        this.size = this.size - 1;
        this.getParty();
       	return true;
             }).catch(err => {});
    },
    clearParty: function() {
      this.party.forEach(character => {
        this.removeCharacter(character);
      });
    },
    getName: function() {
      axios.get("/api/name").then(response => {
        this.partyName = response.data;
      }).catch(err => {});
    },
    getParty: function() {
      this.getName();
      axios.get("/api/items").then(response => {
      this.party = response.data;
      this.size = this.party.length;
      return true;
         }).catch(err => {});
    },
  }
});
