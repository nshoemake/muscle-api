// DEPENDENCIES
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const musclesData = {
    'chest': {
        'anatomicalName': 'pectoralis major',
        'exercies': 'bench press, dumbbell press, push-ups',
        'MEV': '',
        'photo': ''
    },
    'back': {
        'anatomicalName': '',
        'exercies': '',
        'MEV': '',
        'photo': ''
    },
    'shoulders': {
        'anatomicalName': '',
        'exercies': '',
        'MEV': '',
        'photo': ''
    },
    'biceps': {
        'anatomicalName': '',
        'exercies': '',
        'MEV': '',
        'photo': ''
    },
    'triceps': {
        'anatomicalName': '',
        'exercies': '',
        'MEV': '',
        'photo': ''
    },
    'forearms': {
        'anatomicalName': '',
        'exercies': '',
        'MEV': '',
        'photo': ''
    },
    'abs': {
        'anatomicalName': '',
        'exercies': '',
        'MEV': '',
        'photo': ''
    },
    'glutes': {
        'anatomicalName': '',
        'exercies': '',
        'MEV': '',
        'photo': ''
    },
    'quads': {
        'anatomicalName': '',
        'exercies': '',
        'MEV': '',
        'photo': ''
    },
    'hamstrings': {
        'anatomicalName': '',
        'exercies': '',
        'MEV': '',
        'photo': ''
    },
    'calves': {
        'anatomicalName': '',
        'exercies': '',
        'MEV': '',
        'photo': ''
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")

})

app.get('/api/:muscleGroup', (req, res) => {
    const muscleName = req.params.muscleGroup.toLowerCase()
    if (musclesData[muscleName]) {
        res.json(musclesData[muscleName])
    } else {
        res.json(musclesData)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is LIFTING, BRO');
})