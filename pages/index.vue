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
  transition: 'fade',
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
    font-size: 100%;
    h1{
      font-size: 8em;
      animation: pulse 3s ease-in 10s infinite alternate;
    }
    h3{
      font-size: 2.3em;
      padding: 0 20px;
    }
  }
}
@media (max-width: 567px){
  .container-fluid {
    .header{
      font-size: 60%;
    }
  }
}
@media (min-width: 568px) and (max-width: 823px){
  .container-fluid {
    .header{
      font-size: 80%;
    }
  }
}
/*ANIMATIONS*/
.fade-enter-active {
  animation: fade-in 1s;
}
.fade-leave-active {
  animation: fade-out 1s;
}
@keyframes fade-in {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes fade-out {
  0% {opacity: 1;}
  100% {opacity: 0;}
}
@keyframes pulse {
  from{
    opacity: 1;
  }
  to{
    opacity: .3;
  }
}
</style>
