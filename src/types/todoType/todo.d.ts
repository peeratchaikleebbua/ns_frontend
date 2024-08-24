import * as yup from "yup";
import { ApiResponseType } from "../hookType/useFetchType";

export const todoSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const todoIdParamsSchema = yup.string().required("id is required")

export type TodoViewType = {
  todoList: TodoType[];
  username: string | undefined;
};

export type TodoErrorFormType = { isValid: boolean };

export type TodoDialogType = {
  open: boolean;
  handleClose: () => void;
  todoData: TodoType | null;
  isEdit: boolean;
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
  username: string | undefined;
  handleOpenDialog: (todo: TodoType) => void;
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
