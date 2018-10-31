<template>
  <div class="has-bg-img">
      <div class="headline">
        <h1 class="title">
          There are Witches in Manitou.
        </h1>
        <img src="/belial.png">
      </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.animated {
  --vendor-animation-duration: 6s;
  --vendor-animation-delay: 3s;
  --vendor-animation-iteration-count: infinite;
}

.title,
.subtitle {
  font-weight: 100;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 3px;
}

.title {
  font-family: "Witchfinder Script Old";
  font-size: 9vw;
  font-color: #F0F0F0
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 7vw;
}

.headline {
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.has-bg-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('~/assets/trees.jpg')center center;
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
}
</style>
