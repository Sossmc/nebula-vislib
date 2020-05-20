import Areachart from '@/visualizations/area-chart'
import Barchart from '@/visualizations/bar-chart'
import Button from '@/visualizations/button'
import DangerousHtml from '@/visualizations/dangerous-html'
import DonutChart from '@/visualizations/donut-chart'
import Heatmap2D from '@/visualizations/heatmap-2D'
import Input from '@/visualizations/input'
import Linechart from '@/visualizations/line-chart'
import LineUp from '@/visualizations/line-up'
import Map from '@/visualizations/Map'
import NodeLinkGraph from '@/visualizations/node-link-graph'
import ParallelCoordinates from '@/visualizations/parallel-coordinates'
import PieChart from '@/visualizations/pie-chart'
import RadialCoordinates from '@/visualizations/radial-coordinates'
import Scatterplot from '@/visualizations/scatterplot'
import SectorChart from '@/visualizations/sector-chart'
import Select from '@/visualizations/select'
import Slider from '@/visualizations/slider'
import SunburstChart from '@/visualizations/sunburst-chart'
import Tree from '@/visualizations/tree'
import TreeMap from '@/visualizations/tree-map'
import VegaLite from '@/visualizations/vega-lite'

export {
  Areachart,
  Barchart,
  Button,
  DonutChart,
  Heatmap2D,
  Input,
  Linechart,
  LineUp,
  Map,
  NodeLinkGraph,
  ParallelCoordinates,
  PieChart,
  RadialCoordinates,
  Scatterplot,
  SectorChart,
  Select,
  Slider,
  SunburstChart,
  Tree,
  TreeMap,
  VegaLite,
}

const NebulaLib = {
  areachart: Areachart,
  barchart: Barchart,
  button: Button,
  donutchart: DonutChart,
  'dangerous-html': DangerousHtml,
  heatmap2d: Heatmap2D,
  input: Input,
  linechart: Linechart,
  lineup: LineUp,
  map: Map,
  graph: NodeLinkGraph,
  parallel: ParallelCoordinates,
  piechart: PieChart,
  radial: RadialCoordinates,
  scatterplot: Scatterplot,
  sectorchart: SectorChart,
  select: Select,
  slider: Slider,
  sunburchart: SunburstChart,
  tree: Tree,
  treemap: TreeMap,
  vegalite: VegaLite,
}
window.NebulaLib = NebulaLib
export default NebulaLib
