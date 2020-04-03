function compiler() {

}

function Vue(options) {
  this.options = options
  if (typeof options.data === 'object' && options.data !== null ) {
    this.data = options.data instanceof Function ? options.data() : options.data
    observe(this.data, this);
  }
  this.$el = document.getElementById(this.options.el)
  // this.$el.innerHtml = compiler(this.$el)
}
let vm = Vue({
  el: 'app',
  template: 'App',
  data() {
    return {
      key: 1
    }
  }
})

function Dep() {
  this.subs = [];
}
Dep.prototype = {
  addSub: function(sub) {
      this.subs.push(sub);
  },
  notify: function() {
      this.subs.forEach(function(sub) {
          sub.update();
      });
  }
};

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      return val
    },
    set(newVal) {
      if (newVal === val) return
      val = newVal
      childObj = new observe(newVal);
      console.log(val)
    }
  })
}


function observe(obj, vm) {
  if (typeof obj !== 'object' || obj === null) return
  Object.key(s).forEach(item => {
      defineReactive(vm, key, obj[key])
  })
}
