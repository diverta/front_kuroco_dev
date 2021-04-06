import { Auth } from '../../../../generated/core/Auth';
import { ApiService } from '../../../../generated/services/ApiService';
import { OpenAPI } from '../../../../generated/core/OpenAPI';
import { LocalStorage } from '../../../../generated';

import { ApiInfos } from './../../../../generated/core/ApiInfo';
const loginApis = ApiInfos.filter(info => info.auth === 'LOGIN')
const hasLoginEndpoint = loginApis.length > 0;

import { testMember } from '../../base';

// This test is only for token based system & has Login feature.
if (OpenAPI.SECURITY['Token-Auth'] && hasLoginEndpoint) {
  describe('using Auth module with Token based system & has Login feature.', () => {
    it('should not be 401: requests login -> token -> apis.', async () => {
      await Auth.login({
        requestBody: { email: testMember.email, password: testMember.password },
      });
      await ApiService.getRcmsApi1Apis({});

      let error;
      await ApiService.getRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.not.be.true;
    });
    it('should recover access_token automatically and retry request when a request is 401.', async () => {
      await Auth.login({
        requestBody: { email: testMember.email, password: testMember.password },
      });
      await ApiService.getRcmsApi1Apis({});
      LocalStorage.setAccessToken('INVALID_VALUE');

      let error;
      await ApiService.getRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.not.be.true;
    });
    it('should refresh_token is unrelated when access_token is valid.', async () => {
      await Auth.login({
        requestBody: { email: testMember.email, password: testMember.password },
      });
      await ApiService.getRcmsApi1Apis({});
      LocalStorage.setRefreshToken('INVALID_VALUE');

      let error;
      await ApiService.getRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.not.be.true;
    });
    it('should return error if both of access_token and refresh_token are invalid.', async () => {
      await Auth.login({
        requestBody: { email: testMember.email, password: testMember.password },
      });
      await ApiService.getRcmsApi1Apis({});
      LocalStorage.setAccessToken('INVALID_VALUE');
      LocalStorage.setRefreshToken('INVALID_VALUE');

      let error;
      await ApiService.getRcmsApi1Apis({}).catch(
        () => (error = true)
      );
      expect(error).to.be.true;
    });
  });
}
