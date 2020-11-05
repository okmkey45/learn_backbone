var Song = Backbone.Model.extend({})

var Songs = Backbone.Collection.extend({
    model: Song
})

var SongView = Backbone.View.extend({
    // start - inicializacion especificada
    // solo funciona para custom init
    tagName: 'li',
    className: 'mi-clase',
    id: 'id-repetido',
    attributes: {
        'data-genre': 'rock'
    },
    // end - inicializacion especificada
    render: function () {
        this.$el.html('Song: ' + this.model.get('title'))
        return this
    }
})

var SongCollectionView = Backbone.View.extend({
    render: function () {
        var self = this
        this.model.each(function (song) {
            var songView = new SongView({model: song})
            self.$el.append(songView.render().$el)
        })
    }
})

var songList = new Songs([
    new Song({ title: 'Rainbow in the dark' }),
    new Song({ title: 'best of you' }),
    new Song({ title: 'Whatever doesn\'t kill me' }),
])
var songCollectionView = new SongCollectionView({ el: '#songs-list', model: songList })

songCollectionView.render()
