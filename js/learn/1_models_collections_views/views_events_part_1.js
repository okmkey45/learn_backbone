var Song = Backbone.Model.extend({})

var SongView = Backbone.View.extend({
    events: {
        click: 'listen',
        'click .bookmark': 'bookmark',
    },
    listen: function () {
        console.log('listen clicked')
    },
    bookmark: function (ev) {
        ev.stopPropagation()
        console.log('bookmark clicked')
    },
    render: function () {
        var buttons = '<button>Listen</button><button class="bookmark">Bookmark</button>'
        this.$el.html('Song: ' + this.model.get('title') + "<br>" + buttons)
        return this
    }
})

var song = new Song({ title: 'Rainbow in the dark' })

var songView = new SongView({ el: '#app1', model: song })
songView.render()
