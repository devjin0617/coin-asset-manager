<template>
  <div>
    <div>
      <data-table :data="items" >
        <column width="30" label="" field="icon">
          <template scope="row">
            <div :class="[row.icon]"></div>
          </template>
        </column>
        <column label="name" field="name"></column>
        <column label="balance" field="balance"></column>
        <column label="value" field="value">
          <template scope="row">
            <div>
              {{ row.value.total }} | {{ row.value.current }}
            </div>
          </template>
        </column>
      </data-table>
    </div>
    <div style="margin-bottom:20px;">
      <a class="button is-primary is-large" @click="toggleModal">Add</a>
    </div>


    <div>
      <modal title="Add coin info" :width="520" :is-show="isModal" transition="fadeDown" @close="isModal=false">
        <h4>코인정보를 입력해주세요</h4>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
          vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </p>
      </modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'asset-list',
  data () {
    return {
      isModal: false,
      items: [
        {
          key: 0,
          icon: 's-s-bitcoin',
          name: 'BTC',
          balance: 2.45,
          value: {
            total: 12323500,
            current: 5030000
          }
        }
      ]
    }
  },
  mounted () {
    console.log('asset-list')
  },
  methods: {
    toggleModal () {
      this.isModal = true
    }
  }
}
</script>

<style>
.s-s-bitcoin {
  background-image: url('/static/images/coin-icons.png');
  -webkit-background-size: 190px 159px;
  -moz-background-size: 190px 159px;
  background-size: 190px 159px;
  background-position: -16px -143px;
  width: 16px;
  height: 16px;
  margin: auto;
}
</style>
