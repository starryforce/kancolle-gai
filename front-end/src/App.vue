<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
article,
aside,
blockquote,
body,
button,
code,
dd,
details,
div,
dl,
dt,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
input,
legend,
li,
nav,
ol,
p,
pre,
section,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0
}

ul {
  list-style-type: none;
}
</style>

