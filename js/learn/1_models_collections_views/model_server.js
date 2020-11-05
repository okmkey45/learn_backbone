
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
    // urlRoot para saber a que url se hacen las peticiones de fetch, save, destroy
    urlRoot: '/api/songs',
    // define el atributo de primary key para manejar las instancias, por defecto es id
    // si este es modificado, se debe definir este valor antes de fetch
    // revisar ejemplo 1
    idAttribute: 'songId',
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

var newSong = new Song()
song.set({ title: 'this is a new title' })
// post request, por dentro sabe que se creo una nueva instancia y no ha sido guardada
newSong.save() 

// este ejemplo aplica si el "idAttribute" no esta definido
// o si es esta definido pero es igual a "id"
var song = new Song({ id: 1})
song.fetch({
    success: function () {
        console.log('se hizo el fetch')
    },
    error: function () {
        console.log('error el fetch')
    }
})

song.set({ title: 'this is a new title' })
// put request, por dentro sabe que se es una instancia traida desde el server
song.save()

// tener en cuenta que los callback de success y error para el metodo save
// son el segundo parametro
// el primer parametro es un objeto ue se le puede definir mas parametros para la instancia
// antes de guardar
song.save({}, {
    success: function () {
        console.log('se hizo el save')
    },
    error: function () {
        console.log('error el save')
    }
})



song.destroy({
    success: function () {
        console.log('se hizo el destroy')
    },
    error: function () {
        console.log('error el destroy')
    }
})

// este ejemplo aplica si el "idAttribute" es definido y es igual a "songId"
var song = new Song({ songId: 1})
song.fetch()