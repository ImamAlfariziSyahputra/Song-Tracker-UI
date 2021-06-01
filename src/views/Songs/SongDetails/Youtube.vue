<template>
  <Panel title="Youtube" class="mb-3">
    <youtube
      :video-id="song.youtubeId"
      width="590"
      height="310"
    >
    </youtube>
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

<style>

</style>