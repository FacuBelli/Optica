const{createApp} = Vue 
createApp({
    data(){
        return{
            clientes:[],
            url:"",
        }
    },

    methods:{
        fetchData(url){
            fetch(this.url)
        },
    },


    created(){
        this.fetchData(this.url);
    }
}).mount("#app")