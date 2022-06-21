import { useEffect, useState } from 'react'
import './app.less'

console.log('_plugin', window._plugin)

function App() {
    useEffect(() => {
        // setList(window._plugin.getList())
        // setConfigPath(window._plugin.getConfigPath())
    }, [])

    return (
        <div className="app">
            插件异常
        </div>
    )
}
export default App
