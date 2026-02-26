  // Initialize chart
  const statsChart = echarts.init(document.getElementById('stats-chart'));
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Poses créées',
        type: 'bar',
        barWidth: '60%',
        data: [10, 15, 12, 8, 7, 11, 13],
        itemStyle: {
          color: '#6D28D9'
        }
      }
    ]
  };
  statsChart.setOption(option);
  
  // Handle window resize
  window.addEventListener('resize', function() {
    statsChart.resize();
 
