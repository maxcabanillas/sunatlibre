(function(){ "use strict";

  function idIsTaken(id) {
    return !!document.getElementById(id);
  }

  function setIdFromName(el) {
    if (el.id !== '' || !el.name || idIsTaken(el.name)){
      return;
    }
    el.id = el.name;
  }

  function setIds() {
    var i, j, forms, elements, form, el;

    forms = document.forms;
    for (i = 0; form = forms[i]; i++){
      elements = form.elements;
      for (j = 0; el = elements[j]; j++){
        setIdFromName(el);
      }
    }
  }

  setIds();
}());