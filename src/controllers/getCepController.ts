import { Request, Response } from "express";
import { ZipcodeValidate } from "../services/validateZipCode";
import { getViacepResponse } from "../services/viaCepRequest";

export const getCepController = async (req: Request, res: Response) => {
  const { zip } = req.body;
  if (ZipcodeValidate(zip) === false) {
    return res.status(400).json({
      message: "Zipcode not valid",
    });
  } else {
    let viaCepData = await getViacepResponse(zip);

    if (viaCepData.bairro === "") {
      viaCepData.message = "Unable to find the district of this zip code";
      res.status(200).send(viaCepData);
    } else {
      res.status(200).send(viaCepData);
    }
  }
};
