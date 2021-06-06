<template>
  <div class="d-flex justify-content-between no-gutters px-3">
    <div class="col-6 mr-3">
      <SongsBookmarks />
    </div>
    <div class="col-6">
      <SearchSong />
      <Panel title="Songs">
        <router-link to="/songs/create" slot="action">
          <b-button variant="success">
            <b-icon icon="plus-circle" aria-hidden="true"></b-icon>
          </b-button>
        </router-link>
        <div v-for="song in songs" :key="song.id" class="text-center d-flex justify-content-between no-gutters mb-3">
          <div class="col-6">
            <h2>{{ song.title }}</h2>
            <h6>{{ song.artist }}</h6>
            <h6>{{ song.genre }}</h6>
            <router-link :to="{ name: 'Song', params: { songId: song.id }}">
              <b-button variant="primary">View</b-button>
            </router-link>
          </div>
          <div class="col-6">
            <img :src="song.albumImageUrl" alt="" class="img-fluid album-image">
          </div>
        </div>
      </Panel>
    </div>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import SongsBookmarks from '@/views/Songs/SongsBookmarks';
import SearchSong from '@/views/Songs/SearchSong';
import SongsService from '@/services/SongsService';

export default {
  components: {
    Panel,
    SongsBookmarks,
    SearchSong,
  },
  data() {
    return {
      songs: null,
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.songs = (await SongsService.all(value)).data;
      }
    }
  },
  // async mounted() {
  //   this.songs = (await SongsService.all()).data;
  // },
}
</script>

<style scoped>
.album-image {
  width: 70%;
}
</style>