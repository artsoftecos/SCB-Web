/*import { Convocatory } from '../models/convocatory';

const CONVOCATORIES: Convocatory[] = [
  { id: 1, name: 'Conv. 1' },
  { id: 2, name: 'Conv. 2' },
  { id: 3, name: 'Conv. 3' },  
];
*/

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TypeRoles } from '../models/type-roles.enum'

export class InMemoryConvocatoryDataService implements InMemoryDbService {
  createDb() {
    const convocatories = [
      { id: 1,  name: 'Conv. 1', capacity: 5 },
      { id: 2, name: 'Conv. 2', capacity: 3 },
      { id: 3, name: 'Conv. 3', capacity: 10 }      
    ];
    const users = [
      { role: TypeRoles.Administrator,  name: 'soy Admin 1', email: "admin@icetex.gov.co" },
      { role: TypeRoles.Oferent,  name: 'soy Oferente 1', email: "oferent@carolina.gov.co" },
      { role: TypeRoles.Solicitant,  name: 'soy silicitante 1', email: "soliciatnte@yo.gov.co" }
    ];    
    return {convocatories, users};
  }
}
