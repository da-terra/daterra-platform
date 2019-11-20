export enum Action {
  Increment,
  Decrement
}

export type State = {
  currentIndex: number;
};

export const initialReducerState = {
  currentIndex: 0
};

export default (state: State, action: { type: Action; value?: any }) => {
  if (action.type === Action.Increment) {
    return { currentIndex: state.currentIndex + 1 };
  }

  if (action.type === Action.Decrement) {
    return { currentIndex: state.currentIndex - 1 };
  }

  return state;
};
