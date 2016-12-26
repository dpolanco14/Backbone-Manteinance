(function (module, global) {

    module.mainUI = {
        listcontainer: '#table-Container',
        formContainer: '#form-Container',
        scroll: '.scrollable',
        select: 'select'
    };

    module.initPeopleTable = function () {
        if (!module.table) {
            module.table = new module.Views.PeopleTable({
                collection: new module.Collections.People()
            });
            $(module.mainUI.listcontainer).append(module.table.render().el);
        }
        $(module.mainUI.scroll).mCustomScrollbar();
    };

    module.initPeopleForm = function () {
        module.form = module.form || new module.Views.PeopleForm({
            model: new module.Models.People()
        });

        $(module.mainUI.formContainer).append(module.form.render().el);
    };

})(app.modules('People'), app.modules('Global'));