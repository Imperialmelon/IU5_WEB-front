/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Cargo {
  /** ID */
  pk?: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Price per ton
   * @min 1
   * @max 2147483647
   */
  price_per_ton: number;
  /**
   * Short description
   * @minLength 1
   */
  short_description: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /** Is active */
  is_active?: boolean;
  /**
   * Logo file path
   * @minLength 1
   * @maxLength 255
   */
  logo_file_path?: string;
}

export interface GetCargo {
  cargo: Cargo[];
  /** Shipping id */
  shipping_id?: number | null;
  /** Items in cart */
  items_in_cart: number;
}

export interface CargosForRequested {
  /** ID */
  pk?: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Price per ton
   * @min 1
   * @max 2147483647
   */
  price_per_ton: number;
  /**
   * Logo file path
   * @minLength 1
   * @maxLength 255
   */
  logo_file_path?: string;
}

export interface Related {
  cargo: CargosForRequested;
  /**
   * Amount
   * @min 0
   * @max 2147483647
   */
  amount: number;
}

export interface ShippingWithInfo {
  /** ID */
  pk?: number;
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /** Client */
  client: number;
  /** Manager */
  manager?: number | null;
  /**
   * Organization
   * @minLength 1
   * @maxLength 255
   */
  organization: string;
  cargo_list: Related[];
}

export interface AddingToShipping {
  /** ID */
  pk?: number;
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /** Client */
  client?: number;
  /** Manager */
  manager?: number | null;
  /**
   * Organization
   * @minLength 1
   * @maxLength 255
   */
  organization: string;
  /** Total price */
  total_price?: number;
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
}

export interface Shipping {
  /** ID */
  pk?: number;
  /**
   * Creation datetime
   * @format date-time
   */
  creation_datetime?: string;
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
  /**
   * Completion datetime
   * @format date-time
   */
  completion_datetime?: string | null;
  /**
   * Formation datetime
   * @format date-time
   */
  formation_datetime?: string | null;
  /** Client */
  client?: string;
  /** Manager */
  manager?: number | null;
  /**
   * Organization
   * @minLength 1
   * @maxLength 255
   */
  organization: string;
  /**
   * Total price
   * @min -2147483648
   * @max 2147483647
   */
  total_price?: number;
}

export interface ResolveShipping {
  /** Status */
  status?: "DRAFT" | "DELETED" | "FORMED" | "COMPLETED" | "REJECTED";
}

export interface ShippingCargos {
  /** Shipping */
  shipping: number;
  /** Cargo */
  cargo: number;
  /**
   * Amount
   * @min 0
   * @max 2147483647
   */
  amount: number;
}

export interface User {
  /** ID */
  id?: number;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://127.0.0.1:8000" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Mars cargo delivery API
 * @version v1
 * @license SAPCE Y License
 * @baseUrl http://127.0.0.1:8000
 * @contact <spacey@google.com>
 *
 * API for Mars cargo delivery
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  cargo = {
    /**
     * @description добавить новую услугу
     *
     * @tags cargo
     * @name CargoAddCreate
     * @request POST:/cargo/add
     * @secure
     */
    cargoAddCreate: (data: Cargo, params: RequestParams = {}) =>
      this.request<Cargo, void>({
        path: `/cargo/add`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description получение услуги
     *
     * @tags cargo
     * @name CargoRead
     * @request GET:/cargo/{id}
     * @secure
     */
    cargoRead: (id: string, params: RequestParams = {}) =>
      this.request<Cargo, void>({
        path: `/cargo/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description создать новое отправление или добавить туда груз
     *
     * @tags cargo
     * @name CargoAddCreate2
     * @request POST:/cargo/{id}/add
     * @originalName cargoAddCreate
     * @duplicate
     * @secure
     */
    cargoAddCreate2: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/cargo/${id}/add`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description загрузить картинку в минио
     *
     * @tags cargo
     * @name CargoAddImageCreate
     * @request POST:/cargo/{id}/add_image
     * @secure
     */
    cargoAddImageCreate: (
      id: string,
      data: {
        /**
         * Image
         * @format binary
         */
        image: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/cargo/${id}/add_image`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  cargoes = {
    /**
     * @description получение списка услуг
     *
     * @tags cargoes
     * @name CargoesList
     * @request GET:/cargoes
     * @secure
     */
    cargoesList: (
      query?: {
        /** cargo_name */
        cargo_name?: string;
        /** min_price */
        min_price?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetCargo, void>({
        path: `/cargoes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description изменить услугу
     *
     * @tags cargoes
     * @name CargoesChangeUpdate
     * @request PUT:/cargoes/{id}/change
     * @secure
     */
    cargoesChangeUpdate: (id: string, data: Cargo, params: RequestParams = {}) =>
      this.request<Cargo, void>({
        path: `/cargoes/${id}/change`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description удалить услугу
     *
     * @tags cargoes
     * @name CargoesDeleteDelete
     * @request DELETE:/cargoes/{id}/delete
     * @secure
     */
    cargoesDeleteDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/cargoes/${id}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  shipping = {
    /**
     * @description получить отправление
     *
     * @tags shipping
     * @name ShippingRead
     * @request GET:/shipping/{id}
     * @secure
     */
    shippingRead: (id: string, params: RequestParams = {}) =>
      this.request<ShippingWithInfo, void>({
        path: `/shipping/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description изменить отправление
     *
     * @tags shipping
     * @name ShippingChangeUpdate
     * @request PUT:/shipping/{id}/change
     * @secure
     */
    shippingChangeUpdate: (id: string, data: AddingToShipping, params: RequestParams = {}) =>
      this.request<AddingToShipping, void>({
        path: `/shipping/${id}/change`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description удалить оформление
     *
     * @tags shipping
     * @name ShippingDeleteDelete
     * @request DELETE:/shipping/{id}/delete
     * @secure
     */
    shippingDeleteDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/shipping/${id}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description сформировать отправление
     *
     * @tags shipping
     * @name ShippingFormUpdate
     * @request PUT:/shipping/{id}/form
     * @secure
     */
    shippingFormUpdate: (id: string, params: RequestParams = {}) =>
      this.request<Shipping, void>({
        path: `/shipping/${id}/form`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description отклонить или завершить оформление
     *
     * @tags shipping
     * @name ShippingResolveUpdate
     * @request PUT:/shipping/{id}/resolve
     * @secure
     */
    shippingResolveUpdate: (id: string, params: RequestParams = {}) =>
      this.request<ResolveShipping, void>({
        path: `/shipping/${id}/resolve`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  shippingCargo = {
    /**
     * @description Изменение данных о грузе в отправлении
     *
     * @tags shipping_cargo
     * @name ShippingCargoChangeUpdate
     * @request PUT:/shipping_cargo/{ck}/{sk}/change
     * @secure
     */
    shippingCargoChangeUpdate: (ck: string, sk: string, data: ShippingCargos, params: RequestParams = {}) =>
      this.request<ShippingCargos, void>({
        path: `/shipping_cargo/${ck}/${sk}/change`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаление груза из отправления
     *
     * @tags shipping_cargo
     * @name ShippingCargoDeleteDelete
     * @request DELETE:/shipping_cargo/{ck}/{sk}/delete
     * @secure
     */
    shippingCargoDeleteDelete: (ck: string, sk: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/shipping_cargo/${ck}/${sk}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  shippings = {
    /**
     * @description получить список отправлений
     *
     * @tags shippings
     * @name ShippingsList
     * @request GET:/shippings
     * @secure
     */
    shippingsList: (
      query?: {
        status?: string;
        formation_start?: string;
        formation_end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Shipping[], void>({
        path: '/shippings', // Added leading slash for clarity
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        timeout: 1000, // Added timeout in milliseconds (1 second)
        ...params,
      }),
  };
  user = {
    /**
     * @description Создание пользователя
     *
     * @tags user
     * @name UserCreateCreate
     * @request POST:/user/create
     * @secure
     */
    userCreateCreate: (data: User, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/create`,
        method: "POST",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Вход
     *
     * @tags user
     * @name UserLoginCreate
     * @request POST:/user/login/
     * @secure
     */
    userLoginCreate: (
      data: {
        /** username */
        username: string;
        /** password */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/user/login/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description деавторизация
     *
     * @tags user
     * @name UserLogoutCreate
     * @request POST:/user/logout/
     * @secure
     */
    userLogoutCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/logout/`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Обновление данных пользователя
     *
     * @tags user
     * @name UserUpdateUpdate
     * @request PUT:/user/update
     * @secure
     */
    userUpdateUpdate: (data: User, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/user/update`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
