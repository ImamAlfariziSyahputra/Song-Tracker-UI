<template>
  <div class="d-flex justify-content-between px-4 pb-4" v-if="song">
    <div class="col-6">
      <SongMetadata :song="song"/>
      <Tabs :song="song" />
    </div>

    <div class="col-6">
      <Youtube :song="song"/>
      <Lyrics :song="song"/>
    </div>
  </div>
</template>

<script>
import SongMetadata from '@/views/Songs/SongDetails/SongMetadata';
import Youtube from '@/views/Songs/SongDetails/Youtube';
import Tabs from '@/views/Songs/SongDetails/Tabs';
import Lyrics from '@/views/Songs/SongDetails/Lyrics';
import SongsService from '@/services/SongsService';

export default {
  components: {
    SongMetadata,
    Youtube,
    Tabs,
    Lyrics,
  },
  data() {
    return {
      song: null,
    }
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data;
  }
}
</script>

<style scoped>

</style>
