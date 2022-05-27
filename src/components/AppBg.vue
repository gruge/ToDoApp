<template>
<div style="bgcolor: #800000"></div>
<img style=" position: absolute; z-index:-2; max-width: 100%; height: auto;" v-bind:src="image" />
</template>

<script>
export default {
  data: function () {
    return {
      image: "https://cdn.wallpapersafari.com/73/74/v20swk.jpg"
    }
  }
}

</script>