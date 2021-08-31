import ResponseModel from './responseModel';

export default interface ListResponseModel<T> extends ResponseModel {
  Data: T[];
}
