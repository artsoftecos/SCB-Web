/*import { Convocatory } from '../models/convocatory';

const CONVOCATORIES: Convocatory[] = [
  { id: 1, name: 'Conv. 1' },
  { id: 2, name: 'Conv. 2' },
  { id: 3, name: 'Conv. 3' },  
];
*/

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryConvocatoryDataService implements InMemoryDbService {
  createDb() {
    const convocatories = [
      { id: 1,  name: 'Conv. 1', capacity: 5 },
      { id: 2, name: 'Conv. 2', capacity: 3 },
      { id: 3, name: 'Conv. 3', capacity: 10 }      
    ];
    return {convocatories};
  }
}
