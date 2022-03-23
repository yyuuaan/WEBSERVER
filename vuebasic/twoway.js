const { VueElement } = require("vue")

const TwoWayBinding = {
  data(){
    return{
      message: 'Hellu Vue!'
    }
  }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')