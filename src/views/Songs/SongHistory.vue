<template>
  <Panel title="Recently Viewed Songs" class="mt-4">
    <!-- {{ bookmarks }} -->
    <b-table
      id="song-history-table"
      :fields="fields"
      :items="histories"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :per-page="perPage"
      :current-page="currentPage"
      small
      show-empty
    >
      <template #empty="scope">
        <h4>{{ scope.emptyText }}</h4>
      </template>
      <!-- A virtual column -->
      <template #cell(No)="data">
        {{ data.index + 1 }}
      </template>

      <!-- <template #cell(title)="data">
        {{ data.title }}
      </template> -->

      <!-- Optional default data cell scoped slot -->
      <!-- <template #cell()="data">
        <i>{{ data.value }}</i>
      </template> -->

    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="song-history-table"
    ></b-pagination>
  </Panel>
</template>

<script>
import SongHistoryService from '@/services/SongHistoryService';
import Panel from '@/components/Panel';
import { mapState } from 'vuex';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      sortDesc: true,
      sortBy: 'createdAt',
      perPage: 3,
      currentPage: 1,
      fields: [
        'No',
        'title',
        'artist',
      ],
      histories: [],
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
    rows() {
      return this.histories.length;
    }
  },
  async mounted() {
    if(this.isUserLoggedIn) {
      this.histories = (await SongHistoryService.all()).data;
    }
  }
}
</script>

<style>
#song-history-table {
  max-width: 10px;
}
</style>