const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      numbers: 0,
      name:'',
    };
  },
  methods:{
    setName(event){
      this.name = event.target.value;
    },
    setJump(event){
      this.numbers = event.target.value;
    },
    add() {
      this.counter += Number(this.numbers);
    },
    reduce() {
      this.counter -= Number(this.numbers);
    }
  }
});
app.mount('#events');
