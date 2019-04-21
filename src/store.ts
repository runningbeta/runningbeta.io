import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

export interface IStoreState {
  isSidebarVisible: boolean;
}

// Actions
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export type TOGGLE_SIDEBAR = typeof TOGGLE_SIDEBAR;
export interface IToggleSidebar {
  type: TOGGLE_SIDEBAR;
}
export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });

// Reducer
export const reducer = (state: IStoreState, action: IToggleSidebar): IStoreState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarVisible: !state.isSidebarVisible };
    default:
      return state;
  }
};

// Store
export const initialState: IStoreState = { isSidebarVisible: false };
export const store = createStore<IStoreState>(
  reducer,
  initialState,
  devToolsEnhancer({}),
);
