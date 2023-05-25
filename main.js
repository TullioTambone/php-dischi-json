const { createApp } = Vue

createApp({
  data() {
    return {
      apiUrl: 'server.php',
      data: '',
      counter: '',
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
      const payload = {
        indice: i
      }

      //chiamata axios per il dato
      
      axios.get(this.apiUrl + "?indice=" + i).then((res) => {
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