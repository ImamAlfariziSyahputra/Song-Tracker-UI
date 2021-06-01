<template>
  <Panel title="Song" class="mb-3">
    <div class="text-center d-flex justify-content-between no-gutters">
      <div class="col-6">
        <h2>{{ song.title }}</h2>
        <h6>{{ song.artist }}</h6>
        <h6>{{ song.genre }}</h6>
        <router-link :to="{ name: 'EditSong', params: { songId: song.id }}">
          <b-button variant="primary">Edit Song</b-button>
        </router-link>
      </div>
      <div class="col-6">
        <img :src="song.albumImageUrl" alt="" class="img-fluid album-image">
        {{ song.album }}
      </div>
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

<style>

</style>