var app = new Vue({
  el: "#app",
  data: {
    show: false
  },
  methods: {
    open: function() {
      this.show = true;
    },
    close: function() {
      this.show = false;
    },
  }
});
