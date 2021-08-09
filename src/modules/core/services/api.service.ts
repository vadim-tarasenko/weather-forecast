import { injectable, singleton } from 'tsyringe';
import qs from 'qs';
import { API_URL } from '@env';

@injectable()
@singleton()
class ApiService {
  public async get<Query = unknown>(url: string, query?: Query) {
    return fetch(`${API_URL}${url}?${qs.stringify(query)}`, {
      method: 'GET',
    }).then(res => res.json());
  }
}

export default ApiService;
