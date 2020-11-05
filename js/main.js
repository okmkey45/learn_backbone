var ArtistView = Backbone.View.extend({
    render: function () {
        this.$el.html('Artists View')
        return this
    }
})

var AlbumsView = Backbone.View.extend({
    render: function () {
        this.$el.html('Albums View')
        return this
    }
})

var AlbumsViewById = Backbone.View.extend({
    render: function () {
        this.$el.html('Albums View by ID')
        return this
    }
})

var GenresView = Backbone.View.extend({
    render: function () {
        this.$el.html('Genres View')
        return this
    }
})

var DefaultView = Backbone.View.extend({
    render: function () {
        this.$el.html('Default View')
        return this
    }
})

var AppRouter = Backbone.Router.extend({
    routes: {
        albums: 'viewAlbums',
        'albums/:albumId': 'viewAlbumById',
        artists: 'viewArtists',
        genres: 'viewGenres',
        '*other': 'defaultRoute',
    },
    viewAlbumById: function (albumId) {
        console.log('rendering view album for: ' + albumId)
        var view = new AlbumsViewById({ el: '#container' })
        view.render()
    },
    viewArtists: function () {
        console.log('route for artists')
        var view = new ArtistView({ el: '#container' })
        view.render()
    },
    viewGenres: function () {
        console.log('route for genres')
        var view = new GenresView({ el: '#container' })
        view.render()
    },
    viewAlbums: function () {
        console.log('route for albums')
        var view = new AlbumsView({ el: '#container' })
        view.render()
    },
    defaultRoute: function () {
        console.log('default route')
        var view = new DefaultView({ el: '#container' })
        view.render()
    }
})

var router = new AppRouter()
Backbone.history.start()

var NavView = Backbone.View.extend({
    events: {
        click: 'goTo'
    },
    goTo: function (ev) {
        var $li = $(ev.target)
        router.navigate($li.attr('data-url'), { trigger: true })
    }
})

var navView = new NavView({ el: '#nav' })