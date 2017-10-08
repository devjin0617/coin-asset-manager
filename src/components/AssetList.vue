<template>
  <div>
    <data-table :data="items" >
      <column label="" field="icon"></column>
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
          icon: 'aa',
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
</style>
