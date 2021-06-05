<template>
  <Panel title="Song" class="mb-3">
    <div class="text-center d-flex justify-content-between no-gutters">
      <div class="col-6 p-2">
        <h2>{{ song.title }}</h2>
        <h6>{{ song.artist }}</h6>
        <h6>{{ song.genre }}</h6>
        <div class="d-flex justify-content-between no-gutters">
          <div class="col-6">
            <router-link :to="{ name: 'EditSong', params: { songId: song.id }}">
              <b-button variant="primary">Edit Song</b-button>
            </router-link>
          </div>
          <div class="col-6">
            <b-button 
              v-if="isUserLoggedIn && !bookmark"
              variant="success"
              block size="sm"
              @click="setBookmark"
              class="mb-2"
            >
              <b-icon icon="bookmark-check" aria-hidden="true"></b-icon>
              Bookmark
            </b-button>
            <b-button 
              v-if="isUserLoggedIn && bookmark"
              variant="danger"
              block size="sm"
              @click="unBookmark"
            >
              <b-icon icon="bookmark-dash" aria-hidden="true"></b-icon>
              Unbookmark
            </b-button>
          </div>
        </div>
      </div>
      <div class="col-6 p-2">
        <img :src="song.albumImageUrl" alt="" class="img-fluid album-image">
        {{ song.album }}
      </div>
    </div>
  </Panel>
</template>

<script>
import { mapState } from 'vuex';
import BookmarksService from '@/services/BookmarksService';
import Panel from '@/components/Panel';

export default {
  props: ['song'],
  data() {
    return {
      bookmark: null,
    }
  },
  components: {
    Panel,
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {
    async setBookmark() {
      try {
        this.bookmark = (await BookmarksService.store({
          songId: this.song.id,
          userId: this.user.id,
        })).data;
      } catch (err) {
        console.log(err);
      }
    },
    async unBookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null
      } catch (err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    if(!this.isUserLoggedIn) {
      return;
    }
    try {
      this.bookmark = (await BookmarksService.all({
        songId: this.song.id,
        userId: this.user.id,
      })).data;
    } catch (err) {
      console.log(err);
    }
  },
}
</script>

<style>

</style>