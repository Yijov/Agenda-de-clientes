import { Response, Request } from "express";

export default class Responder {
  //200 ok
  public Ok = async (res: Response, DTOcontent: {} | [] = []) => {
    return res.status(200).send();
  };

  public Success = async (res: Response) => {
    return res.status(200).json({ success: true });
  };

  //200 deleted
  public Deleted = async (res: Response) => {
    return res.status(200).send();
  };

  //204 No Content
  public NoContent = async (res: Response, message: string) => {
    return res.status(201).json({ success: false, message: message });
  };

  //201 Created include a Location header identifying the location of the newly created resource.
  public Created = async (
    res: Response,
    DTOObject: {},
    _id: string,
    location: string
  ) => {
    res.location(location + _id);
    return res.status(201).json({ success: true, payLoad: DTOObject });
  };

  // updated
  public Updated = async (res: Response, DTOObjec: {}) => {
    return res.status(200).json({ success: true, payLoad: DTOObjec });
  };
}
