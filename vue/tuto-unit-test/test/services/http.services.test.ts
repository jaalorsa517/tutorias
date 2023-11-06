import { describe, it, vi, beforeEach, expect } from "vitest";
import { IHttpServices } from "../../src/models/http.models";
import { HttpService } from "../../src/services/http.services";

describe("HttpService", () => {
  let httpService: IHttpServices;
  beforeEach(() => {
    httpService = new HttpService();
  });

  it("[HttpService] get success", async () => {
    const fetch = vi.spyOn(global, "fetch").mockResolvedValue({
      json: function (): Promise<any> {
        return Promise.resolve({});
      },
    } as Response);
    const response = await httpService.get({
      url: "https://localhost:3000",
    });
    expect(fetch).toHaveBeenCalled();
    expect(response).toMatchObject({});
  });

  it("[HttpService] get error", async () => {
    const fetch = vi.spyOn(global, "fetch").mockRejectedValue(new Error());
    await expect(httpService.get({ url: "https://localhost:3000" })).rejects.toThrowError();
    expect(fetch).toHaveBeenCalled();
  });
});
