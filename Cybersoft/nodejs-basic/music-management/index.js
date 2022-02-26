const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')

const loadFile = () => {
    try {
        const dataJSON = fs.readFileSync('music.json')
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

yargs.command({
    command: "find-all-music",
    handler: () => {
        const data = loadFile()
        console.log(data)
    }
})

yargs.command({
    command: "create-music",
    handler: (params) => {
        const data = loadFile()
        const {name, auth} = params
        const newMusic = { id: data.length + 1, name, auth}
        const musicListUpdate = [...data, newMusic]
        fs.writeFileSync('./music.json', JSON.stringify(musicListUpdate))
        console.log(chalk.green.inverse('Add new music success'))
    }
})

yargs.command({
    command: "remove-music",
    handler: (params) => {
        const data = loadFile()
        const {id} = params
        const musicListUpdate = data.filter(item => item.id !== id)
        fs.writeFileSync('./music.json', JSON.stringify(musicListUpdate))
        console.log(chalk.green.inverse('Remove music success'))
    }
})

yargs.command({
    command: "update-music",
    handler: () => {
        const data = loadFile()
        console.log(data)
    }
})

yargs.parse()