import { InternalAxiosRequestConfig } from 'axios';

export const paramsInterceptor = () => {
  return async (
    requestConfig: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    const entity = requestConfig.params?.entity?.toLowerCase() || 'slocpi';
    requestConfig.params = { ...requestConfig.params, entity, lob: entity === 'slgfi' ? 'SLGFI' : 'SLOCPI' };
    return requestConfig;
  };
};
