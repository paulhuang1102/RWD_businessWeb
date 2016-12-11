$(document).ready(function() {

    var map = $(".tinymap");
    var lat = '22.605697';
    var lng = '120.300831';
    var Addr = '高雄軟體園區'

    map.tinyMap({
        'center': [lat,lng],
        'zoom': 15,
        'marker': [{ 'addr': [lat, lng], 'text': Addr }, ],
        'animation': 'DROP',
        'event': {
            'click': function(e) {
                map.tinyMap('clear');

                GetAddress(e.latLng.lat(), e.latLng.lng());

                $("#tbxlng").val(e.latLng.lng());
                $("#tbxlat").val(e.latLng.lat());

                map.tinyMap('panTo', [e.latLng.lat(), e.latLng.lng()]);
                map.tinyMap('modify', {
                    'marker': [{
                        'addr': [e.latLng.lat(), e.latLng.lng()],
                        'text': Addr
                    }]
                });
            }
        }
    });
    

});
