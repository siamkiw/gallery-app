<template>
  <div class="card">
    <div class="card-header">Disk Usage Overview</div>
    <div class="card-body">
      <div class="container">
        <div class="d-flex">
          <p class="pr-5">Total Size:</p>
          <p>0.00MB(0B)</p>
        </div>
        <div class="d-flex">
          <p class="pr-5">No of files:</p>
          <p>0</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
