(function (module) {
    module.Models = module.Models || {};

    module.Models.People = Backbone.Model.extend({
        defaults: {

        },

        validation: {
            name: {
                required: true
            },
            lastName: {
                required: true
            },
            identification: {
                required: true
            },
            sex: {
                required: true
            },
            city: {
                required: true
            }
        },

        labels: {
            name: '*',
            lastName: '*',
            identification: '*',
            sex: '*',
            city: '*'
        },

        url: 'http://beta.json-generator.com/api/json/get/NJizNcv4M',

        initialize: function(){
           // this.getData();
        },

        parse: function (response) {
            var data = {};
            if (response && String(response.success) === 'true') {
                data.cities = response.data;
            }
            return data;
        },

        getData: function () {
            var self = this;
            this.fetch({
                success: function (collection, response) {
                    if (response && String(response.success) === 'true') {
                        self.trigger('successOnGet', collection, response);
                    } else {
                        self.trigger('errorOnGet', collection, response);
                    }
                },
                error: function (collection, response) {
                    self.trigger('errorOnGet', collection, response);
                }
            });
        }
    });

})(app.modules('People'));