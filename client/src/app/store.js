/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { authApi } from '@/features/api/authApi';


export const appStore = configureStore({
    reducer: rootReducer,
middleware: (DefaultMiddleware) => DefaultMiddleware().concat(authApi.middleware),
    
});