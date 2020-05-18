import { Scatterplot } from '../dist/zjvis.min.js'
import props from '../public/props/test-scatterplot.json'

const chart = new Scatterplot(props)
chart.mount('#app')
