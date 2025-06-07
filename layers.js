var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_kota_metro_1 = new ol.format.GeoJSON();
var features_kota_metro_1 = format_kota_metro_1.readFeatures(json_kota_metro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kota_metro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kota_metro_1.addFeatures(features_kota_metro_1);
var lyr_kota_metro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kota_metro_1, 
                style: style_kota_metro_1,
                popuplayertitle: 'kota_metro',
                interactive: true,
                title: '<img src="styles/legend/kota_metro_1.png" /> kota_metro'
            });
var format_TitikSpbumetroMyPlaces_2 = new ol.format.GeoJSON();
var features_TitikSpbumetroMyPlaces_2 = format_TitikSpbumetroMyPlaces_2.readFeatures(json_TitikSpbumetroMyPlaces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSpbumetroMyPlaces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSpbumetroMyPlaces_2.addFeatures(features_TitikSpbumetroMyPlaces_2);
var lyr_TitikSpbumetroMyPlaces_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikSpbumetroMyPlaces_2, 
                style: style_TitikSpbumetroMyPlaces_2,
                popuplayertitle: 'Titik Spbu metro — My Places',
                interactive: true,
                title: 'Titik Spbu metro — My Places'
            });
var format_spbutitiktitik_spbu_metro__my_places_3 = new ol.format.GeoJSON();
var features_spbutitiktitik_spbu_metro__my_places_3 = format_spbutitiktitik_spbu_metro__my_places_3.readFeatures(json_spbutitiktitik_spbu_metro__my_places_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_spbutitiktitik_spbu_metro__my_places_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_spbutitiktitik_spbu_metro__my_places_3.addFeatures(features_spbutitiktitik_spbu_metro__my_places_3);
var lyr_spbutitiktitik_spbu_metro__my_places_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_spbutitiktitik_spbu_metro__my_places_3, 
                style: style_spbutitiktitik_spbu_metro__my_places_3,
                popuplayertitle: 'spbutitik — titik_spbu_metro__my_places',
                interactive: true,
                title: '<img src="styles/legend/spbutitiktitik_spbu_metro__my_places_3.png" /> spbutitik — titik_spbu_metro__my_places'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_kota_metro_1.setVisible(true);lyr_TitikSpbumetroMyPlaces_2.setVisible(true);lyr_spbutitiktitik_spbu_metro__my_places_3.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_kota_metro_1,lyr_TitikSpbumetroMyPlaces_2,lyr_spbutitiktitik_spbu_metro__my_places_3];
lyr_kota_metro_1.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_TitikSpbumetroMyPlaces_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_spbutitiktitik_spbu_metro__my_places_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'foto': 'foto', });
lyr_kota_metro_1.set('fieldImages', {'KAB_KOTA': '', });
lyr_TitikSpbumetroMyPlaces_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_spbutitiktitik_spbu_metro__my_places_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'foto': 'ExternalResource', });
lyr_kota_metro_1.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_TitikSpbumetroMyPlaces_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_spbutitiktitik_spbu_metro__my_places_3.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'foto': 'inline label - visible with data', });
lyr_spbutitiktitik_spbu_metro__my_places_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});