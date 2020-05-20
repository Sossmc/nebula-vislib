import props from '../public/props/test-scatterplot.json'
import { Scatterplot } from '@/index'
const chart = new Scatterplot(props)
chart.mount('#app')
