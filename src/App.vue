<template>
<div id="app">

  <keep-alive>
   <transition name="fade">
      <router-view></router-view>
   </transition>
  </keep-alive>
</div>
</template>




<style lang="stylus" >
/*  Require ET Styles Framework */
@import "et/et";
/*  End of ET Styles Framework */
.fade-enter-active, .fade-leave-active {
  transition: opacity .05s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>