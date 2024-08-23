import { NextResponse } from 'next/server';
import { getServerFetch, postServerFetch } from '@/hooks/useFetchServerSide';
import { TodoGetAllResponseType, TodoPostResponseType } from '@/types/todoType/todo';

// Handler for fetching all todos
export async function GET() {
  try {
    const todos = await getServerFetch<TodoGetAllResponseType>('todo');
    return NextResponse.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    return NextResponse.error();
  }
}

// Handler for creating a new todo
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newTodo = await postServerFetch<TodoPostResponseType>('todo', body);
    return NextResponse.json(newTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
    return NextResponse.error();
  }
}
