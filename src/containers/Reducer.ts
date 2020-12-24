import { ITasks, ITask } from "../containers/App/App";

export interface Action {
  type: string;
  data: ITask;
}

const Reducer = (state: ITasks, action: Action): ITasks => {
  switch (action.type) {
    case "create":
      return {
        ...state,
        tasks: [...state.tasks, { id: action.data.id, name: action.data.name }],
      };
    case "remove":
      return state;
    default:
      return assertUnreachable(action.type);
  }
};

const assertUnreachable = (actionType: string): never => {
  throw new Error("Unreachable code");
};

export default Reducer;
