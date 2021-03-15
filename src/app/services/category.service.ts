import { ListResponseModel } from '../models/listResponseModel';
  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(
