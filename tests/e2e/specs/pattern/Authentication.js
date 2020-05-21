import { Auth } from '../../../../generated/core/Auth';
import { ApiService } from '../../../../generated/services/ApiService';
import { OpenAPI } from '../../../../generated/core/OpenAPI';
import { SpecialOperationInfo } from '../../../../generated/core/ApiInfo';
import { AuthenticationService } from '../../../../generated/services/AuthenticationService';

const dummyFn = params => Promise.resolve();
const API = {
  login:
    AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin || dummyFn,
  token:
    AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken || dummyFn,
  apis: ApiService.getApiServiceRcmsApi1Apis || dummyFn,
};

describe('Authentication pattern.', () => {
  // Token based system & has Login feature.
  if (OpenAPI.SECURITY['Token-Auth'] && SpecialOperationInfo.login) {
    it('should not be 401: requests login -> token -> apis.', async () => {
      const res = await API.login({
        requestBody: { email: 'test', password: 'qwer1234' },
      });
      const { access_token, refresh_token } = await API.token({
        requestBody: { grant_token: res.grant_token },
      });
      Auth.setAccessToken(access_token);
      Auth.setRefreshToken(refresh_token);

      let error;
      await ApiService.getApiServiceRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.not.be.true;
    });
  }

  // Token based system & no Login feature.
  if (OpenAPI.SECURITY['Token-Auth'] && !SpecialOperationInfo.login) {
    it('should not be 401: requests token -> apis.', async () => {
      const { access_token, refresh_token } = await API.token({
        requestBody: { grant_token: res.grant_token },
      });
      Auth.setAccessToken(access_token);
      Auth.setRefreshToken(refresh_token);

      let error;
      await ApiService.getApiServiceRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.not.be.true;
    });
  }

  // Cookie based system & has Login feature.
  if (!OpenAPI.SECURITY['Token-Auth'] && SpecialOperationInfo.login) {
    it('should not be 401: requests login -> apis.', async () => {
      const res = await API.login({
        requestBody: { email: 'test', password: 'qwer1234' },
      });

      let error;
      await ApiService.getApiServiceRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.not.be.true;
    });
  }

  // Cookie based system & no Login feature.
  if (!OpenAPI.SECURITY['Token-Auth'] && !SpecialOperationInfo.login) {
    it('should not be 401: requests apis.', async () => {
      let error;
      await ApiService.getApiServiceRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.not.be.true;
    });
  }
});
