<template>
  <Panel title="Lyrics">
    <div v-if="song.lyrics">
      <b-form-textarea
        v-model="song.lyrics"
        readonly
        rows="10"
        max-rows="1"
        class="bg-white"
      ></b-form-textarea>
    </div>
    <div v-else>
      <b-form-textarea
        value="No Data Found"
        readonly
        rows="4"
        max-rows="1"
        class="bg-white"
      ></b-form-textarea>
    </div>
  </Panel>
</template>

<script>
import Panel from '@/components/Panel';

export default {
  props: ['song'],
  components: {
    Panel,
  },
}
</script>

<style scoped>
.tab {
  max-height: 16rem;
}
</style>
