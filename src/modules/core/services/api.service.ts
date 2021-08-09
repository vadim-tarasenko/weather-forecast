import { injectable, singleton } from 'tsyringe';
import qs from 'qs';
import { API_URL } from '@env';

@injectable()
@singleton()
class ApiService {
  public async get<Res = unknown, Query = unknown>(
    url: string,
    query?: Query,
  ): Promise<Res> {
    return fetch(`${API_URL}${url}?${qs.stringify(query)}`, {
      method: 'GET',
    }).then(res => res.json());
  }
}

export default ApiService;
