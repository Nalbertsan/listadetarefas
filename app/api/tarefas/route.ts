/* eslint-disable import/extensions */
import { NextRequest,NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type typeTarefa = {
  title: string,
  description: string,
  status: 'pendente' | 'executando'| 'concluida',
  date?: string,
}

export async function GET(request:NextRequest) {
  const AllList = await prisma?.tarefa.findMany();
  return NextResponse.json(AllList);
}

export async function POST(request:NextRequest) {
  const data = await request.json();
  console.log(data);
  const createTask = await prisma?.tarefa.create({
    data: {
      title: data.title,
      description: 'poke',
      status: 'pendente',
      date: '1111-01-01T00:00:00Z',
    },
  });
  return NextResponse.json({ message: 'sucesso!' });
}
