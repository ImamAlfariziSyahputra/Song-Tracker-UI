<template>
  <div class="row no-gutters pb-5">
    <div class="col-5">
      <Panel title="Song Metadata" class="mx-4">
        <!-- Title -->
        <b-form-group
            class="mb-3"
            label="Title:"
          >
          <b-form-input
            v-model="song.title"
            type="text"
            placeholder="Enter title"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Artist -->
        <b-form-group
            class="mb-3"
            label="Artist:"
          >
          <b-form-input
            v-model="song.artist"
            type="text"
            placeholder="Enter artist"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Genre -->
        <b-form-group
            class="mb-3"
            label="Genre:"
          >
          <b-form-input
            v-model="song.genre"
            type="text"
            placeholder="Enter genre"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Album -->
        <b-form-group
            class="mb-3"
            label="Album:"
          >
          <b-form-input
            v-model="song.album"
            type="text"
            placeholder="Enter album"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Album Image Url -->
        <b-form-group
            class="mb-3"
            label="Album Image Url:"
          >
          <b-form-input
            v-model="song.albumImageUrl"
            type="text"
            placeholder="Enter Album Image Url"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Youtube ID -->
        <b-form-group
            class="mb-3"
            label="Youtube ID:"
          >
          <b-form-input
            v-model="song.youtubeId"
            type="text"
            placeholder="Enter Youtube ID"
            required
          ></b-form-input>
        </b-form-group>
      </Panel>
    </div>
    <div class="col-6">
      <Panel title="Song Structre">
        <!-- Lyrics -->
        <b-form-group
          class="mb-3"
          label="Lyrics:"
        >
          <b-form-textarea
            v-model="song.lyrics"
            placeholder="Enter lyrics..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <!-- Tab -->
        <b-form-group
            class="mb-3"
            label="Tab:"
          >
          <b-form-textarea
            v-model="song.tab"
            placeholder="Enter Tab..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-alert v-if="error" show variant="danger">
          <span v-html="error">
            {{ error }}
          </span>
        </b-alert>

        <b-button @click="addSong" block variant="primary">Submit</b-button>
      </Panel>
    </div>
  </div>

</template>

<script>
import Panel from '@/components/Panel';
import SongService from '@/services/SongsService';

export default {
  components: {
    Panel
  },
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
      },
      error: null,
    }
  },
  // computed: {
  //   validation() {
  //     return this.song.title.length !== null;
  //   }
  // },
  methods: {
    async addSong() {
      this.error = null;
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key]);
      if(!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.';
        return;
      }
      try {
        await SongService.store(this.song);
        this.$router.push({
          name: 'Songs'
        });
      } catch (err) {
        console.log(err);
      }
    },
  }
}
</script>

<style>

</style>