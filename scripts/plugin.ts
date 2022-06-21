import fs, { access, mkdir } from 'fs-extra'
import chokidar from 'chokidar'
console.log('plugin.ts')

const plugin = {
    "main": "./index.html",
    "preload": "./main.js",
    "logo": "logo.png",
    "features": [
        {
            "code": "hex_to_rgb",
            "explain": "十六进制颜色代码转 RGB 颜色代码（选中复制并关闭）",
            "cmds": [
                {
                    "type": "regex",
                    "label": "HEX -> RGB",
                    // 注意: 正则表达式存如果在斜杠 "\" 需要多加一个，"\\" 
                    // 注意：“任意匹配的正则” 会被 uTools 忽视，如果要任意匹配请使用 "任意文本 - 关键字"。例如：/.*/ 、/(.)+/、/[\s\S]*/ ...
                    "match": "/^#[0-9a-fA-F]{3,6}$/",
                    // 最少字符数 (可选)
                    "minLength": 4,
                    // 最多字符数 (可选)
                    // "maxLength": 1
                }
            ]
        },
    ]
}

function writeManifest() {
    fs.writeFile('dist/plugin.json', JSON.stringify(plugin, null, 4))
}

fs.copy('logo.png', 'dist/logo.png')

writeManifest()

chokidar.watch(['src/plugin.ts'])
    .on('change', () => {
        console.log('change')
        writeManifest()
    })

export {}
