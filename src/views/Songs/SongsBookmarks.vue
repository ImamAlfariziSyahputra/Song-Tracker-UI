<template>
  <Panel title="Bookmarks">
    <!-- {{ bookmarks }} -->
    <b-table
      id="bookmarks-table"
      :fields="fields"
      :items="bookmarks"
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
      aria-controls="bookmarks-table"
    ></b-pagination>
  </Panel>
</template>

<script>
import BookmarksService from '@/services/BookmarksService';
import Panel from '@/components/Panel';
import { mapState } from 'vuex';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      sortBy: 'createdAt',
      sortDesc: true,
      perPage: 3,
      currentPage: 1,
      fields: [
        'No',
        'title',
        'artist',
      ],
      // items: [
      //   { title: 'Selfish', artist: 'Stephanie Poetri' },
      //   { title: 'IRL', artist: 'Stephanie Poetri' },
      //   { title: 'I Love You 3000', artist: 'Stephanie Poetri' },
      //   { title: 'I Love You 4000', artist: 'Stephanie Poetri' },
      //   { title: 'I Love You 5000', artist: 'Stephanie Poetri' },
      //   { title: 'I Love You 6000', artist: 'Stephanie Poetri' },
      // ],
      bookmarks: [],
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
    rows() {
      return this.bookmarks.length;
    }
  },
  async mounted() {
    if(this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.all()).data;
    }
  }
}
</script>

<style>
#bookmarks-table {
  max-width: 10px;
}
</style>