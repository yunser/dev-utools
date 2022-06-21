// const md5 = require('md5')
// import md5 from 'md5'
import Color from 'color'
const fs = require('fs')
// 不起作用？
// import * as fs from 'fs'
// console.log('fs', fs.readFileSync)
// console.log('Node version is: ' + process.version);
// console.log('version', process.versions)


const dbPath = '/Users/yunser/data/url/data.json'



async function main() {
    
    utools.onPluginEnter(({ code, type, payload }) => {
        console.log('用户进入插件5', code, type, payload)
        // 用户进入插件5 hex_to_rgb regex #fff
        if (code == 'hex_to_rgb') {
            const hex = payload
            const rgbArr = Color(hex).rgb().array()
            const code = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`
            console.log('code', code)
            utools.copyText(code)
            window.utools.hideMainWindow()
            window.utools.outPlugin()
        }
        // console.log('md5', md5)
        // return
        // if (code == '链接编辑') {
        //     window.utools.hideMainWindow()
        //     window.utools.outPlugin()
        //     // Note: If you are using VS Code Insiders builds, the URL prefix is vscode-insiders://.
        //     utools.shellOpenExternal(`vscode://file${dbPath}`)
        // }
        // else if (code.includes(code_prefix)) {
        //     const item = urls.find(u => code_prefix + u.id == code)
        //     if (item) {
        //         console.log('找到', item)
        //         utools.shellOpenExternal(item.url)
        //         // utools.showNotification('hello')
        //         window.utools.hideMainWindow()
        //         window.utools.outPlugin()
        //     }
        // }
    })
}

main()

window._plugin = {
}
