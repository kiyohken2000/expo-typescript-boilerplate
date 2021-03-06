import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from './utils/store';
import Router from './routes'
import { UserDataContextProvider } from './contexts/UserDataContext';

import { imageAssets } from './theme/images';
import { fontAssets } from './theme/fonts';

export default function App() {
  // state
  const [didLoad, setDidLoad] = useState(false)

  // handler
  const handleLoadAssets = async () => {
    // assets preloading
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  // lifecycle
  useEffect(() => {
    handleLoadAssets()
  }, [])

  // rendering
  if (!didLoad) return <View />
  
  return (
    <Provider store={store}>
      <UserDataContextProvider>
        <Router />
      </UserDataContextProvider>
    </Provider>
  );
}
