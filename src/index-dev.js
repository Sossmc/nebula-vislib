import Scatterplot from '@/visualizations/scatterplot'
import props from '../public/props/test-scatterplot.json'

const chart = new Scatterplot(props)
chart.mount('#app')
