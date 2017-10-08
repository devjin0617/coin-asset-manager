<template>
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
</template>

<script>
export default {
  name: 'asset-list',
  data () {
    return {
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
