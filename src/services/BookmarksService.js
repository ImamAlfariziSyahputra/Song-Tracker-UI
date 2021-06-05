import Api from '@/services/Api';

export default {
  all(bookmark) {
    return Api().get('bookmarks', {
      params: bookmark,
    });
  },
  store(bookmark) {
    return Api().post('bookmarks', bookmark);
  },
  delete(bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`);
  },
}