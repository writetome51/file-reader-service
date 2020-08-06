# FileReaderService

Abstract TypeScript/JavaScript class that simplifies using [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader).  
Make subclasses that read a file as text, data url, array buffer, or binary string.

## Examples
```ts
export class TextFileReaderService extends FileReaderService {

    constructor(){
        super('readAsText');
    }

}

export class DataURLFileReaderService extends FileReaderService {

    constructor(){
        super('readAsDataURL');
    }

}
```

## Constructor
```ts
constructor(
    __readMethod: 'readAsText' | 'readAsDataURL' | 'readAsArrayBuffer' | 'readAsBinaryString'
) 
```

## Properties
```ts
isReading: boolean // read-only
```

## Methods
```ts
async getContents(file: Blob): Promise<any>
```


## Installation

`npm i @writetome51/file-reader-service`

## Loading
```js
import { FileReaderService } from '@writetome51/file-reader-service';
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
