
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
    defaults: {
        genre: 'rock'
    },
    validate: function (attrs) {
        if (!attrs.title) {
            return 'Title is required'
        }
    },
    initialize: function () {
        console.log('A new song has been created')
    }
})

var newSong = new Song({
    title: 'Rainbow in the dark',
    artist: 'Corey Taylor'
})

newSong.set({
    type: 'cover',
    duration_min: 4
})
console.log(newSong)
console.log(newSong.toJSON())

console.log(newSong.get('title'))
console.log(newSong.get('artist'))
console.log(newSong.has('title'), newSong.has('duration_min'))
newSong.unset('duration_min')
console.log(newSong)

// newSong.clear() // el objeto es reactivo, cambia todos los logs
console.log(newSong)

var songWithoutTitle = new Song()
console.log(newSong.isValid(), songWithoutTitle.isValid())
console.log(newSong.validationError, songWithoutTitle.validationError)
