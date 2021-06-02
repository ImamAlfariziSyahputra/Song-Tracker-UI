import Api from '@/services/Api';

export default {
  all(search) {
    return Api().get('songs', {
      params: {
        search: search,
      },
    });
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