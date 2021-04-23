var wms_layers = [];

var format_Commune_EN_0 = new ol.format.GeoJSON();
var features_Commune_EN_0 = format_Commune_EN_0.readFeatures(json_Commune_EN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_EN_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_EN_0.addFeatures(features_Commune_EN_0);
var lyr_Commune_EN_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commune_EN_0, 
                style: style_Commune_EN_0,
                interactive: true,
                title: '<img src="styles/legend/Commune_EN_0.png" /> Commune_EN'
            });
var format_Routes_EN_1 = new ol.format.GeoJSON();
var features_Routes_EN_1 = format_Routes_EN_1.readFeatures(json_Routes_EN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routes_EN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routes_EN_1.addFeatures(features_Routes_EN_1);
var lyr_Routes_EN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routes_EN_1, 
                style: style_Routes_EN_1,
                interactive: true,
                title: '<img src="styles/legend/Routes_EN_1.png" /> Routes_EN'
            });
var format_ecole_primaire_2 = new ol.format.GeoJSON();
var features_ecole_primaire_2 = format_ecole_primaire_2.readFeatures(json_ecole_primaire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ecole_primaire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ecole_primaire_2.addFeatures(features_ecole_primaire_2);
var lyr_ecole_primaire_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ecole_primaire_2,
maxResolution:28004.466152261964,
 
                style: style_ecole_primaire_2,
                interactive: true,
                title: '<img src="styles/legend/ecole_primaire_2.png" /> ecole_primaire'
            });

lyr_Commune_EN_0.setVisible(true);lyr_Routes_EN_1.setVisible(true);lyr_ecole_primaire_2.setVisible(true);
var layersList = [lyr_Commune_EN_0,lyr_Routes_EN_1,lyr_ecole_primaire_2];
lyr_Commune_EN_0.set('fieldAliases', {'NUM_ar': 'NUM_ar', 'Code_Arron': 'Code_Arron', 'Nom_Arro_1': 'Nom_Arro_1', 'Nom_dept': 'Nom_dept', 'Nom_region': 'Nom_region', 'CODE_ARR_2': 'CODE_ARR_2', 'CODE_DEPT': 'CODE_DEPT', 'DEPARTEMEN': 'DEPARTEMEN', 'CODE_REGIO': 'CODE_REGIO', 'REGIONS': 'REGIONS', 'Area': 'Area', 'Wikipedia': 'Wikipedia', });
lyr_Routes_EN_1.set('fieldAliases', {'SCE_GEO': 'SCE_GEO', 'SCE_SEM': 'SCE_SEM', 'DATE_': 'DATE_', 'ORIGINE': 'ORIGINE', 'CODE_BDR': 'CODE_BDR', 'NUM_ROUTE': 'NUM_ROUTE', 'SECTION': 'SECTION', 'ADRESSE': 'ADRESSE', 'CLASSEMENT': 'CLASSEMENT', 'TYPE_ROUTE': 'TYPE_ROUTE', 'CHAUSSEE': 'CHAUSSEE', 'CHAUSSEE0': 'CHAUSSEE0', 'ACCT_D': 'ACCT_D', 'ACCT_G': 'ACCT_G', 'INTER': 'INTER', });
lyr_ecole_primaire_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Etablissem': 'Etablissem', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'url', 'wikipedia': 'wikipedia', });
lyr_Commune_EN_0.set('fieldImages', {'NUM_ar': 'TextEdit', 'Code_Arron': 'TextEdit', 'Nom_Arro_1': 'TextEdit', 'Nom_dept': 'TextEdit', 'Nom_region': 'TextEdit', 'CODE_ARR_2': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'REGIONS': 'TextEdit', 'Area': 'TextEdit', 'Wikipedia': 'TextEdit', });
lyr_Routes_EN_1.set('fieldImages', {'SCE_GEO': 'Hidden', 'SCE_SEM': 'Hidden', 'DATE_': 'TextEdit', 'ORIGINE': 'TextEdit', 'CODE_BDR': 'TextEdit', 'NUM_ROUTE': 'TextEdit', 'SECTION': 'TextEdit', 'ADRESSE': 'TextEdit', 'CLASSEMENT': 'TextEdit', 'TYPE_ROUTE': 'TextEdit', 'CHAUSSEE': 'TextEdit', 'CHAUSSEE0': 'TextEdit', 'ACCT_D': 'TextEdit', 'ACCT_G': 'TextEdit', 'INTER': 'Range', });
lyr_ecole_primaire_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Etablissem': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Commune_EN_0.set('fieldLabels', {'NUM_ar': 'no label', 'Code_Arron': 'no label', 'Nom_Arro_1': 'header label', 'Nom_dept': 'no label', 'Nom_region': 'no label', 'CODE_ARR_2': 'no label', 'CODE_DEPT': 'no label', 'DEPARTEMEN': 'no label', 'CODE_REGIO': 'no label', 'REGIONS': 'no label', 'Area': 'no label', 'Wikipedia': 'no label', });
lyr_Routes_EN_1.set('fieldLabels', {'DATE_': 'no label', 'ORIGINE': 'no label', 'CODE_BDR': 'no label', 'NUM_ROUTE': 'inline label', 'SECTION': 'no label', 'ADRESSE': 'no label', 'CLASSEMENT': 'no label', 'TYPE_ROUTE': 'no label', 'CHAUSSEE': 'no label', 'CHAUSSEE0': 'no label', 'ACCT_D': 'no label', 'ACCT_G': 'no label', 'INTER': 'no label', });
lyr_ecole_primaire_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Etablissem': 'header label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'wikipedia': 'no label', });
lyr_ecole_primaire_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});