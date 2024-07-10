import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task from "../../models/Task";
import * as enums from "../../utils/enums/Task";

type TaskState = {
  itens: Task[];
};

const initialState: TaskState = {
  itens: [
    {
      id: 1,
      description: "lorem diasjkcmsm odjaojs ",
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDO,
      title: "Estudar react",
    },
    {
      id: 2,
      description: "lorem diasjkcmsm odjaojs ",
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE,
      title: "Ler x livros",
    },
    {
      id: 3,
      description: "lorem diasjkcmsm odjaojs ",
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDO,
      title: "Praticar ingles",
    },
  ],
};

const SliceTasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload),
      ];
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );

      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Task, "id">>) => {
      const taskExists = state.itens.find(
        (task) =>
          task.title.toLocaleLowerCase() ===
          action.payload.title.toLocaleLowerCase()
      );

      if (taskExists) {
        alert("Já existe uma tarefa com esse nome");
      } else {
        const lastTask = state.itens[state.itens.length - 1];
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1,
        };
        state.itens.push(newTask);
      }
    },
    alterState: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const taskIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );

      if (taskIndex >= 0) {
        state.itens[taskIndex].status = action.payload.finalizado
          ? enums.Status.CONCLUIDO
          : enums.Status.PENDENTE;
      }
    },
  },
});

export const { remove, edit, cadastrar, alterState } = SliceTasks.actions;

export default SliceTasks.reducer;
