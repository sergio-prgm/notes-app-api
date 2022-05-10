const { Schema, model } = require('mongoose')

const noteSchema = new Schema({
  content: String,
  date: Date,
  important: Boolean
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})
//  tranformación de la respuesta del objeto para que no incluya campos indeseados
//  importante para utilizar esos datos correctamente en el front

const Note = model('Note', noteSchema)

module.exports = Note

// schema solo a nivel de aplicación, no de db

// Note.find({}).then(result => {
//   console.log(result)
//   mongoose.connection.close()
// }).catch(err => console.error(err))

// const note = new Note({
//   content: 'nueva notota',
//   data: new Date(),
//   important: true
// })

// note.save()
//   .then(result => {
//     console.log(result)
//     mongoose.connection.close()
//   }).catch(err => console.error(err))
