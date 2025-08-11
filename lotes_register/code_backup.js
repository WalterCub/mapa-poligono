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
      uniqueID,                         // _id
      formData.nombreLote,             // nombre_Lote
      formData.areaLote,               // area_ha_Lote
      formData.sistemaCultivo || "",   // sistema_cultivo
      formData.tipoRiego || "",        // tipo_riego
      formData.anosCultivo || "",      // años_cultivo
      formData.idFinca || "",          // id_finca
      formData.idUsuario || "",          // id_finca
      formData.departamento,
      formData.municipio,
      formData.profesional,
      formData.seccional,
      formData.zona || "",             // Zona
      formData.anio || new Date().getFullYear(),  // Año

      formData.numMonitEnf || 0,      // monitoreos de enfermedades
      formData.numMonitInsect || 0,   // monitoreos de insectos
      formData.numMonitVHBA || 0,     // monitoreos VHBA
      formData.numMonitMalezas || 0,  // monitoreos malezas
      formData.numMonitBrigada || 0,  // monitoreos malezas

      formData.latitud || "",          // Latitud
      formData.longitud || "",         // Longitud
      formData.coordenadasFinca || "", // Coord
      formData.municipio + "," + formData.departamento, // Mun_Dep
      formData.nombreLote + "_" + formData.areaLote + "_" + formData.nombreFinca + "_" + formData.municipio,
      formData.nombreFinca || "",           // agricultor

    ];
    hojaNueva.appendRow(filaNueva);

    // === Guardado en "Respuestas" (estructura original / libre) ===
    const filaAntigua = [
      new Date(),                        // Fecha
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
      uniqueID
    ];
    hojaAntigua.appendRow(filaAntigua);

    return "Datos guardados correctamente.";
  } catch (error) {
    return "Error al guardar los datos: " + error.message;
  }
}
