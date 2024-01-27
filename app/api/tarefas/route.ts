import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { taskType } from '@/app/types/types';

export async function GET() {
  const AllList = await prisma?.tarefa.findMany();
  return NextResponse.json(AllList);
}

export async function POST(request: NextRequest) {
  const data: taskType = await request.json();
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
