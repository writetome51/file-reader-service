/********************
Simplifies javascript's built-in FileReader class
( https://developer.mozilla.org/en-US/docs/Web/API/FileReader ).
 ********************/

export declare abstract class FileReaderService {

	private __readMethod;
	private readonly __data: FileReader;
	private __isReading;


	get isReading(): boolean;


	constructor(__readMethod: 'readAsText' | 'readAsDataURL' | 'readAsArrayBuffer' | 'readAsBinaryString');


	getContents(file: Blob): Promise<any>;
}
