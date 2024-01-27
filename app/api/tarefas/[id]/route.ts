import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { taskType } from '@/app/types/types';

type propsID = {
  params: { id: string }
}

export async function PUT(request: NextRequest, { params }:propsID) {
  const id = parseInt(params.id, 10);
  const data: taskType = await request.json();
  const updateTask = await prisma?.tarefa.update({
    where: {
      id,
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

export async function DELETE(request: NextRequest, { params }:propsID) {
  const id = parseInt(params.id, 10);
  const deleteTask = await prisma?.tarefa.delete({
    where: {
      id,
    },
  });
  return NextResponse.json({ message: 'sucesso!' });
}
