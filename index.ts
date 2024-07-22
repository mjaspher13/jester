import { InternalAxiosRequestConfig } from 'axios';

export const paramsInterceptor = () => {
  return async (
    requestConfig: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    requestConfig.params = requestConfig.params || {};
    const entity = requestConfig.params.entity || 'slocpi';
    requestConfig.params = { ...requestConfig.params, entity, lob: entity.toLowerCase() === 'slgfi' ? 'SLGFI' : 'SLOCPI' };
    return requestConfig;
  };
};
