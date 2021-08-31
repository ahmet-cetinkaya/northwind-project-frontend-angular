import ResponseModel from './responseModel';

export default interface SingleResponseModel<T> extends ResponseModel {
  Data: T;
}
