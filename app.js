new Vue({
  el: '#app',
  data: {
    result: 0,
    daily: 0
  },
  methods: {
    onKeyUp: function(event){

      var quality = document.getElementById('quality').value

      var plan = document.getElementById('plan').value * 1024
      var mbph = quality * 3600
      var result = plan / mbph

      result = Math.round( result * 10 ) / 10;
      result.toFixed(1)

      var daily = result / 30
      this.daily = daily.toFixed(1)

      this.result = result
    },
  }
})
