var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bangunan_1 = new ol.format.GeoJSON();
var features_Bangunan_1 = format_Bangunan_1.readFeatures(json_Bangunan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_1.addFeatures(features_Bangunan_1);
var lyr_Bangunan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_1, 
                style: style_Bangunan_1,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_1.png" /> Bangunan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Bangunan_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Bangunan_1];
lyr_Bangunan_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', });
lyr_Bangunan_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', });
lyr_Bangunan_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', });
lyr_Bangunan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});