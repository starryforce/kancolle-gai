<template>
  <div>
    <aside>
      <ul>
        <li>
          <router-link to='/console/ships'>舰船</router-link>
        </li>
      </ul>
    </aside>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MainConsole',
};
</script>

<style lang="scss" scoped>

</style>
