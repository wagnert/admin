import {LoginDto} from './login.dto';

describe('LoginDto', () => {

    it('test getter/setter for username', () => {
        let dto = new LoginDto();
        dto.username = 'appserver';
        expect(dto.username).toEqual('appserver');
    });

    it('test getter/setter for password', () => {
        let dto = new LoginDto();
        dto.password = 'appserver.i0';
        expect(dto.password).toEqual('appserver.i0');
    });
});