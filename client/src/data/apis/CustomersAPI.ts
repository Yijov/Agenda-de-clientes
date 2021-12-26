import Connection from "../connection/Connection";
import IUpdateCustomerDTO from "../../interfaces/IUpdateCustomerDTO";
import ICustomer from "../../interfaces/ICustomer";
import ICustomerInteraction from "../../interfaces/ICustomerInteraction";

export default class CustomersAPI extends Connection {
  private routes = {
    customers: `${this.API_DOMAIN}/customers`,
    customers_with_param: (customerID: string) => `${this.API_DOMAIN}/customers/${customerID}`,
    customers_interaction_wit_params: (customerID: string) =>
      `${this.API_DOMAIN}/customers/interactions/${customerID}`,
  };

  public GET_CUSTOMERS = async () => {
    const response = await this.GET_REQUEST<ICustomer[]>(this.routes.customers);
    return response;
  };
  public CREATE_CUSTOMER = async (DTO: ICustomer) => {
    const response = await this.POST_REQUEST<ICustomer>(this.routes.customers, DTO);
    return response;
  };
  public UPDATE_CUSTOMER = async (DTO: IUpdateCustomerDTO) => {
    const reponse = await this.PUT_REQUEST<ICustomer>(
      this.routes.customers_with_param(DTO._id),
      DTO
    );
    return reponse;
  };
  public DELETE_CUSTOMER = async (customerId: string) => {
    const reponse = await this.DELETE_REQUEST<null>(this.routes.customers_with_param(customerId));
    return reponse;
  };
  public ADD_INTERACTION = async (customerID: string, interaction: ICustomerInteraction) => {
    const reponse = await this.POST_REQUEST<ICustomer>(
      this.routes.customers_interaction_wit_params(customerID),
      { type: interaction.type, notes: interaction.notes }
    );
    return reponse;
  };
  public REMOVE_INTERACTION = async (customerID: string, interactionID: string) => {
    const reponse = await this.DELETE_REQUEST<null>(
      this.routes.customers_interaction_wit_params(customerID),
      { interactionID: interactionID }
    );
    return reponse;
  };
}
