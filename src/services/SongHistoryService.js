import Api from '@/services/Api';

export default {
  all(params) {
    return Api().get('histories', {
      params: params,
    });
  },
  store(history) {
    return Api().post('histories', history);
  }
}
