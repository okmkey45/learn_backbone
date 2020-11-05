var Song = Backbone.Model.extend({})

var SongView = Backbone.View.extend({
    render: function () {
        var template = _.template($('#song-template').html())
        var html = template(this.model.toJSON())
        this.$el.html(html)
        return this
    }
})

var song = new Song({ title: 'Rainbow in the dark', plays: 10000 })

var songView = new SongView({ el: '#app1', model: song })
songView.render()
