import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return Promise.resolve(VALORES);
  }
  getMunicipiosAtendidosDeUmEstado(id:any): Promise<Dados[]> {
    return Promise.resolve(VALORES.filter(municipio => municipio.uf_id==id));
  }
}
