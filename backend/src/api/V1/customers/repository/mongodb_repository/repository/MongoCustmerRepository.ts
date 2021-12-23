import ICustomerRepository from "../../ICustomerRepositoty";
import { Invalid, NotFound } from "../../../../../../errors/custom_errors";
import { ICustomer, IInteraction } from "../../../entity";
import { Customer, Business, Person } from "../schemas/customerSchema";
import IUpdateCustomerDTO from "../../../entity/IUpdateCustomerDTO";
import { Document } from "mongoose";
import customerTypes from "../../../enums/customerTipes";

export default class MongoCustomerRepositoty implements ICustomerRepository {
  private CustomersModel = Customer;
  private BusinessCustomerModel = Business;
  private PersonCustomerModel = Person;
  constructor() {}

  public FindAll = async (): Promise<ICustomer[]> => {
    //only admin
    const customers = await Customer.find();
    return customers;
  };

  public FindAllFromUser = async (userid: string): Promise<ICustomer[]> => {
    const customers = await this.CustomersModel.find({ userAccountId: userid });
    return customers;
  };

  public FindbyID = async (customerid: string): Promise<Document<any, any, ICustomer>> => {
    const customers = await this.CustomersModel.findById(customerid);
    if (customers) {
      return customers;
    } else {
      throw new NotFound(`Could not find user with id ${customerid}`);
    }
  };

  public AddOne = async (customer: ICustomer): Promise<ICustomer> => {
    //trun customer __type to uppercase to prevent casing errors
    let customerToAdd = {
      ...customer,
      __type: customer.__type.toUpperCase(),
    };

    //add customer with the correcponding type
    let addedCustomer;

    if (customerToAdd.__type === customerTypes.Person) {
      addedCustomer = await this.PersonCustomerModel.create(customerToAdd);
    } else if (customerToAdd.__type === customerTypes.Business) {
      addedCustomer = await this.BusinessCustomerModel.create(customerToAdd);
    } else {
      throw new Invalid(`"__tipe" does not match any of the availible customer types`);
    }

    //save changes to the database and return the added customer
    const result = await addedCustomer.save();
    return result;
  };

  public updateOne = async (DTO: IUpdateCustomerDTO): Promise<ICustomer> => {
    //set up the transaction
    let id = { _id: DTO._id };
    let change = { $set: DTO.changes };
    let options = { upsert: true, new: true };
    let result;

    //validate the collection wich the customer bellongs to and save accordingly
    try {
      if (DTO.__type.toUpperCase() === customerTypes.Person) {
        result = await this.PersonCustomerModel.findOneAndUpdate(id, change, options).exec();
      } else if (DTO.__type.toUpperCase() === customerTypes.Business) {
        result = await this.BusinessCustomerModel.findOneAndUpdate(id, change, options).exec();
      } else {
        throw new Invalid("__tipe does not match any of the availivle categories ");
      }

      //return the updated object
      return result;
    } catch (err) {
      throw err;
    }
  };

  public DeletebyID = async (customerid: string): Promise<boolean> => {
    let customer = await this.CustomersModel.findByIdAndDelete(customerid).exec();
    if (customer) {
      return true;
    } else {
      throw new NotFound("Customer does not exist");
    }
  };

  public AddInteraction = async (
    customerID: string,
    interaction: IInteraction
  ): Promise<ICustomer> => {
    //find the correcponding customer
    let customer = await this.CustomersModel.findById(customerID);

    //push the interaction to the interactions array
    if (customer) {
      await customer?.interactions.push(interaction);
      let updated = await customer.save();

      //return updated customer object
      return updated;
    } else {
      throw new Error("unable to add Interaction");
    }
  };

  public DeleteInteraction = async (
    customerID: string,
    interactionId: string
  ): Promise<boolean> => {
    const doc = await this.CustomersModel.updateOne(
      { _id: customerID },
      { $pull: { interactions: { _id: interactionId } } },
      { safe: true }
    );

    if (doc.acknowledged === true && doc.matchedCount === 1 && doc.modifiedCount === 1) {
      return true;
    } else {
      throw new NotFound("could not find interaction with _id: " + interactionId);
    }
  };
}
