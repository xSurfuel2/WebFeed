// Javascript de las gráficas de niveles de poder


var dom = document.getElementById('miGrafica');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});

var option = {
    xAxis: {
        type: 'category',
        data: ['Raditz', 'Goku', 'Piccolo', 'Thu', 'Fri', 'Sat', 'Sun']
        
    },
    yAxis: {
        type: 'value'
    },
    grid: {
        left: '9%',
        right: '4%',
        bottom: '3%',
        top: '35%',
        containLabel: true
    },
    series: [
        {
            data: [
                120,
                { value: 200, itemStyle: { color: '#a90100' } },
                150,
                80,
                70,
                110,
                130
            ],
            type: 'bar',
            label: {                          // Añadir etiquetas a las barras
                show: true,                   // Mostrar etiquetas
                position: 'inside',           // Posición de la etiqueta
                formatter: '{c}'              // Formato de la etiqueta, '{c}' es el valor
            }
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);