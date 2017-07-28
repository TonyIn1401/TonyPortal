$(function () {
    $('#gauge_speedometer').highcharts({
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: '仪表图-速度仪'
        },
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },
        // the value axis
        yAxis: {
            min: 0,
            max: 200,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }]
        },
        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]
    },
                               // Add some life
                               function (chart) {
                                   if (!chart.renderer.forExport) {
                                       setInterval(function () {
                                           var point = chart.series[0].points[0],
                                               newVal,
                                               inc = Math.round((Math.random() - 0.5) * 20);
                                           newVal = point.y + inc;
                                           if (newVal < 0 || newVal > 200) {
                                               newVal = point.y - inc;
                                           }
                                           point.update(newVal);
                                       }, 3000);
                                   }
                               });

    $('#gauge_dual').highcharts({
        chart: {
            type: 'gauge',
            alignTicks: false,
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '双刻度仪表图'
        },
        pane: {
            startAngle: -150,
            endAngle: 150
        },
        yAxis: [{
            min: 0,
            max: 200,
            lineColor: '#339',
            tickColor: '#339',
            minorTickColor: '#339',
            offset: -25,
            lineWidth: 2,
            labels: {
                distance: -20,
                rotation: 'auto'
            },
            tickLength: 5,
            minorTickLength: 5,
            endOnTick: false
        }, {
            min: 0,
            max: 124,
            tickPosition: 'outside',
            lineColor: '#933',
            lineWidth: 2,
            minorTickPosition: 'outside',
            tickColor: '#933',
            minorTickColor: '#933',
            tickLength: 5,
            minorTickLength: 5,
            labels: {
                distance: 12,
                rotation: 'auto'
            },
            offset: -20,
            endOnTick: false
        }],
        series: [{
            name: '速度',
            data: [80],
            dataLabels: {
                formatter: function () {
                    var kmh = this.y,
                        mph = Math.round(kmh * 0.621);
                    return '<span style="color:#339">' + kmh + ' km/h</span><br/>' +
                        '<span style="color:#933">' + mph + ' mph</span>';
                },
                backgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#DDD'],
                        [1, '#FFF']
                    ]
                }
            },
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]
    },
                               // Add some life
                               function (chart) {
                                   setInterval(function () {
                                       var point = chart.series[0].points[0],
                                           newVal,
                                           inc = Math.round((Math.random() - 0.5) * 20);
                                       newVal = point.y + inc;
                                       if (newVal < 0 || newVal > 200) {
                                           newVal = point.y - inc;
                                       }
                                       point.update(newVal);
                                   }, 3000);
                               });
});