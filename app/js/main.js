(function (module) {
    module.Routers.People = Backbone.Router.extend({
        ui: {
            list: '#table-Container',
            form: '#form-Container'
        },

        routes: {
            '': 'list',
            'list': 'list',
            'edit': 'edit'
        },

        list: function () {
            module.initPeopleTable();
            $(this.ui.list).parent().children().hide();
            $(this.ui.list).show();
        },

        edit: function () {
            module.initPeopleForm();
            $(this.ui.form).parent().children().hide();
            $(this.ui.form).show();
        }
    });

})(app.modules('People'));

$(document).ready(function () {

    var module = app.modules('People');
    module.route = new module.Routers.People();

    Backbone.history.start();
});