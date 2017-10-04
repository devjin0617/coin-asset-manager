<template>

</template>

<script>
export default {
  name: 'asset-page',
  created () {
    let user = this.Firebase.auth().currentUser

    if (user) {
      // User is signed in.
      console.log('login success', user)
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
