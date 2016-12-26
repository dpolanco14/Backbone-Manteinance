(function (module, global) {
    module.Collections = module.Collections || {};

    module.Collections.People = Backbone.Collection.extend({
        url: 'http://beta.json-generator.com/api/json/get/E1bm--d4f',
        
        parse: function (response) {
            var data;
            if (response && String(response.success) === 'true') {
                data = response.data;
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

     module.Collections.Cities = Backbone.Collection.extend({
        url: 'http://beta.json-generator.com/api/json/get/NJizNcv4M',

        initialize: function(){
           // this.getData();
        },

        parse: function (response) {
            var data;
            if (response && String(response.success) === 'true') {
                data = response.data;
            }
            return data;
        },

        getData: function () {
            var self = this;
           return this.fetch({
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

})(app.modules('People'), app.modules('Global'));