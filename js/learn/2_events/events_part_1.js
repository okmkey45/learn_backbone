var person = {
    name: 'marlon',
    walk: function () {
        console.log('method called')
        this.trigger('walking', {
            speed: 1,
            startTime: '10:10 AM'
        })
        this.trigger('alive')
    }
}

_.extend(person, Backbone.Events)

person.on('walking', function (ev) {
    console.log('person is walking')
    console.log('Event args', ev)
})

person.once('alive', function (ev) {
    console.log('person is alive')
})

person.walk()

person.off('walking')

person.walk()
person.walk()
person.walk()
person.walk()
person.walk()
person.walk()