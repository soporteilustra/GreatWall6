const places = [
  { name: 'Lima', conces: [
    { district: 'Surco', address: 'Av. Cristóbal de Peralta Norte 1000, Santiago de Surco 713-5004'},
    { district: 'Surco', address: 'C.C. Jockey Plaza - Exhibición Exterior puerta 3, Santiago de Surco 435-9260'},
    { district: 'San isidro', address: 'Av. República de Panamá 3671, San Isidro 713-5046  /  713-5179  /  713-5121  /  713-5117'},
    { district: 'San miguel', address: 'Av. La Marina Cdra. 23, San Miguel 578-5080'},
    { district: 'Mall lima plaza norte', address: 'C.C. Lima Plaza Norte - Exhibición interior 535-2013'},
    { district: 'La victoria', address: 'Av. Javier Prado Este 1095, La Victoria 625-1237'},
    { district: 'Ate', address: 'Av. Separadora Industrial con Vía Evitamiento, al costado del peaje 713-5323'},
    { district: 'San juan miraflores', address: 'C.C. Mall del Sur Exhibición Interior ( Expomotor)'},
  ]},
  { name: 'Arequipa', conces: [
    { district: 'Derco Center', address: 'Av. Alfonso Ugarte cdra. 5 s/n C.C. Mall Aventura Plaza Arequipa 958 798 388'},
    { district: 'Derco Center', address: 'Av. Aviación 612 - Cerro Colorado 989 231 982'},
  ]},
  { name: 'Cajamarca', conces: [
    { district: 'Derco Center', address: 'Av. Evitamiento Norte cdra. 3 s/n (076) 34-3863'},
  ]},
  { name: 'Lambayeque', conces: [
    { district: 'AUTOMOTORES PAKATNAMU', address: 'Carretera Panamericana Norte 1006 - Sub Lote 2B (cruce con Leguía) (074) 320-0095 / 320-122 / 320-278'},
  ]},
  { name: 'Ica', conces: [
    { district: 'MOTORGAS CHINCHA', address: 'Carretera Panamericana 707 (056) 26-4697 / 993494849'},
  ]},
  { name: 'Cusco', conces: [
    { district: 'CONCESIONARIO VEHICULAR DEL SUR	', address: 'Vía Expresa Parque Industrial Wanchaq Mz. A Lt. 7 (084) 23-3203 / 965385784'},
  ]},
  { name: 'Huancayo', conces: [
    { district: 'HUANCA AUTOS', address: 'Av. Jose Carlos Mariátegui 674 - El Tambo (064) 24-7455  /  RPM: #968626115  /  RPC: 968214305 mvega@huancautos.com  /  adv@huancautos.com'},
    { district: 'KLM AUTOMOTRIZ', address: 'Carretera central N 2336 - San Agustín de Cajas. Teléfono: (064) 421751 Cel: 962627151 Email: kevin.quispe@klmautomotriz.pe'},
  ]},
  { name: 'Huanuco', conces: [
    { district: 'CARRION AUTOMOTRIZ', address: 'Jr. Dos de Mayo 627 (062) 51-2866'},
  ]},
  { name: 'Ancash', conces: [
    { district: 'CENTRO AUTOMOTRIZ MULTIMARCA DEL PERU', address: 'Av. Monterrey s/n Barrio Monterrey (al costado de Backus) (043) 42-2326 / RPM: #949867850 / RPC: 949379858'},
  ]},
  { name: 'Piura', conces: [
    { district: 'DERCO CENTER', address: 'Av. Panamericana Norte s/n - Urb. Zona Nor Oeste (073) 60-3410'},
  ]},
  { name: 'Puno', conces: [
    { district: 'AUTOMOTRIZ Y MAQUINARIAS MOTOR MASS', address: 'Jr. José Domingo Choquehuanca Mz. A Lt. 2 - Juliaca (051) 32-5767 / 958194773'},
  ]},
  { name: 'Ucayali', conces: [
    { district: 'AUTOVENTAS GRAN PRIX', address: 'Av. Centenario 524 (061) 59-3825'},
  ]},
  { name: 'Tacna', conces: [
    { district: 'RIMASSA', address: 'Av. Leguía 510 (052) 24-2415'},
  ]},
  { name: 'San Martin', conces: [
    { district: 'MOTORSHOW TARAPOTO', address: 'Jr. Jiménez Pimentel 1245 (042) 52-9782 / 942624959'},
  ]},
  { name: 'La libertad', conces: [
    { district: 'CONCESIONARIO BMOTORS', address: 'Cruce Av. Costa Rica con Av. Puerto Rico - Urb. Monserrate Tienda B Motors, Motor Plaza - Mall Aventura Plaza (044) 61-2971'},
    { district: 'CONCESIONARIO BMOTORS', address: 'Av. América Sur 1236 – 1238 Urb. Los Jardines (044) 21-1977'},
    { district: 'CONCESIONARIO BMOTORS', address: 'Tienda Derco Center B Motors – Motor Plaza / Mall Aventura Plaza (Av. América Oeste S/N) (044) 61-0721'},
  ]},
  { name: 'Chimbote', conces: [
    { district: 'CHIMBOTE', address: 'Av. Enrique Meiggs 1759.'},
  ]},
];
const element = '<tr><th scope="row">:item:</th><td>:district:</td><td>:address:</td></tr>';

const content_address = $('#address');

$('.place-clickable').click(function() {
  $('.place-clickable').removeClass('active');
  $(this).addClass('active');
  content_address.empty();
  var cont = 1;
  var ide = parseInt(this.id);
  var place = places[(ide-1)];
  $('#conce-name').text(place.name);
  place.conces.forEach(function (a) {
     var ele = element
              .replace(':item:', cont)
              .replace(':district:', a.district.toUpperCase())
              .replace(':address:', a.address);
    var $ele = $(ele);
    content_address.append($ele.show(500));
    cont = cont +1;
  });
  console.log(place);
})
