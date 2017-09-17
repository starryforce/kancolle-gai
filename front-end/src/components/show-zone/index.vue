<template>
  <section class="m-showZone">
    <div class="u-title">
      <h1>热点</h1>
    </div>
    <div class="m-cards clearfix">
      <ship-card v-for="item in 5"></ship-card>
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



