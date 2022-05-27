<template>
<div>
<img style="position: fixed; z-index:-2; auto; width: 100%; height: 100%; user-drag: none;" :src="image" />
</div>
</template>

<script>
  import image from "../assets/images/bg.png"

export default {
  data: function () {
    return {
      image: image
    }
  }
}

</script>