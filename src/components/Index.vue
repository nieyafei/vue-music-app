<template>
  <div class="index_home">
    <img src="../style/image/index-bg.jpg" alt="">
    <div class="logo_navi">
        <img src="../style/image/index-lo.png" alt="">
    </div>
    <div class="fot_text">
      <span>音乐App</span>
      <span>欢迎来到nyf的music</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  created: function () {
    console.log('加载完成开始数据')
    setTimeout(() => {
      const router = this.$router
      router.push({path: '/hello'})
    }, 5000)
  }
}
</script>
<style lang="scss" scoped>
@import "../style/scss/variable.scss";
.index_home {
  color: $color-theme;position: relative;
  width: 100%;height: 100%;overflow: hidden;
  img{
    width: 100%;
  }
  .logo_navi{
    position: absolute;top:50%;left:50%;
    width: 80px;height: 80px;
    margin:{
      left:-40px;
      top:-65px;
    }
    animation: route 1s infinite linear;
    -webkit-animation: route 1s infinite linear;
    img{height: 80px;width:auto;}
  }
  .fot_text{
    position: absolute;bottom: 30px;left:0;text-align:center;width: 100%;
    span{display: block;line-height:2;width: 100%;text-align:center;}
    span:first-child{
      color:#fff;font-size: 24px;font-weight: bold;
    };
    span:last-child{
      color:#2a5ea4;
    }
  }
}
@-webkit-keyframes route {
  0%{
    -webkit-transform: rotate(0deg);
  }
  100%{
    -webkit-transform: rotate(360deg);
  }
}
@keyframes route {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

</style>
