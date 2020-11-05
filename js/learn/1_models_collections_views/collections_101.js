var Song = Backbone.Model.extend()

var Songs = Backbone.Collection.extend({
    model: Song
})

var songList = new Songs([
    new Song({title: 'Song 1', genre: 'jazz'}),
    new Song({title: 'Song 2', genre: 'jazz'}),
    new Song({title: 'Song 3', genre: 'jazz'})
])

songList.add(new Song({title: 'Song 4', genre: 'rock'}))

console.log(songList)

// get de un model por su index
console.log(songList.at(0))

// get de un model por su "collection id"
// este id es asignado por backbone internamente
console.log(songList.get('c1'))

// songList.remove(songList.at(0))

songList.add(new Song({title: 'Song 5', genre: 'rock'}), {at: 0})

console.log(songList)

// metodos de busqueda son case sensitive
var rockSongs = songList.where({ genre: 'rock' })
var firstRockSong = songList.findWhere({ genre: 'rock' })

console.log('rock songs', rockSongs)
console.log('first rock song', firstRockSong)

var topDownloads = songList.filter(function (song) {
    return song.get('downloads') > 100
})

songList.each(function (song) {
    console.log(song)
})