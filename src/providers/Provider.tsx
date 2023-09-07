'use client'

import { PropsWithChildren } from 'react'
import { Provider } from "react-redux";
import { store } from '../store/store'

export default function Providers({ children }: PropsWithChildren<unknown>) {
	return (
    <Provider store={store}>
      {children}
    </Provider>
	)
}