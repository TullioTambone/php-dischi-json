const { createApp } = Vue

createApp({
  data() {
    return {
      apiUrl: 'server.php',
      data: '',
      counter: '',
      indice: '',
    }
  },
  mounted(){
    this.chiamataApi()
  },
  methods:{
    chiamataApi(){
      axios.get(this.apiUrl)
      .then((res) => {
        this.data = res.data
      });
    },

    openOverlay(i){
      //this.counter = i

      //prendo il dato tramite chiamata axios
      //informazione che inviamo in post al sever
      // const indice = {
      //   indiceDisco: i
      // }
      this.indice = {
        i
      }
      //chiamata axios per il dato
      
      axios.get(this.apiUrl, this.indice, {header: {'Content-Type':'multipart/form-data'}})
      .then((res) => {
        this.counter = res.data;
      })
      
      
      document.querySelector('.overlay').style.opacity = 1;
      document.querySelector('.overlay').style.zIndex = 999;
    },
    closeOverlay(){
      document.querySelector('.overlay').style.opacity = 0;
      document.querySelector('.overlay').style.zIndex = 0;
    }
  }

}).mount('#app')