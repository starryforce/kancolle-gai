<template>
  <section class="m-showZone">
    <div class="u-title">
      <h1>热点</h1>
    </div>
    <div class="m-cards clearfix">
      <ShipCard v-for="item in 5" :key="item"/>
    </div>
  </section>
</template>
<script>
import ShipCard from './ShipCard';

export default {
  name: 'ShowZone',
  components: {
    ShipCard,
  },
};
</script>

<style lang="scss" scoped>

</style>



