
# SUNAT libre

Fix para los formularios de la página de la SUNAT, para que su JavaScript no funcione solo en Internet Explorer.

Instalala desde aquí:

https://chrome.google.com/webstore/detail/sunat-libre/ghmbjblenlcniekjmnopgofmcncecjap

## No solo para la SUNAT

Gracias a [wixo](https://github.com/wixo), ahora puede usarse como bookmarklet en cualquier sitio con problemas similares.
Solo arrastra este enlace:

<a href="javascript:(function(d){var c,b,e,f,a;e=d.forms;for(c=0;b=e[c];c++){f=b.elements;for(b=0;a=f[b];b++)''!==a.id||(!a.name||d.getElementById(a.name))||(a.id=a.name)}})(window.document);">Sunat Libre</a>

a tu barra de favoritos y dale click cuando te encuentres en problemas. Esto funciona en todos los navegadores.


## Como funciona

El código JavaScript de la página de la SUNAT encuentra los elementos en los formularios usando la función `document.getElementById` y su atributo "name", en vez del atributo "id". Esto funciona solamente por accidente gracias a un error de las versiones antiguas de Internet Explorer.

Los navegadores modernos, incluyendo Internet Explorer 9 y 10 ya no tienen ese error y por eso muchas veces el sitio tampoco funciona sin "modo de compatibilidad".

Para arreglarlo, este script recorre todos los elementos en los formularios de la página cargada y les agrega un "id" igual a su "name", a menos que ya tengan uno o ese id esté siendo usado. De esa forma, el JavaScript de la SUNAT funciona como sus programadores pretendieron.

