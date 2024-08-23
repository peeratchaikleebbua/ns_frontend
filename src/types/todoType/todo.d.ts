import { ApiResponseType } from "../hookType/useFetchType";
import * as yup from "yup";

export const todoSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export type TodoViewType = {
  todoList: TodoType[] | undefined;
  // updatedTodo: (
  //   id: string,
  //   updatedTodo: TodoPutBodyRequestType
  // ) => Promise<void>;
};

export type TodoErrorFormType = { isValid: boolean };

export type TodoDialogType = {
  open: boolean;
  handleClose: () => void;
  todoData: TodoType | null;
  isEdit: boolean;
  onSave: (updatedTodoValues: TodoPutBodyRequestType) => Promise<void>;
  onCreate: (createdTodoValues: TodoPostBodyRequestType) => Promise<void>
};

export type TodoType = {
  id: string;
  title: string;
  description: string;
  created_by: UserType;
  created_at: Date;
  updated_at: Date;
};

export type TodoCardType = TodoType & {
  handleOpenDialog: (todo: TodoType) => void;
  onDelete: (id: string) => promise<void>;
};

export type TodoCreateButtonType = {
  handleCreate: () => void
}

// api type

export type TodoPostBodyRequestType = {
  title: string;
  description: string;
};

export type UserType = {
  id: string;
  username: string;
};

export type TodoPostResponseType = ApiResponseType & {
  data: TodoType;
};

export type TodoGetAllResponseType = ApiResponseType & {
  data: TodoType[];
};

export type TodoGetByIdResponseType = ApiResponseType & {
  data: TodoType;
};

export type TodoDeleteRequestParamsType = ApiResponseType & {
  id: string;
};

export type TodoGetRequestParamsType = ApiResponseType & {
  id: string;
};

export type TodoPutBodyRequestType = {
  title: string;
  description: string;
};

export type TodoPutResponseType = ApiResponseType & {
  data: TodoPutBodyRequestType;
};

export type TodoPatchBodyRequestType = {
  title: string;
  description: string;
};

export type TodoPatchResponseType = ApiResponseType & {
  data: TodoPatchBodyRequestType;
};

export type TodoDeleteResponseType = ApiResponseType;
