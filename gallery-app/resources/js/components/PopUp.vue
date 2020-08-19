<template>
  <div
    class="modal fade bd-example-modal-lg"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <img class="modal-image" :src="imgSrc.src" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: Object,
  },
};
</script>

<style>
</style>