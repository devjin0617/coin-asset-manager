<template>
  <div class="container login-view">
    <h1>Coin AssetManager</h1>
    <div class="login-form">
      <p class="control has-icon">
        <input class="input is-large" type="email" name="email" placeholder="Email" v-model="form.email">
        <i class="fa fa-envelope"></i>
      </p>
      <p class="control has-icon">
        <input class="input is-large" type="password" name="password" placeholder="Password" v-model="form.password" @keyup.enter="handleAction">
        <i class="fa fa-lock"></i>
      </p>
      <p class="control has-icon" v-show="isRegister">
        <input class="input is-large" type="password" name="check-password" placeholder="check Password" v-model="form.checkPassword">
        <i class="fa fa-lock"></i>
      </p>
      <p class="control">
        <button class="button is-success is-large" @click="handleAction">
          {{ buttonName }}
        </button>
        <div class="register-box">
          <a @click="modeChange">{{ modeName }}</a>
          <a @click="logoutTest" >logout(test)</a>
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
      isRegister: false,
      form: {
        email: '',
        password: '',
        checkPassword: ''
      }
    }
  },
  created () {
    window.document.getElementsByTagName('html')[0].className = ''
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
    },
    handleAction () {
      console.log('handleAction')
      if (this.isRegister) {
        // register
        this.Firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).catch(error => {
          // Handle Errors here.
          let errorCode = error.code
          let errorMessage = error.message
          // ...
          console.error('#createUserWithEmailAndPassword', errorCode, errorMessage)
        })
        return
      } else {
        // login
        this.Firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).catch(error => {
          // Handle Errors here.
          let errorCode = error.code
          let errorMessage = error.message
          // ...
          console.error('#signInWithEmailAndPassword', errorCode, errorMessage)
        })
      }
      let user = this.Firebase.auth().currentUser

      if (user) {
        // User is signed in.
        console.log('login success', user)
        this.$router.replace('/')
      } else {
        // No user is signed in.
        console.log('login fail')
      }
    },
    logoutTest () {
      this.Firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('logout success!')
      }).catch(error => {
        // An error happened.
        console.log('logout fail!', error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  margin-top: 15%;
  padding: 0 20px;
  text-align:center;
  max-width:500px;
}
.login-form {
  margin-top:20px;
}
.register-box {
  text-align:right;
  font-size:24px;

  a {
    color: white;
  }
}
h1 {
  color:white;
  font-size:40px;
  font-weight: bold;
  text-align:left;
}
button {
  width: 100%;
}
</style>
