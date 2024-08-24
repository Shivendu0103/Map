google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['State Code', 'State'],     
        ['IN-UP', 'Uttar Pradesh'],
        ['IN-MH', 'Maharashtra'],
        ['IN-BR', 'Bihar'],
        ['IN-WB', 'West Bengal'],
        ['IN-MP', 'Madhya Pradesh'],
        ['IN-TN', 'Tamil Nadu'],
        ['IN-RJ', 'Rajasthan'],
        ['IN-KA', 'Karnataka'],
        ['IN-GJ', 'Gujarat'],
        ['IN-AP', 'Andhra Pradesh'],
        ['IN-OR', 'Odisha'],
        ['IN-TG', 'Telangana'],
        ['IN-KL', 'Kerala'],
        ['IN-JH', 'Jharkhand'],
        ['IN-AS', 'Assam'],
        ['IN-PB', 'Punjab'],
        ['IN-CT', 'Chhattisgarh'],
        ['IN-HR', 'Haryana'],
        ['IN-JK', 'Jammu and Kashmir'],
        ['IN-UT', 'Uttarakhand'],
        ['IN-HP', 'Himachal Pradesh'],
        ['IN-TR', 'Tripura'],
        ['IN-ML', 'Meghalaya'],
        ['IN-MN', 'Manipur'],
        ['IN-NL', 'Nagaland'],
        ['IN-GA', 'Goa'],
        ['IN-AR', 'Arunachal Pradesh'],
        ['IN-MZ', 'Mizoram'],
        ['IN-SK', 'Sikkim'],
        ['IN-DL', 'Delhi'],
        ['IN-PY', 'Puducherry'],
        ['IN-CH', 'Chandigarh'],
        ['IN-AN', 'Andaman and Nicobar Islands'],
        ['IN-DN', 'Dadra and Nagar Haveli'],
        ['IN-DD', 'Daman and Diu'],
        ['IN-LD', 'Lakshadweep']
    ]);

    var opts = {
        region: 'IN',
        domain: 'IN',
        displayMode: 'regions',
        colorAxis: {colors: ['#e5ef88', '#d4b114', '#e85a03']},
        resolution: 'provinces',
        defaultColor: '#f5f5f5',
        width: 640, 
        height: 480
    };

    var geochart = new google.visualization.GeoChart(document.getElementById('visualization'));
    geochart.draw(data, opts);

    google.visualization.events.addListener(geochart, 'regionClick', function(eventData) {
        var stateCode = eventData.region;
        redirectToStatePage(stateCode);
    });
}

function redirectToStatePage(stateCode) {
    var urlMap = {
        'IN-UP': 'https://example.com/uttar-pradesh',
        'IN-MH': 'https://example.com/maharashtra',
        'IN-BR': 'https://example.com/bihar',
        'IN-WB': 'https://example.com/west-bengal',
        // Add more mappings here
    };

    if (urlMap[stateCode]) {
        window.location.href = urlMap[stateCode];
    } else {
        alert('No webpage found for this state.');
    }
}
