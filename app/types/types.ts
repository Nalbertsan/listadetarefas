// eslint-disable-next-line camelcase
import { Leckerli_One } from 'next/font/google';

export const leckFont = Leckerli_One({ weight: '400', subsets: ['latin'] });

export type taskType = {
  id?: number,
  title: string,
  description: string,
  status: 'pendente' | 'executando' | 'concluida',
  date: string,
}

export type selectOptions = {
  [key: string]: string;
}
