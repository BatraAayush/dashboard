import {configureStore} from '@reduxjs/toolkit';
import dashboardReducer from "./features/dashboard/dashboard.slice"


export const store = configureStore({
    reducer:{dashboardReducer}
});