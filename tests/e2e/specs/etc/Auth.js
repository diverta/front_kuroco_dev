import { Auth } from '../../../../generated/core/Auth';
import { ApiService } from '../../../../generated/services/ApiService';
import { OpenAPI } from '../../../../generated/core/OpenAPI';
import { SpecialOperationInfo } from '../../../../generated/core/ApiInfo';

// This test is only for token based system & has Login feature.
if (OpenAPI.SECURITY['Token-Auth'] && SpecialOperationInfo.login) {
  describe('using Auth module with Token based system & has Login feature.', () => {
    it('should not be 401: requests login -> token -> apis.', async () => {
      await Auth.login({
        requestBody: { email: 'test', password: 'qwer1234' },
      });
      await ApiService.getApiServiceRcmsApi1Apis({});

      let error;
      await ApiService.getApiServiceRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.not.be.true;
    });
    it.only('should recover access_token automatically and retry request when a request is 401.', async () => {
      await Auth.login({
        requestBody: { email: 'test', password: 'qwer1234' },
      });
      await ApiService.getApiServiceRcmsApi1Apis({});
      Auth.setAccessToken('INVALID_VALUE');

      let error;
      await ApiService.getApiServiceRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.not.be.true;
    });
    it('should refresh_token is unrelated when access_token is valid.', async () => {
      await Auth.login({
        requestBody: { email: 'test', password: 'qwer1234' },
      });
      await ApiService.getApiServiceRcmsApi1Apis({});
      Auth.setRefreshToken('INVALID_VALUE');

      let error;
      await ApiService.getApiServiceRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.not.be.true;
    });
    it('should return error if both of access_token and refresh_token are invalid.', async () => {
      await Auth.login({
        requestBody: { email: 'test', password: 'qwer1234' },
      });
      await ApiService.getApiServiceRcmsApi1Apis({});
      Auth.setAccessToken('INVALID_VALUE');
      Auth.setRefreshToken('INVALID_VALUE');

      let error;
      await ApiService.getApiServiceRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.be.true;
    });
  });
}
