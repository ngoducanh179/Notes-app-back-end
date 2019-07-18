const fs = require('fs')
const chalk = require('chalk')
const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title
    // })
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('note removed !'))
        saveNotes(notesToKeep)
    } else if (notes.length = notesToKeep.length) {
        console.log(chalk.red.inverse('No note Found !'))
    }


}
const listNotes = (note) => {
    const notes = loadNotes()

    console.log(chalk.green.inverse('your Note !'))

    notes.forEach(note => {
        console.log(`${note.title}`)
    });

}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => {
        return note.title === title
    })
    if (findNote) {
        console.log(findNote)
    }
    else if (!findNote) {
        console.log(chalk.red.inverse('Note not Found'))

    }

}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}