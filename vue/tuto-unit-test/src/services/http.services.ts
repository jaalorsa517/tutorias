import { HttpArgs, IHttpServices } from "src/models/http.models";

export class HttpService implements IHttpServices {
  async get(arg: HttpArgs) {
    const response = await fetch(arg.url);
    return response.json();
  }
}
