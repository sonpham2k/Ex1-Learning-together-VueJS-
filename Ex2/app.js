const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn VueJs',
            vueLink: 'http://vuejs.org/',
            resultRandom: undefined,
            randomNumer: undefined,
        };
    },
    methods:{
        randomNum() {
            const randomNumber = Math.random();
            this.randomNumer = randomNumber;
            if (randomNumber < 0.5) {
                this.resultRandom = 'Learn Vuejs';
            } else {
                this.resultRandom = 'Learn PHP';
            }
        }
    }
}).mount('#user-goal');
