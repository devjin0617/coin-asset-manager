<template>
  <div class="container login-view">
    <h1>Coin AssetManager</h1>
    <div class="login-form">
      <p class="control has-icon">
        <input class="input" type="email" name="email" placeholder="Email" v-model="form.email">
        <i class="fa fa-envelope"></i>
      </p>
      <p class="control has-icon">
        <input class="input" type="password" name="password" placeholder="Password" v-model="form.password">
        <i class="fa fa-lock"></i>
      </p>
      <p class="control has-icon" v-show="isRegister">
        <input class="input" type="password" name="check-password" placeholder="check Password" v-model="form.checkPassword">
        <i class="fa fa-lock"></i>
      </p>
      <p class="control">
        <button class="button is-success" @click="handleAction">
          {{ buttonName }}
        </button>
        <div class="register-box">
          <a @click="modeChange">{{ modeName }}</a>
          <a @click="logoutTest">logout(test)</a>
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
