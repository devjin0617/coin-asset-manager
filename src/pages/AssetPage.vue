<template>
  <div>
    <section>
      <div style="height:80px; border-bottom:1px solid #b5b5b5; display:flex; align-items:center;">
        <nav style="width:100%; max-width:768px; margin:auto;">
          <a><span style="color:#333333; font-size:40px; font-weight:200;">CoinAM</span></a>
        </nav>
      </div>
    </section>
    <section>
      <div style="width:100%; max-width:768px; background-color:blue; min-height:700px; margin:auto; margin-top:40px;">

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'asset-page',
  created () {
    window.document.getElementsByTagName('html')[0].className = 'main-view'

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
