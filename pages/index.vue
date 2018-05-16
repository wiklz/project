<template>
  <section class="container-fluid p-0">
    <div class="header">
      <h1>{{name}}</h1>
      <h3>{{description}}</h3>
    </div>
  </section>
</template>

<script>

export default {
  components: {

  },
  data:function () {
    return{
      name: 'Brigadir',
      description: 'Строительная компания'
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .header{
    color: #ccc;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: #000 url("/static/images/doors.jpeg") repeat-x center;
    background-size: auto 100%;
    box-shadow:  rgba(0, 0, 0, .7) 0 0 0 500px inset;
    h1{
      font-size: 7rem;
    }
    h3{
      font-size: 2.1rem;
    }
  }
}


</style>
