google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['State Code', 'State', 'Region'],
        ['IN-JK', 'Jammu and Kashmir', 1],
        ['IN-HP', 'Himachal Pradesh', 1],
        ['IN-PB', 'Punjab', 1],
        ['IN-HR', 'Haryana', 1],
        ['IN-UT', 'Uttarakhand', 1],
        ['IN-DL', 'Delhi', 1],
        ['IN-UP', 'Uttar Pradesh', 1],
        ['IN-RJ', 'Rajasthan', 2],
        ['IN-MP', 'Madhya Pradesh', 2],
        ['IN-BR', 'Bihar', 1],
        ['IN-JH', 'Jharkhand', 1],
        ['IN-WB', 'West Bengal', 1],
        ['IN-GJ', 'Gujarat', 3],
        ['IN-CT', 'Chhattisgarh', 2],
        ['IN-MH', 'Maharashtra', 3],
        ['IN-OR', 'Odisha', 2],
        ['IN-AS', 'Assam', 1],
        ['IN-TG', 'Telangana', 3],
        ['IN-AP', 'Andhra Pradesh', 3],
        ['IN-KA', 'Karnataka', 3],
        ['IN-KL', 'Kerala', 3],
        ['IN-TN', 'Tamil Nadu', 3],
        ['IN-GA', 'Goa', 3],
        ['IN-TR', 'Tripura', 1],
        ['IN-ML', 'Meghalaya', 1],
        ['IN-MN', 'Manipur', 1],
        ['IN-NL', 'Nagaland', 1],
        ['IN-MZ', 'Mizoram', 1],
        ['IN-SK', 'Sikkim', 1],
        ['IN-AN', 'Andaman and Nicobar Islands', 3],
        ['IN-DN', 'Dadra and Nagar Haveli', 3],
        ['IN-DD', 'Daman and Diu', 3],
        ['IN-LD', 'Lakshadweep', 3]
    ]);

    var opts = {
        region: 'IN',
        resolution: 'provinces',
        displayMode: 'regions',
        colorAxis: {
            colors: ['#FF9933', '#FFFFFF', '#138808', '#000080'], // Saffron, White, Green, Blue
            values: [1, 2, 3, 4]
        },
        backgroundColor: '#FFF5E4',
        datalessRegionColor: '#FFF5E4',
        defaultColor: '#f5f5f5',
        forceIFrame: true
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
        'IN-JK': 'https://example.com/jammu-kashmir',
        'IN-HP': 'https://example.com/himachal-pradesh',
        'IN-PB': 'https://example.com/punjab',
        'IN-HR': 'https://example.com/haryana',
        'IN-UT': 'https://example.com/uttarakhand',
        'IN-DL': 'https://example.com/delhi',
        'IN-UP': 'https://example.com/uttar-pradesh',
        'IN-RJ': 'https://example.com/rajasthan',
        'IN-MP': 'https://example.com/madhya-pradesh',
        'IN-BR': 'https://example.com/bihar',
        'IN-JH': 'https://example.com/jharkhand',
        'IN-WB': 'https://example.com/west-bengal',
        'IN-GJ': 'https://example.com/gujarat',
        'IN-CT': 'https://example.com/chhattisgarh',
        'IN-MH': 'https://example.com/maharashtra',
        'IN-OR': 'https://example.com/odisha',
        'IN-AS': 'https://example.com/assam',
        'IN-TG': 'https://example.com/telangana',
        'IN-AP': 'https://example.com/andhra-pradesh',
        'IN-KA': 'https://example.com/karnataka',
        'IN-KL': 'https://example.com/kerala',
        'IN-TN': 'https://example.com/tamil-nadu',
        'IN-GA': 'https://example.com/goa',
        'IN-TR': 'https://example.com/tripura',
        'IN-ML': 'https://example.com/meghalaya',
        'IN-MN': 'https://example.com/manipur',
        'IN-NL': 'https://example.com/nagaland',
        'IN-MZ': 'https://example.com/mizoram',
        'IN-SK': 'https://example.com/sikkim',
        'IN-AN': 'https://example.com/andaman-nicobar',
        'IN-DN': 'https://example.com/dadra-nagar-haveli',
        'IN-DD': 'https://example.com/daman-diu',
        'IN-LD': 'https://example.com/lakshadweep'
    };

    if (urlMap[stateCode]) {
        window.location.href = urlMap[stateCode];
    } else {
        alert('No webpage found for this state.');
    }
}
