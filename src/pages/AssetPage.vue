<template>
  <div>
    <section>
      <div style="height:80px; display:flex; align-items:center;">
        <nav style="width:100%; max-width:768px; margin:auto; padding:5px;">
          <a><span style="color:#333333; font-size:40px; font-weight:200;">CoinAM</span></a>
        </nav>
      </div>
    </section>
    <section>
      <div style="width:100%; max-width:768px; min-height:700px; margin:auto;">
        <div class="column" style="padding:0;">
          <tabs :on-tab-click="tabMenu">
            <tab-item label="AssetList"></tab-item>
            <tab-item label="MarketCap"></tab-item>
            <tab-item label="TalkList"></tab-item>
            <tab-item label="More"></tab-item>
          </tabs>
        </div>
        <div style="padding:5px;">
          {{ pageName }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'asset-page',
  data () {
    return {
      pageName: ''
    }
  },
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
  },
  methods: {
    tabMenu (index) {
      this.pageName = index
    }
  }
}
</script>

<style>

</style>
