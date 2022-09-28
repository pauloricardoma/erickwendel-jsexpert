const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')
;
(async() => {
  {
    const filePath = './mocks/invalid-header.csv'
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/fourItems-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/threeItems-valid.csv'
    const result = await File.csvToJson(filePath)
    const expected = [
      {
        "id": 123,
        "name": "Erick Wendel",
        "profession": "JavaScript Instructor",
        "birthday": 1995
      },
      {
        "id": 321,
        "name": "Xuxa da Silva",
        "profession": "JavaScript Specialist",
        "birthday": 1942
      },
      {
        "id": 188,
        "name": "Paulo Ricardo",
        "profession": "JavaScript Future Specialist",
        "birthday": 1989
      }
    ]
    
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }
})()