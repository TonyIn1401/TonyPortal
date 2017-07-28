$(function () {
    $('#pie_basic').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        title: {
            text: '基础饼状图-某网站各浏览器浏览量占比'
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '浏览器访问量占比',
            data: [
                ['Firefox', 45.0],
                ['IE', 26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['其他', 0.7]
            ]
        }]
    });

    var colors = Highcharts.getOptions().colors,
    categories = ['IE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
    data = [{
        y: 55.11,
        color: colors[0],
        drilldown: {
            name: 'IE 版本',
            categories: ['IE 6.0', 'IE 7.0', 'IE 8.0', 'IE 9.0'],
            data: [10.85, 7.35, 33.06, 2.81],
            color: colors[0]
        }
    }, {
        y: 21.63,
        color: colors[1],
        drilldown: {
            name: 'Firefox 版本',
            categories: ['Firefox 2.0', 'Firefox 3.0', 'Firefox 3.5', 'Firefox 3.6', 'Firefox 4.0'],
            data: [0.20, 0.83, 1.58, 13.12, 5.43],
            color: colors[1]
        }
    }, {
        y: 11.94,
        color: colors[2],
        drilldown: {
            name: 'Chrome 版本',
            categories: ['Chrome 5.0', 'Chrome 6.0', 'Chrome 7.0', 'Chrome 8.0', 'Chrome 9.0',
                            'Chrome 10.0', 'Chrome 11.0', 'Chrome 12.0'],
            data: [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.50, 0.22],
            color: colors[2]
        }
    }, {
        y: 7.15,
        color: colors[3],
        drilldown: {
            name: 'Safari 版本',
            categories: ['Safari 5.0', 'Safari 4.0', 'Safari Win 5.0', 'Safari 4.1', 'Safari/Maxthon',
                            'Safari 3.1', 'Safari 4.1'],
            data: [4.55, 1.42, 0.23, 0.21, 0.20, 0.19, 0.14],
            color: colors[3]
        }
    }, {
        y: 2.14,
        color: colors[4],
        drilldown: {
            name: 'Opera 版本',
            categories: ['Opera 9.x', 'Opera 10.x', 'Opera 11.x'],
            data: [0.12, 0.37, 1.65],
            color: colors[4]
        }
    }],
    browserData = [],
    versionsData = [],
    i,
    j,
    dataLen = data.length,
    drillDataLen,
    brightness;
    // 构建数据数组
    for (i = 0; i < dataLen; i += 1) {
        // 添加浏览器数据
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });
        // 添加版本数据
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }
    // 创建图表
    $('#pie_donut').highcharts({
        chart: {
            type: 'pie'
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        title: {
            text: '双饼图-年4月浏览器市场份额'
        },
        subtitle: {
            text: '内环为浏览器品牌占比，外环为具体的版本'
        },
        yAxis: {
            title: {
                text: '总百分比市场份额'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: '浏览器',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: 'white',
                distance: -30
            }
        }, {
            name: '版本',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // 大于1则显示
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
                }
            }
        }]
    });

    $('#pie_donut_center_title').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            spacing: [100, 0, 40, 0]
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        title: {
            floating: true,
            text: '标题居中的环形图-圆心显示的标题'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                point: {
                    events: {
                        mouseOver: function (e) {  // 鼠标滑过时动态更新标题
                            // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                            chart.setTitle({
                                text: e.target.name + '\t' + e.target.y + ' %'
                            });
                        }
                        //, 
                        // click: function(e) { // 同样的可以在点击事件里处理
                        //     chart.setTitle({
                        //         text: e.point.name+ '\t'+ e.point.y + ' %'
                        //     });
                        // }
                    }
                },
            }
        },
        series: [{
            type: 'pie',
            innerSize: '80%',
            name: '市场份额',
            data: [
                { name: 'Firefox', y: 45.0, url: 'http://bbs.hcharts.cn' },
                ['IE', 26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true,
                    url: 'http://www.hcharts.cn'
                },
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['其他', 0.7]
            ]
        }]
    }, function (c) {
        // 环形图圆心
        var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
        c.setTitle({
            y: centerY + titleHeight / 2
        });
        chart = c;
    });

    Highcharts.data({
        csv: document.getElementById('tsv').innerHTML,
        itemDelimiter: '\t',
        parsed: function (columns) {
            var brands = {},
                brandsData = [],
                versions = {},
                drilldownSeries = [];
            // 解析百分比字符串
            columns[1] = $.map(columns[1], function (value) {
                if (value.indexOf('%') === value.length - 1) {
                    value = parseFloat(value);
                }
                return value;
            });
            $.each(columns[0], function (i, name) {
                var brand,
                    version;
                if (i > 0) {
                    // Remove special edition notes
                    name = name.split(' -')[0];
                    // 拆分
                    version = name.match(/([0-9]+[\.0-9x]*)/);
                    if (version) {
                        version = version[0];
                    }
                    brand = name.replace(version, '');
                    //创建主数据
                    if (!brands[brand]) {
                        brands[brand] = columns[1][i];
                    } else {
                        brands[brand] += columns[1][i];
                    }
                    // 创建版本数据
                    if (version !== null) {
                        if (!versions[brand]) {
                            versions[brand] = [];
                        }
                        versions[brand].push(['v' + version, columns[1][i]]);
                    }
                }
            });
            $.each(brands, function (name, y) {
                brandsData.push({
                    name: name,
                    y: y,
                    drilldown: versions[name] ? name : null
                });
            });
            $.each(versions, function (key, value) {
                drilldownSeries.push({
                    name: key,
                    id: key,
                    data: value
                });
            });
            // 创建图例
            $('#pie_drilldown').highcharts({
                chart: {
                    type: 'pie'
                },
                credits:{
                    enabled:false
                },
                title: {
                    text: '可下钻的饼图-2013年11月浏览器市场份额'
                },
                subtitle: {
                    text: '单击每个浏览器品牌不同版本的具体信息，数据来源: netmarketshare.com.'
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}: {point.y:.1f}%'
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },
                series: [{
                    name: '品牌',
                    colorByPoint: true,
                    data: brandsData
                }],
                drilldown: {
                    series: drilldownSeries
                }
            });
        }
    });

    $('#pie_legend').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        credits:{
            enabled:false
        },
        title: {
            text: '带图例的饼图-各个浏览器的访问量占比'
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '浏览器访问量占比',
            data: [
                ['Firefox', 45.0],
                ['IE', 26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['其他', 0.7]
            ]
        }]
    });
});