import { FileReaderService } from './index';


export class TextFileReaderService extends FileReaderService {

	constructor() {
		super('readAsText');
	}

}
