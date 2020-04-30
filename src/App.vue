<template>
  <div id="app">
    <div class="title">{{ themeOption.themeName }}</div>
    <div class="content-box">
      <div class="content-title">我的主题色</div>
      <div class="theme-color"></div>
    </div>
    <div class="content-box">
      <div class="content-title">我的专属图片</div>
      <div class="img-con">
        <img :src="img1" alt="" />
        <img :src="img2" alt="" />
        <img :src="img3" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { _require } from "@/lib/require";
import themeOption from "./theme/theme.option.json";
export default {
  name: "App",
  data() {
    return {
      themeOption,
      img1: _require("img1"),
      img2: _require("img2"),
      img3: _require("img3"),
    };
  },
  created() {
    setTimeout(() => {
      this.img = _require("img1");
      this.img2 = _require("img2");
    }, 2000);
  },
  components: {},
};
</script>

<style></style>

<style lang="scss" scoped>
.title {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.content-box {
  .content-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 30px 0 20px;
  }
  .theme-color {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: $color-theme;
  }
}

.img-con {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 0 10px;
  }
}
</style>
