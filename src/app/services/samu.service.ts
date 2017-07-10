import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }
  getMunicipiosAtendidosDeUmEstado(id:any): Dados[] {
    return VALORES.filter(municipio => municipio.uf_id==id);
  }
}
