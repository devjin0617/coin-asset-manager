<template>
  <div class="container login-view">
    <h1>Coin AssetManager</h1>
    <div class="login-form">
      <p class="control has-icon">
        <input class="input" type="email" name="email" placeholder="Email">
        <i class="fa fa-envelope"></i>
      </p>
      <p class="control has-icon">
        <input class="input" type="password" name="password" placeholder="Password">
        <i class="fa fa-lock"></i>
      </p>
      <p class="control has-icon" v-show="isRegister">
        <input class="input" type="password" name="check-password" placeholder="check Password">
        <i class="fa fa-lock"></i>
      </p>
      <p class="control">
        <button class="button is-success">
          {{ buttonName }}
        </button>
        <div class="register-box">
          <a @click="modeChange">{{ modeName }}</a>
        </div>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data () {
    return {
      isRegister: false
    }
  },
  computed: {
    modeName () {
      return this.isRegister ? 'login' : 'register'
    },
    buttonName () {
      return this.isRegister ? 'Register' : 'Login'
    }
  },
  methods: {
    modeChange () {
      this.isRegister = !this.isRegister
    }
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  margin-top:15%;
  text-align:center;
  max-width:500px;
}
.login-form {
  margin-top:20px;
}
.register-box {
  text-align:right;

  a {
    color: white;
  }
}
h1 {
  color:white;
  font-size:24px;
  font-weight: 500;
}
button {
  width: 100%;
}
</style>
