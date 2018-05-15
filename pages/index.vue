<template>
  <section class="container-fluid p-0">
    <div class="header">
      <h1>Brigadir</h1>
      <h3>Lorem ipsum dolor sit amet.</h3>
    </div>
  </section>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style lang="scss">
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .header{
    color: #ddd;
    width: 100%;
    height: 100vh;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: #000 url("/static/images/doors.jpeg") no-repeat top;
    background-size: 100% auto;
    box-shadow:  rgba(0, 0, 0, .7) 0 0 0 500px inset;
  }
}


</style>
