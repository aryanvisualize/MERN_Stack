import { timeStamp } from 'console';
import mongoose from 'mongoose';
import { type } from 'os';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], //Array of Sub-Todos
  },
  { timeStamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
