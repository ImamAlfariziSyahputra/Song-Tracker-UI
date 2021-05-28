import Api from '@/services/Api';

export default {
  register(payload) {
    return Api().post('register', payload);
  },
  login(payload) {
    return Api().post('login', payload);
  },
}