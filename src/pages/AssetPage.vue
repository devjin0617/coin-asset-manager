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
            <tab-item label="AssetList">
              <asset-list></asset-list>
            </tab-item>
            <tab-item label="MarketCap">
              <market-cap></market-cap>
            </tab-item>
            <tab-item label="TalkList">
              <talk-list></talk-list>
            </tab-item>
            <tab-item label="More">
              <more></more>
            </tab-item>
          </tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AssetList from '@/components/AssetList'
import MarketCap from '@/components/MarketCap'
import TalkList from '@/components/TalkList'
import More from '@/components/More'
export default {
  name: 'asset-page',
  data () {
    return {
      pageName: 0
    }
  },
  created () {
    window.document.getElementsByTagName('html')[0].className = 'main-view'

    let user = this.Firebase.auth().currentUser

    if (user) {
      // User is signed in.
      console.log('login success', user)

      let database = this.Firebase.database()

      console.log(database)

      let assetListRef = database.ref('/assets/' + user.uid)

      assetListRef.on('value', (snapshot) => {
        console.log(snapshot.val())

        if (!snapshot.val()) {
          database.ref('/assets/' + user.uid).set({
            bithumb: {
              apikey: 'abcde',
              secret: 'helloworld'
            }
          })
        }
      })
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
  },
  components: {
    'asset-list': AssetList,
    'market-cap': MarketCap,
    'talk-list': TalkList,
    'more': More
  }
}
</script>

<style>

</style>
