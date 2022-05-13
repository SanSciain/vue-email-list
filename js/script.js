
const app = new Vue(
    {
        el: "#root",
        data:{
            emailArray:[],
        },
        mounted(){
            this.generateEmail();
        },
        methods:{
            generateEmail() {
                for(let i=0;i<10;i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((resp) => {
                        this.emailArray.push(resp.data.response);
                    })
                }
            }
        }
    }
)