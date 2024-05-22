export interface PresidenciaNacional {
  votosDistritos:         VotosDistritos;
  votoExtranjero:         VotoExtranjero;
  anticipado:             Anticipado;
  prisionPreventiva:      PrisionPreventiva;
  votosPartidosPoliticos: VotosPartidosPoliticos;
}

export interface Anticipado {
  resumenVotacion:  AnticipadoResumenVotacion;
  votos:            AnticipadoVoto[];
  detalleVotos:     AnticipadoDetalleVotos;
  estadisticaVotos: AnticipadoEstadisticaVoto[];
}

export interface AnticipadoDetalleVotos {
  header: Header[];
  body:   PurpleBody[];
}

export interface PurpleBody {
  entidad:       string;
  votosPartidos: number[];
  noRegistradas: string;
  nulos:         string;
  totalVotos:    string;
}

export interface Header {
  partidos: string[];
  texto?:   string;
  partido?: string;
  orden?:   number;
}

export interface AnticipadoEstadisticaVoto {
  tipoCasilla:            string;
  totalVotos:             string;
  totalListaNominal:      string;
  participacionCiudadana: string;
}

export interface AnticipadoResumenVotacion {
  acumulados:    Acumulados;
  nulos:         Acumulados;
  noRegistradas: Acumulados;
  totalVotos:    Acumulados;
}

export interface Acumulados {
  total:      string;
  porcentaje: string;
}

export interface AnticipadoVoto {
  partido:      string;
  orden:        number;
  coalicion:    string;
  partidos:     string[];
  votosPartido: string;
  porcentaje:   string;
}

export interface PrisionPreventiva {
  resumenVotacion:  AnticipadoResumenVotacion;
  votos:            AnticipadoVoto[];
  detalleVotos:     PrisionPreventivaDetalleVotos;
  estadisticaVotos: AnticipadoEstadisticaVoto[];
}

export interface PrisionPreventivaDetalleVotos {
  header: Header[];
  body:   FluffyBody[];
}

export interface FluffyBody {
  entidad:       string;
  votosPartidos: Array<number | string>;
  noRegistradas: string;
  nulos:         string;
  totalVotos:    string;
}

export interface VotoExtranjero {
  resumenVotacion:  AnticipadoResumenVotacion;
  votos:            AnticipadoVoto[];
  detalleVotos:     VotoExtranjeroDetalleVotos;
  estadisticaVotos: VotoExtranjeroEstadisticaVoto[];
}

export interface VotoExtranjeroDetalleVotos {
  header: Header[];
  body:   TentacledBody[];
}

export interface TentacledBody {
  entidad:          string;
  url:              string;
  actaDigitalizada: ActaDigitalizada;
  votosPartidos:    string[];
  noRegistradas:    string;
  nulos:            string;
  totalVotos:       string;
}

export enum ActaDigitalizada {
  E = "E",
}

export interface VotoExtranjeroEstadisticaVoto {
  tipoCasilla:            string;
  totalVotos:             string;
  totalListaNominal:      number;
  participacionCiudadana: string;
}

export interface VotosDistritos {
  resumenVotacion: VotosDistritosResumenVotacion;
  votos:           VotosDistritosVoto[];
  votosTotal:      string;
}

export interface VotosDistritosResumenVotacion {
  acumulados:    Acumulados;
  nulos:         Acumulados;
  noRegistradas: Acumulados;
  totalVotos:    TotalVotos;
}

export interface TotalVotos {
  total:             string;
  porcentaje:        string;
  totalProporcional: number;
}

export interface VotosDistritosVoto {
  partido:                string;
  votos:                  string;
  orden:                  number;
  partidos:               string[];
  votosExtranjero:        number;
  votosEntidad:           string;
  porcentaje:             string;
  ganador:                boolean;
  candidatoPropietario:   string;
  urlImagen:              string;
  candidatoSuplente:      string;
  porcentajeProporcional: string;
}

export interface VotosPartidosPoliticos {
  resumenVotacion: VotosDistritosResumenVotacion;
  votos:           VotosPartidosPoliticosVoto[];
}

export interface VotosPartidosPoliticosVoto {
  partido:                string;
  partidos:               string[];
  orden:                  number;
  votos:                  string;
  porcentaje:             string;
  porcentajeProporcional: string;
  votosExtranjero:        string;
  votosEntidad:           string;
}
