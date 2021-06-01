import Api from '@/services/Api';

export default {
  all() {
    return Api().get('songs');
  },
  show(songId) {
    return Api().get(`songs/${songId}`)
  },
  store(song) {
    return Api().post('songs', song);
  },
  update(song) {
    return Api().put(`songs/${song.id}`, song);
  },
}