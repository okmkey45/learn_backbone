var Song = Backbone.Model.extend({})

var Songs = Backbone.Collection.extend({
    model: Song
})

var SongView = Backbone.View.extend({
    tagName: 'li',
    render: function () {
        this.$el.html('Song: ' + this.model.get('title'))
        return this
    }
})

var SongCollectionView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function () {
        this.model.on('add', this.onSongAdded, this)
        this.model.on('remove', this.onSongRemoved, this)
    },
    onSongAdded: function (song) {
        console.log('song added')
        var songView = new SongView({ model: song })
        this.$el.append(songView.render.$el)
    },
    onSongAdded: function (song) {
        console.log('song removed')
        this.$('li#' + song.id).remove()
    },
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
var songCollectionView = new SongCollectionView({ el: '#app1', model: songList })

songCollectionView.render()
