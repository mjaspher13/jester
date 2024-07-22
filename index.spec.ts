import { InternalAxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { paramsInterceptor } from './path-to-your-interceptor-file';

describe('paramsInterceptor', () => {
  it('should set lob to SLOCPI if params or entity is undefined', async () => {
    const requestConfig: InternalAxiosRequestConfig = { headers: {} as AxiosRequestHeaders };

    const result = await paramsInterceptor()(requestConfig);

    expect(result.params).toEqual({ lob: 'SLOCPI' });
  });

  it('should set lob to SLOCPI if entity is not slgfi', async () => {
    const requestConfig: InternalAxiosRequestConfig = { headers: {} as AxiosRequestHeaders, params: { entity: 'other' } };

    const result = await paramsInterceptor()(requestConfig);

    expect(result.params).toEqual({ entity: 'other', lob: 'SLOCPI' });
  });

  it('should set lob to SLGFI if entity is slgfi', async () => {
    const requestConfig: InternalAxiosRequestConfig = { headers: {} as AxiosRequestHeaders, params: { entity: 'slgfi' } };

    const result = await paramsInterceptor()(requestConfig);

    expect(result.params).toEqual({ entity: 'slgfi', lob: 'SLGFI' });
  });

  it('should set lob to SLGFI if entity is SLGFI (case insensitive)', async () => {
    const requestConfig: InternalAxiosRequestConfig = { headers: {} as AxiosRequestHeaders, params: { entity: 'SLGFI' } };

    const result = await paramsInterceptor()(requestConfig);

    expect(result.params).toEqual({ entity: 'SLGFI', lob: 'SLGFI' });
  });

  it('should preserve existing params and add lob', async () => {
    const requestConfig: InternalAxiosRequestConfig = { headers: {} as AxiosRequestHeaders, params: { entity: 'slgfi', otherParam: 'test' } };

    const result = await paramsInterceptor()(requestConfig);

    expect(result.params).toEqual({ entity: 'slgfi', otherParam: 'test', lob: 'SLGFI' });
  });
});
