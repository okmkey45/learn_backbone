var VenueModel = Backbone.Model.extend()

var VenuesCollection = Backbone.Collection.extend({
    model: VenueModel
})

var VenueModelView = Backbone.View.extend({
    tagName: 'li',
    events: {
        click: 'onClick'
    },
    initialize: function (options) {
        this.bus = options.bus
    },
    onClick: function () {
        this.bus.trigger('venueSelected', this.model)
    },
    render: function () {
        this.$el.html(this.model.get('name'))
        return this
    }
})

var VenuesCollectionView = Backbone.View.extend({
    tagName: 'ul',
    id: 'venues',
    initialize: function (options) {
        this.bus = options.bus
    },
    render: function () {
        var self = this
        this.model.each(function (venue) {
            var view = new VenueModelView({ model: venue, bus: self.bus })
            self.$el.append(view.render().$el)
        })
        return this
    }
})

var MapView = Backbone.View.extend({
    el: '#map-container',
    initialize: function (options) {
        this.bus = options.bus
        this.bus.on('venueSelected', this.onVenueSelected, this)
    },
    onVenueSelected: function (venue) {
        this.model = venue
        this.render()
    },
    render: function () {
        if (this.model) {
            this.$('#venue-name').html(this.model.get('name'))
        }
        return this
    }
})

var bus = _.extend({}, Backbone.Events)

var venuesList = new VenuesCollection([
    new VenueModel({ name: '30 MIll Espresso' }),
    new VenueModel({ name: 'Platform Espresso' }),
    new VenueModel({ name: 'Mr Foxx' })
])

var venuesView = new VenuesCollectionView({ model: venuesList, bus: bus })
$('#venues-container').html(venuesView.render().$el)

var mapView = new MapView({ bus: bus })
mapView.render()
