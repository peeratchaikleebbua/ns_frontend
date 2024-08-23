import { NextResponse } from 'next/server';
import { patchServerFetch, putServerFetch, deleteFetch } from '@/hooks/useFetchServerSide';
import { TodoPatchResponseType, TodoPutResponseType, TodoDeleteResponseType } from '@/types/todoType/todo';

// Helper function to get the ID from params
const getIdFromParams = (params: { id: string | string[] }) => {
  if (Array.isArray(params.id)) {
    return params.id.join('/');
  }
  return params.id; // Handle single segment directly
};

// Handler for partially updating a specific todo by ID
export async function PATCH(request: Request, { params }: { params: { id: string | string[] } }) {
  try {
    const id = getIdFromParams(params); // Use the helper function
    const body = await request.json();
    const updatedTodo = await patchServerFetch<TodoPatchResponseType>(`todo/${id}`, body);
    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error('Error patching todo:', error);
    return NextResponse.error();
  }
}

// Handler for updating a specific todo by ID
export async function PUT(request: Request, { params }: { params: { id: string | string[] } }) {
  try {
    const id = getIdFromParams(params); // Use the helper function
    const body = await request.json();
    const updatedTodo = await putServerFetch<TodoPutResponseType>(`todo/${id}`, body);
    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error('Error updating todo:', error);
    return NextResponse.error();
  }
}

// Handler for deleting a specific todo by ID
export async function DELETE(request: Request, { params }: { params: { id: string | string[] } }) {
  try {
    const id = getIdFromParams(params); // Use the helper function
    await deleteFetch<TodoDeleteResponseType>(`todo/${id}`);
    return NextResponse.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    return NextResponse.error();
  }
}
