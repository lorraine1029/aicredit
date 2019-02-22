<template>
    <div>
      <header-logo></header-logo>
      <user-infor></user-infor>
      <server-box></server-box>
      <drop-out></drop-out>
      <bottom-nav></bottom-nav>
    </div>
</template>

<script>
  import HeaderLogo from "./HeaderLogo";
  import UserInfor from "./UserInfor";
  import ServerBox from "./ServerBox";
  import DropOut from "./DropOut";
  import BottomNav from "../public/BottomNav"
    export default {
        name: "CenterPage",
      components:{
        HeaderLogo,
        UserInfor,
        ServerBox,
        DropOut,
        BottomNav
      }
    }
</script>

<style scoped>

</style>
