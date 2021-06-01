import Api from '@/services/Api';

export default {
  all() {
    return Api().get('songs');
  },
  store(song) {
    return Api().post('songs', song);
  },
}