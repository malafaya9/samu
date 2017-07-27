import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): Promise<UF[]> {
    return Promise.resolve(UFs);
  }
  getUF(id:number): Promise<UF> {
    return Promise.resolve(UFs.find(uf => uf.id==id));
  }
}
