var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

// Define a new component called todo-item
Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

var app8 = new Vue({
  el: '#app-8',
  data: obj
})

var app9 = new Vue({
  el: '#app-9',
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    },
    message: 'Change app9 data (ex.: app9.a = 2)'
  },

  updated: function () {
	this.$nextTick(function () {
	    // Code that will run only after the
	    // entire view has been re-rendered
	    console.log('UPDATED data')
	  })
  },

  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal);
      app9.message = 'Changed!';
    },
    // string method name
    b: 'someMethod',
    // deep watcher
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // the callback will be called immediately after the start of the observation
    d: {
      handler: function (val, oldVal) { /* ... */ },
      immediate: true
    },
    e: [
      function handle1 (val, oldVal) { /* ... */ },
      function handle2 (val, oldVal) { /* ... */ }
    ],
    // watch app9.e.f's value: {g: 5}
    'e.f': function (val, oldVal) { /* ... */ }
  }
})
// app9.a = 2 // => new: 2, old: 1

var app10 = new Vue({
  el: '#app-10',
  data: {
    rawHtml: '<span style="color:red">RED</span>'
  }
})

var app11 = new Vue({
  el: '#app-11',
  data: {
    dynamicTitle: 'THIS IS A DYNAMIC TITLE'
  }
})

var app12 = new Vue({
  el: '#app-12',
  data: {
    id: '22'
  }
})

var app13 = new Vue({
  el: '#app-13',
  data: {
  	seen: true,
  	message: 'Now you see me'
  }
})


var app14 = new Vue({
  el: '#app-14',
  data: {
    message: 'Hello'
  },
  methods: {
		reverseMessage: function () {
		return this.message.split('').reverse().join('')
	}
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

var app15 = new Vue({
  el: '#app-15',
  data: {
    firstName: 'Xavier',
    lastName: 'Palacín',
  },
  computed: {
	  fullName: {
	    // getter
	    get: function () {
	      return this.firstName + ' ' + this.lastName
	    },
	    // setter
	    set: function (newValue) {
	      var names = newValue.split(' ')
	      this.firstName = names[0]
	      this.lastName = names[names.length - 1]
	    }
	  }
	}
})

var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!',
    image: ''
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
            vm.image = response.data.image
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
    )
  }
})

var app16 = new Vue({
  el: '#app-16',
  data: {
    isActive: true,
  	hasError: true
  }
})

var app17 = new Vue({
  el: '#app-17',
  data: {
	  isActive: true,
	  error: null
	},
	computed: {
	  classObject: function () {
	    return {
	      active: this.isActive && !this.error,
	      'text-danger': this.error && this.error.type === 'fatal'
	    }
	  }
	}
})

var app18 = new Vue({
  el: '#app-18',
  data: {
	  activeClass: 'active',
	  errorClass: 'text-danger',
	  isActive: true
	}
})

// register
Vue.component('my-component', {
  template: '<div>Global custom component!</div>'
})

// create a root instance
var app19 = new Vue({
  el: '#app-19'
})

var Child = {
  template: '<div>Local custom component!</div>'
}

var app20 = new Vue({
  el: '#app-20',
  components: {
    // <my-component-local> will only be available in parent's template
    'my-component-local': Child
  }
})

Vue.component('my-row', {
  template: '<td>Campo</td>'
})

// create a root instance
var app21 = new Vue({
  el: '#app-21'
})

var data22 = { counter: 0 }

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return {
	    counter: 0
	  }
  }
})

var app22 = new Vue({
  el: '#app-22'
})

Vue.component('child', {
  // declare the props
  // camelCase in JavaScript
  props: ['myMessage'],
  // like data, the prop can be used inside templates and
  // is also made available in the vm as this.message
  template: '<span>{{ myMessage }}</span>'
})

var app23 = new Vue({
  el: '#app-23'
})

var app24 = new Vue({
  el: '#app-24',
  data: {
    parentMsg: 'Message from parent'
  }
})

Vue.component('counter', {
  template: '<span>{{ counter }}</span>',
  props: ['initialCounter'],
	data: function () {
	  return { counter: this.initialCounter }
	}
})

var app25 = new Vue({
  el: '#app-25',
  data: {
    parentMsg: 'Message from parent'
  }
})

Vue.component('propvalidation', {
  props: {
    // basic type check (`null` means accept any type)
    propA: Number,
    // multiple possible types
    propB: [String, Number],
    // a required string
    propC: {
      type: String,
      required: true
    },
    // a number with default value
    propD: {
      type: Number,
      default: 100
    },
    // object/array defaults should be returned from a
    // factory function
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // custom validator function
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  },
  data: function () {
	  return { validation: 'validation' }
	}
})

var app26 = new Vue({
  el: '#app-26'
})