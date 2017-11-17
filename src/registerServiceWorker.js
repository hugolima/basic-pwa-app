/* eslint-disable no-console */

import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import registerEvents from 'serviceworker-webpack-plugin/lib/browser/registerEvents'

export default function register() {
  if ('serviceWorker' in navigator) {
    const registration = runtime.register()

    registerEvents(registration, {
      onInstalled: () => {
        console.log('onInstalled')
      },
      onUpdateReady: () => {
        console.log('onUpdateReady')
      },

      onUpdating: () => {
        console.log('onUpdating')
      },
      onUpdateFailed: () => {
        console.log('onUpdateFailed')
      },
      onUpdated: () => {
        console.log('onUpdated')
      },
    })
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => registration.unregister())
  }
}
