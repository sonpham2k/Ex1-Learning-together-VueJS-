const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullname: "",
    };
  },
  computed: {
    // fullname() {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + this.lastName;
    // },
  },
  watch: {
    name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = this.name + " " + value;
      }
    },
  },
  methods: {
    outputFullname() {
      if (this.name === "" && this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },

    resetInput() {
      this.name = "";
      this.lastName = "";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
