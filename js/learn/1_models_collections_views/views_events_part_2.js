var Song = Backbone.Model.extend({
    defaults: {
        listeners: 0
    }
})

var SongView = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', this.render, this)
    },
    events: {
        'click .add-listener': 'addListener'
    },
    addListener: function () {
        console.log('hello')
        this.model.set('listeners', this.model.get('listeners') + 1)
    },
    render: function () {
        var button = '<button class="add-listener">add listeners</button>'
        this.$el.html('Song: ' + this.model.get('title') + "<br> Listeners: " + this.model.get('listeners') + '<br>' + button)
        return this
    }
})

var song = new Song({ title: 'Rainbow in the dark' })

var songView = new SongView({ el: '#app1', model: song })
songView.render()
