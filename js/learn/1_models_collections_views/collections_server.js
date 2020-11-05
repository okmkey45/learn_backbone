var Song = Backbone.Model.extend()

var Songs = Backbone.Collection.extend({
    model: Song,
    // url para saber a que url se hacen las peticiones de fetch, save, destroy
    url: '/api/songs',
})

var songs = new Songs()
// request get a /api/songs
songs.fetch()

// request get a /api/songs?page=2
songs.fetch({
    data: {
        page: 2
    },
    success: function () {
        console.log('fetch exitoso')
    },
    error: function () {
        console.log('fetch con error')
    }
})