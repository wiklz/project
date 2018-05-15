<template>
  <section class="container-fluid">
    <div>
      <section class="slider my-5">
        <h1>Стройка</h1>
        <Stroika/>
      </section>
      <section class="slider my-5">
        <h1>Отделка</h1>
        <Otdelka/>
      </section>
    </div>
  </section>
</template>

<script>
  import Stroika from '~/components/Stroika.vue'
  import Otdelka from '~/components/Otdelka.vue'

  export default {
    name: 'page1',
    components: {
      Stroika, Otdelka
    }
  }
</script>

<style lang="scss">
  .container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .slider{
      min-height: 300px;
    }
  }


</style>
