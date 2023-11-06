import type { InjectionKey } from "vue";
import { IHttpServices } from "src/models/http.models";

export const HTTPSERVICE: InjectionKey<IHttpServices> = Symbol("httpservice");