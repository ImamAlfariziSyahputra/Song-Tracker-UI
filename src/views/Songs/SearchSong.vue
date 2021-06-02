<template>
  <Panel col="6" class="mx-auto">
    <b-form-input
      v-model="search"
      type="text"
      placeholder="Search by song title, artist, album, or genre"
      required
    ></b-form-input>
  </Panel>
</template>

<script>
import _ from 'lodash';
import Panel from '@/components/Panel';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search: _.debounce(async function () {
      const route = {
        name: 'Songs'
      };
      if(this.search !== '') {
        route.query = {
          search: this.search,
        };
      };
      this.$router.push(route);
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    },
  },
}
</script>

<style>

</style>