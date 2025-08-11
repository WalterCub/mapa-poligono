function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Formulario Jerárquico');
}

function guardarDatos(formData) {
  try {
    const ss = SpreadsheetApp.openById("1pnor1hER7uP7adF0p1zqw-Ga4jsYdaji6kqf-vgYeQo");
    const hojaNueva = ss.getSheetByName("Lotes_Info");
    const hojaAntigua = ss.getSheetByName("Respuestas");

    const uniqueID = "_id-" + new Date().getTime() + "-" + Math.floor(Math.random() * 10000);

    // === Guardado en "Lotes_Info" (estructura nueva) ===
    const filaNueva = [
      uniqueID,
      formData.nombreLote,
      formData.areaLote,
      formData.sistemaCultivo || "",
      formData.tipoRiego || "",
      formData.anosCultivo || "",
      formData.idFinca || "",
      formData.idUsuario || "",
      formData.departamento,
      formData.municipio,
      formData.profesional,
      formData.seccional,
      formData.zona || "",
      formData.anio || new Date().getFullYear(),
      formData.numMonitEnf || 0,
      formData.numMonitInsect || 0,
      formData.numMonitVHBA || 0,
      formData.numMonitMalezas || 0,
      formData.numMonitBrigada || 0,
      formData.latitud || "",
      formData.longitud || "",
      formData.coordenadasFinca || "",
      formData.municipio + "," + formData.departamento,
      formData.nombreLote + "_" + formData.areaLote + "_" + formData.nombreFinca + "_" + formData.municipio,
      formData.nombreFinca || "",
      formData.variedad || "", // <-- Agrega aquí la variedad
    ];
    hojaNueva.appendRow(filaNueva);

    // === Guardado en "Respuestas" (estructura original / libre) ===
    const filaAntigua = [
      new Date(),
      formData.departamento,
      formData.municipio,
      formData.vereda || "",
      formData.seccional,
      formData.profesional,
      formData.nombreFinca,
      formData.sistemaCultivo,
      formData.coordenadasFinca,
      formData.nombreLote,
      formData.areaLote,
      formData.poligono,
      formData.variedad || "", // <-- Agrega aquí la variedad
      uniqueID
    ];
    hojaAntigua.appendRow(filaAntigua);

    return "Datos guardados correctamente.";
  } catch (error) {
    return "Error al guardar los datos: " + error.message;
  }
}

// Nueva función para manejar el cambio en el select de variedad
function onVariedadChange() {
  var selectElement = document.getElementById("variedad");
  var inputElement = document.getElementById("otraVariedad");

  // Mostrar u ocultar el input de texto basado en la selección
  if (selectElement.value === "otra") {
    inputElement.style.display = "block";
    inputElement.required = true;
  } else {
    inputElement.style.display = "none";
    inputElement.required = false;
  }
}

// Llamar a la función onVariedadChange al cargar la página para establecer el estado inicial
window.onload = function() {
  onVariedadChange();
};
function doGet(e){return HtmlService.createHtmlOutputFromFile('Index').setTitle('Formulario Jerárquico')}
function guardarDatos(a){try{const b=SpreadsheetApp.openById("1pnor1hER7uP7adF0p1zqw-Ga4jsYdaji6kqf-vgYeQo"),c=b.getSheetByName("Lotes_Info"),d=b.getSheetByName("Respuestas"),e="_id-"+new Date().getTime()+"-"+Math.floor(1e4*Math.random()),f=[e,a.nombreLote,a.areaLote,a.sistemaCultivo||"",a.tipoRiego||"",a.anosCultivo||"",a.idFinca||"",a.idUsuario||"",a.departamento,a.municipio,a.profesional,a.seccional,a.zona||"",a.anio||new Date().getFullYear(),a.numMonitEnf||0,a.numMonitInsect||0,a.numMonitVHBA||0,a.numMonitMalezas||0,a.numMonitBrigada||0,a.latitud||"",a.longitud||"",a.coordenadasFinca||"",a.municipio+","+a.departamento,a.nombreLote+"_"+a.areaLote+"_"+a.nombreFinca+"_"+a.municipio,a.nombreFinca||"",a.variedad||""];c.appendRow(f);const g=[new Date(),a.departamento,a.municipio,a.vereda||"",a.seccional,a.profesional,a.nombreFinca,a.sistemaCultivo,a.coordenadasFinca,a.nombreLote,a.areaLote,a.poligono,a.variedad||"",e];return d.appendRow(g),"Datos guardados correctamente."}catch(h){return"Error al guardar los datos: "+h.message}}
function onVariedadChange(){var a=document.getElementById("variedad"),b=document.getElementById("otraVariedad");"otra"===a.value?(b.style.display="block",b.required=!0):(b.style.display="none",b.required=!1)}window.onload=function(){onVariedadChange()};
