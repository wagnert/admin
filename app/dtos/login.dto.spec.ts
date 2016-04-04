import {LoginDto} from './login.dto';

describe('LoginDto', () => {

    it('test getter/setter for username', () => {
        let dto = new LoginDto();
        dto.username = 'appserver';
        expect(dto.username).toEqual('appserver');
    });
});