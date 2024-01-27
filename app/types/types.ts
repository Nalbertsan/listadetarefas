export type taskType = {
  id?: number,
  title?: string,
  description?: string,
  status?: 'pendente' | 'executando' | 'concluida',
  date?: string,
}

export type selectOptions = {
  [key: string]: string;
}
