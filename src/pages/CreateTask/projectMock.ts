export type SupportedLanguages = 'en' | 'pt' | 'es';

export interface CodingProject {
  id: string;
  name: string;
  client: string;
  clientName: string;

  createdAt: string;
  codes: string;
  status: number;
  language: SupportedLanguages;
}

export const projectsMock: CodingProject[] = [
  {
    id: '0001',
    name: 'Projeto Teste Eugenio',
    client: '1',
    clientName: 'Bradesco',
    createdAt: '11/08/2023',
    codes: '5 codings',
    status: 1,
    language: 'en',
  },
  {
    id: '0002',
    name: 'Teste Pedro',
    client: '2',
    clientName: 'Nubank',
    createdAt: '11/08/2023',
    codes: '2 codings',
    status: 2,
    language: 'en',
  },
  {
    id: '0003',
    name: 'Projeto Marcos',
    client: '2',
    clientName: 'Nubank',
    createdAt: '11/08/2023',
    codes: '7 codings',
    status: 3,
    language: 'en',
  },
  {
    id: '0004',
    name: 'Secundario Teste Eugenio',
    client: '1',
    clientName: 'Bradesco',
    createdAt: '11/08/2023',
    codes: '3 codings',
    status: 1,
    language: 'pt',
  },
  {
    id: '0005',
    name: 'Proj Autorizado',
    client: '2',
    clientName: 'Nubank',
    createdAt: '11/08/2023',
    codes: '1 coding',
    status: 2,
    language: 'pt',
  },
  {
    id: '0006',
    name: 'Testando Funcionalidades',
    client: '1',
    clientName: 'Bradesco',
    createdAt: '11/08/2023',
    codes: '2 codings',
    status: 2,
    language: 'pt',
  },
  {
    id: '0007',
    name: 'Aprovado Teste Pedro',
    client: '2',
    clientName: 'Nubank',
    createdAt: '11/08/2023',
    codes: '5 codings',
    status: 2,
    language: 'es',
  },
  {
    id: '0008',
    name: 'Joao Test',
    client: '1',
    clientName: 'Bradesco',
    createdAt: '11/08/2023',
    codes: '8 codings',
    status: 3,
    language: 'es',
  },
];
