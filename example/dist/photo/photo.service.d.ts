import { Photo } from './photo.entity';
import { Repository } from 'typeorm';
export declare class PhotoService {
    private readonly photoRepository;
    constructor(photoRepository: Repository<Photo>);
}
