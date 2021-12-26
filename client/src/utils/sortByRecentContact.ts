import ICustomer from "../interfaces/ICustomer";
const sortByRecentContact = (x: ICustomer, y: ICustomer) => {
  return +new Date(x.createdAt!!) - +new Date(y.createdAt!!);
};

export default sortByRecentContact;
