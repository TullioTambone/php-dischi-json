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
      this.counter = i
      document.querySelector('.overlay').style.opacity = 1;
      document.querySelector('.overlay').style.zIndex = 999;
    },
    closeOverlay(){
      document.querySelector('.overlay').style.opacity = 0;
      document.querySelector('.overlay').style.zIndex = 0;
    }
  }

}).mount('#app')