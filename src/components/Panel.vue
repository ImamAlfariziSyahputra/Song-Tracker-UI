<template>
  <div :class="`col-${col} border border-primary rounded p-0`">
    <div>
      <h1 class="text-center bg-primary text-white py-2">
        {{ title }}
        <slot name="action">

        </slot>
      </h1>
    </div>
    <div class="m-3">
      <slot>
        <p class="text-center">no slot content defined.</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'col'
  ],
}
</script>

<style>

</style>