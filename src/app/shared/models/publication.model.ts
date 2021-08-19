import { User } from './user.model';

export class Publication {
    constructor(
        public user: User,
        public description: string,
        public imgUrl: string,
        public key: string
    ) { }
}