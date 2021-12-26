export default interface IAPIResponse<T = any> {
  success: boolean;
  message: string;
  payload: T;
}
