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

    // Guardado en "Lotes_Info"
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
      formData.variedad || "",
    ];
    hojaNueva.appendRow(filaNueva);

    // Guardado en "Respuestas"
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
      formData.variedad || "",
      uniqueID
    ];
    hojaAntigua.appendRow(filaAntigua);

    return "Datos guardados correctamente.";
  } catch (error) {
    return "Error al guardar los datos: " + error.message;
  }
}
