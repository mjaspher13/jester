import { InternalAxiosRequestConfig } from 'axios';

export const paramsInterceptor = () => {
  return async (
    requestConfig: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    requestConfig.params = requestConfig.params || {};
    const entity = requestConfig.params.entity?.toLowerCase() || 'slocpi';
    requestConfig.params.entity = entity;
    requestConfig.params.lob = entity === 'slgfi' ? 'SLGFI' : 'SLOCPI';
    return requestConfig;
  };
};
