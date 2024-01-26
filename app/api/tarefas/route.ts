/* eslint-disable import/extensions */
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

type typeTarefa = {
  id?: number,
  title: string,
  description: string,
  status: 'pendente' | 'executando' | 'concluida',
  date: string,
}

export async function GET() {
  const AllList = await prisma?.tarefa.findMany();
  return NextResponse.json(AllList);
}

export async function POST(request: NextRequest) {
  const data: typeTarefa = await request.json();
  console.log(data);
  const createTask = await prisma?.tarefa.create({
    data: {
      title: data.title,
      description: data.description,
      status: data.status,
      date: data.date,
    },
  });
  return NextResponse.json({ message: 'sucesso!' });
}

export async function PUT(request: NextRequest) {
  const data: typeTarefa = await request.json();
  console.log(data);
  const updateTask = await prisma?.tarefa.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      description: data.description,
      status: data.status,
      date: data.date,
    },

  });
  return NextResponse.json({ message: 'sucesso!' });
}

export async function DELETE(request: NextRequest) {
  const data: typeTarefa = await request.json();
  console.log(data);
  const deleteTask = await prisma?.tarefa.delete({
    where: {
      id: data.id,
    },
  });
  return NextResponse.json({ message: 'sucesso!' });
}
