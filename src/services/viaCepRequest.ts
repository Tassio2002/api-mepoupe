import axios from "axios";

export async function getViacepResponse(zipcode: string) {
  let viaCepURL = `https://viacep.com.br/ws/${zipcode}/json`;
  let cepResponse = await (await axios(viaCepURL)).data;

  return cepResponse;
}
