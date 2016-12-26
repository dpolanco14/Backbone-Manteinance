this["APP"] = this["APP"] || {};
this["APP"]["templates"] = this["APP"]["templates"] || {};
this["APP"]["templates"]["peopleRow"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </td>\r\n<td> "
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + " </td>\r\n<td> "
    + alias4(((helper = (helper = helpers.identification || (depth0 != null ? depth0.identification : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"identification","hash":{},"data":data}) : helper)))
    + " </td>\r\n<td> "
    + alias4(((helper = (helper = helpers.sex || (depth0 != null ? depth0.sex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sex","hash":{},"data":data}) : helper)))
    + " </td>\r\n<td> "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + " </td>\r\n<td><input type=\"button\" class=\"btn btn-default edit\" value=\"Editar\"></td>";
},"useData":true});