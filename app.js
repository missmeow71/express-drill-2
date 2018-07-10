const express = require('express')
const cors = require('cors')

const data = [
  {
    id: 1,
    fullName: 'Kyle Coberly',
    title: 'Faculty Director',
    numberOfDogs: 0
  },
  {
    id: 2,
    fullName: 'Danny Fritz',
    title: 'Lead Instructor',
    numberOfDogs: 0
  },
  {
    id: 3,
    fullName: 'CJ Reynolds',
    title: 'Lead Instructor',
    numberOfDogs: 0
  },
  {
    id: 4,
    fullName: 'Brooks Patton',
    title: 'Lead Instructor',
    numberOfDogs: 0
  },
  {
    id: 5,
    fullName: 'Roberto Ortega',
    title: 'Lead Instructor',
    numberOfDogs: 0
  },
  {
    id: 6,
    fullName: 'Chad Drummond',
    title: 'Instructor',
    numberOfDogs: 0
  },
  {
    id: 7,
    fullName: 'Kim Schlesinger',
    title: 'Instructor',
    numberOfDogs: 0
  },
  {
    id: 8,
    fullName: 'Peter Ostiguy',
    title: 'Associate Instructor',
    numberOfDogs: 0
  },
  {
    id: 9,
    fullName: 'Cass Torske',
    title: 'Resident',
    numberOfDogs: 0
  },
  {
    id: 10,
    fullName: 'Matt Winzer',
    title: 'Resident',
    numberOfDogs: 0
  },
  {
    id: 11,
    fullName: 'Aaron Goodman',
    title: 'Resident',
    numberOfDogs: 0
  },
  {
    id: 12,
    fullName: 'Michelle Bergquist',
    title: 'Resident',
    numberOfDogs: 0
  }
]

let port = process.env.PORT || 3000

function findById(data, id) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return null
}

const app = express()
app.use(cors())

app.get('/', (request, response) => {
  response.json({data})
})

app.get('/:id', (request, response) => {
  var result = findById(data, request.params.id)
  if (!result) {
    response.status(404).json({
      error: {
        message: 'No record found!'
      }
    })
  } else {
    response.json({data: result})
  }
})

app.listen(port)