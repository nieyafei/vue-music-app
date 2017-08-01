<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p v-text="a"></p>
    <p v-html="b"></p>
    <div v-if="isShow">
      <p v-bind:class="{ red: isShow }">我显示了</p>
    </div>
    <div class="bl" v-if="iterms.length>0">
      <div class="sd" v-for="ite in iterms">
        <div>
          姓名：{{ ite.name }}  密码：{{ ite.password }}
        </div>
      </div>
    </div>
    <button type="button" name="button" v-on:click="doThis">点击显示</button>
    <button type="button" name="button" @click="doThis">再次点击</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      a: 1,
      b: '<div><strong>我是谁</strong></div>',
      isShow: false,
      iterms: [
        {
          name: 'niayafei',
          password: '123456789'
        },
        {
          name: 'niayaf',
          password: '1234567890'
        }
      ]
    }
  },
  create: function () {

  },
  methods: {
    doThis () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
