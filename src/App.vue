<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    let user = this.Firebase.auth().currentUser

    if (user) {
      // User is signed in.
      console.log('login success', user)

      this.$router.replace('/main/aseets')
    } else {
      // No user is signed in.
      console.log('login fail')
      this.$router.replace('/login')
    }
  }
}
</script>

<style>
</style>
