import { CreateUserService } from '../services';

export class CreateMockController {
    constructor() { }

    public async createMock() {
        const service = new CreateUserService();
        try{
            await service.create();
            return {status:200, message: "Mock is created!."};
        }catch{
            return {status:404, message: "Couldn't create mock"};
        }
        
    };
}