var Song = Backbone.Model.extend({})

var SongView = Backbone.View.extend({
    // start - inicializacion especificada
    // solo funciona para custom init
    tagName: 'span',
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



// simple init
var rainbow = new Song({ title: 'Rainbow in the dark' })
var songViewApp1 = new SongView({ el: '#app1', model: rainbow })
songViewApp1.render()


// custom init
// var songViewApp2 = new SongView()
// $('#app2').html(songViewApp2.render().$el)
