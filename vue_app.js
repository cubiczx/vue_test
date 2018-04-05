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

Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

var app27 = new Vue({
  el: '#app-27',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})

Vue.component('button-message', {
  template: `<div>
    <input type="text" v-model="message" />
    <button v-on:click="handleSendMessage">Send</button>
  </div>`,
  data: function () {
    return {
      message: 'test message'
    }
  },
  methods: {
    handleSendMessage: function () {
      this.$emit('message', { message: this.message })
    }
  }
})

var app28 = new Vue({
  el: '#app-28',
  data: {
    messages: []
  },
  methods: {
    handleMessage: function (payload) {
      this.messages.push(payload.message)
    }
  }
})

Vue.component('currency-input', {
  template: '\
    <div>\
      <label v-if="label">{{ label }}</label>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
        v-on:focus="selectAll"\
        v-on:blur="formatValue"\
      >\
    </div>\
  ',
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  },
  mounted: function () {
    this.formatValue()
  },
  methods: {
    updateValue: function (value) {
      var result = currencyValidator.parse(value, this.value)
      if (result.warning) {
        this.$refs.input.value = result.value
      }
      this.$emit('input', result.value)
    },
    formatValue: function () {
      this.$refs.input.value = currencyValidator.format(this.value)
    },
    selectAll: function (event) {
      // Workaround for Safari bug
      // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
      setTimeout(function () {
      	event.target.select()
      }, 0)
    }
  }
})

var app29 = new Vue({
  el: '#app-29',
  data: {
    price: 0,
    shipping: 0,
    handling: 0,
    discount: 0
  },
  computed: {
    total: function () {
      return ((
        this.price * 100 + 
        this.shipping * 100 + 
        this.handling * 100 - 
        this.discount * 100
      ) / 100).toFixed(2)
    }
  }
})

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

var app30 = new Vue({
  el: '#app-30',
  data: {
  	isActive : true
  }
})

var app31 = new Vue({
  el: '#app-31',
  data: {
	  styleObject: {
	    color: 'red',
	    fontSize: '13px'
	  },
	  baseStyles: {
	  	color: 'red',
	  },
	  overridingStyles: {
		color: 'blue',
	  }
	}
})

var app32 = new Vue({
  el: '#app-32',
  data: {
  	type : 'B'
  }
})

var app33 = new Vue({
  el: '#app-33',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var app34 = new Vue({
  el: '#app-34',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var app35 = new Vue({
  el: '#app-35',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})

var app36 = new Vue({
  el: '#app-36',
  data: {
	  numbers: [ 1, 2, 3, 4, 5 ]
	},
	methods: {
	  even: function (numbers) {
	    return numbers.filter(function (number) {
	      return number % 2 === 0
	    })
	  }
	}
})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

var todolist = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

var app37 = new Vue({
  el: '#app-37',
  data: {
    counter: 0
  }
})

var app38 = new Vue({
  el: '#app-38',
  data: {
    name: 'Xavier'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// you can invoke methods in JavaScript too
// app38.greet() // => 'Hello Xavier!'

var app39 = new Vue({
  el: '#app-39',
  methods: {
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // now we have access to the native event
      if (event) event.preventDefault()
      alert(message)
    }
  }
})

var app40 = new Vue({
  el: '#app-40',
  methods: {
    submit: function () {
      alert('SUBMIT')
    },
    space: function () {
      alert('Space')
    },
    copy: function () {
      alert('Copy')
    }
  }
})

var app41 = new Vue({
  el: '#app-41',
  data:{
    checked: false,
    message: '',
    checkedNames: [],
    picked: '',
    selectedMultiple: '',
    selected: 'C',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
    toggle : 'yes',
    pick: '',
    selectedObject: [
      { number: 0 }
    ],
    msg : ''
  }
})

// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var componentsDemo = new Vue({
  el: '#components-demo'
})

var componentsDemoR = new Vue({
  el: '#components-demoR'
})

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

var app42 = new Vue({
  el: '#app-42'
})

var app43 = new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'Object My journey with Vue' },
      { id: 2, title: 'Object Blogging with Vue' },
      { id: 3, title: 'Object Why Vue is so fun' },
    ]
  }
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

var app44 = new Vue({
  el: '#blog-posts-events-demo',
  data: {
   posts: [
      { id: 1, title: 'Object2 My journey with Vue' },
      { id: 2, title: 'Object2 Blogging with Vue' },
      { id: 3, title: 'Object2 Why Vue is so fun' },
    ],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})

var tabs = [
  {
    name: 'Home', 
    component: { 
      template: '<div>Home component</div>' 
    }
  },
  {
    name: 'Posts',
    component: {
      template: '<div>Posts component</div>'
    }
  },
  {
    name: 'Archive',
    component: {
      template: '<div>Archive component</div>',
    }
  }
]

new Vue({
  el: '#dynamic-component-demo',
  data: {
    tabs: tabs,
    currentTab: tabs[0]
  }
})

Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
})

var app45 = new Vue({
  el: '#app-45',
})

Vue.component('base-layout', {
template: `
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
`
})

var app46 = new Vue({
  el: '#app-46',
})

Vue.component('tab-posts', { 
  data: function () {
    return {
      posts: [
        { 
          id: 1, 
          title: 'Cat Ipsum',
          content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
        },
        { 
          id: 2, 
          title: 'Hipster Ipsum',
          content: '<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>'
        },
        { 
          id: 3, 
          title: 'Cupcake Ipsum',
          content: '<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>'
        }
      ],
      selectedPost: null
    }
  },
  template: `
    <div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
          v-on:click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
        <div 
          v-if="selectedPost"
          class="selected-post"
        >
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        <strong v-else>
          Click on a blog title to the left to view it.
        </strong>
      </div>
    </div>
  `
})

Vue.component('tab-archive', { 
  template: '<div>Archive component</div>' 
})

var app47 = new Vue({
  el: '#dynamic-component-demo2',
  data: {
    currentTab: 'Posts',
    tabs: ['Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})