(function (module, global) {
    module.Views = module.Views || {};

    module.Views.PeopleTable = Backbone.View.extend({
        el: '#table-Container',
        template: APP.templates.peopleTable,

        ui: {
            rowContainer: '#row-Container'
        },

        initialize: function () {
            this.listenTo(this.collection, 'successOnGet', this.susccessOnGet);
            this.listenTo(this.collection, 'errorOnGet', this.errorOnGet);

            this.collection.getData();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        susccessOnGet: function () {
            this.rows = [];
            this.collection.each(function (model) {
                this.rows.push(new module.Views.PeopleRow({
                    model: model
                }).render().el);
            }, this);
            this.$(this.ui.rowContainer).html(this.rows);
        },

        errorOnGet: function () {
            //TODO
        }
    });

    module.Views.PeopleRow = Backbone.View.extend({
        tagName: 'tr',
        template: APP.templates.peopleRow,

        events: {
            'click .edit': 'edit'
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        edit: function () {
            global.editModel = this.model;
            module.route.navigate('edit', {
                trigger: true
            });
        }
    });

    module.Views.PeopleForm = Backbone.View.extend({
        template: APP.templates.peopleForm,
        optionsTemplate: APP.templates.options,

        initialize: function () {
            this.cities = [];

            this.listenTo(this.model, 'successOnGet', this.successOnGet);
            this.listenTo(this.model, 'errorOnGet', this.errorOnGet);

            Backbone.Validation.bind(this);
        },

        ui: {
            cityCombo: '#cities',
            loader: '.loader'
        },

        bindings: {
            '#name': {
                observe: 'name',
                setOptions: {
                    validate: true
                }
            },
            "#lastName": {
                observe: 'lastName',
                setOptions: {
                    validate: true
                }
            },
            '#identification': {
                observe: 'identification',
                setOptions: {
                    validate: true
                }
            },
            'input[name="sex"]': {
                observe: 'sex',
                setOptions: {
                    validate: true
                }
            },
            '[name=cityId]': {
                observe: 'cityId',
                initialize: function ($el) {
                    $el.select2({
                        allowClear: true
                    });
                },

                selectOptions: {
                    collection: function () {
                        return this.model.get('cities') || [];
                    },
                    labelPath: 'name',
                    valuePath: 'id',

                    defaultOption: {
                        label: 'Seleccione..',
                        value: null
                    }
                },
                setOptions: {
                    validate: true
                }
            }
        },

        events: {
            'click #cancel': 'cancel',
            'click #save': 'save',
            'change #city': 'changeCity'
        },

        render: function () {
            this.model.getData();

            if (global.editModel) {
                this.model.set(global.editModel.toJSON());
            }

            this.$el.html(this.template());
            return this;
        },

        successOnGet: function (model) {
            this.stickit();
            this.$(this.ui.loader).hide();
            console.log(this.model.toJSON());
        },

        errorOnGet: function () {
            //TODO
        },

        cancel: function () {
            module.route.navigate('list', {
                trigger: true
            });
        },

        save: function () {
            if (this.model.isValid(true)) {
                var self = this;
                sweetAlert({
                    title: 'Completado',
                    text: 'Tus datos fueron modificados correctamente',
                    type: 'success',
                    showCancelButton: false,
                    closeOnConfirm: true,
                    closeOnCancel: false,
                    html: false,
                    animation: false
                }, function () {
                    self.cancel();
                });
            }
        },

        changeCity: function (e) {

        }
    });


})(app.modules('People'), app.modules('Global'));