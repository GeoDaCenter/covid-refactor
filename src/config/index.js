export const colorScales = {
    'natural_breaks': [
        [240,240,240],
        [255,255,204],
        [255,237,160],
        [254,217,118],
        [254,178,76],
        [253,141,60],
        [252,78,42],
        [227,26,28],
        [177,0,38],
    ],
    'lisa': [
        [255,255,255],
        [255,0,0],
        [0,0,255],
        [167, 173, 249],
        [244, 173, 168],
        // [70, 70, 70],
        // [153, 153, 153]
    ],
    'hinge15_breaks': [
        [1, 102, 94],
        [90, 180, 172],
        [199, 234, 229],
        [246, 232, 195],
        [216, 179, 101],
        [140, 81, 10],
    ],    
    'uninsured':[
        [240,240,240],
        [247,252,253],
        [224,236,244],
        [191,211,230],
        [158,188,218],
        [140,150,198],
        [140,107,177],
        [136,65,157],
        [129,15,124],
        // [77,0,75],
      ],
    'over65':[
        [240,240,240],
        [247,252,240],
        [224,243,219],
        [204,235,197],
        [168,221,181],
        [123,204,196],
        [78,179,211],
        [43,140,190],
        [8,104,172],
        // [8,64,129],
    ],
    'lifeExp':[
        [240,240,240],
        [247,252,240],
        [224,243,219],
        [204,235,197],
        [168,221,181],
        [123,204,196],
        [78,179,211],
        [43,140,190],
        [8,104,172],
        // [8,64,129],
    ],
    'forecasting': [
        [239, 239, 239],
        [254,232,200],
        [253,187,132],
        [227,74,51],
    ],
    'testing' : [
        [240,240,240],
        [13,8,135],
        [92,1,166],
        [156,23,158],
        [203,70,121],
        [237,121,83],
        [253,180,47],
        [240,249,33],
      ],
      'testingCap':[
        [240,240,240],
        [247,251,255],
        [222,235,247],
        [198,219,239],
        [158,202,225],
        [107,174,214],
        [66,146,198],
        [33,113,181],
        [8,81,156],
        [8,48,107],
      ],
      'vaccination':[
        [240,240,240],
        [252, 251, 253],
        [238, 236, 245],
        [217, 216, 234],
        [188, 188, 219],
        [158, 155, 201],
        [129, 123, 185],
        [106, 81, 164],
        [84, 40, 143],
      ]
}

export const fixedScales = {
    'testing': {
        bins: ['No Data','<3%','5%','10%','15%','20%','>25%'],
        breaks:[0,.03,.05,.10,.15,.20,.25,Math.pow(10, 12)]
    },
    'testingCap': {
        bins: ['No Data','<50','100','150','200','250','300','350','>400'],
        breaks:[0,50,100,150,200,250,300,350,400,Math.pow(10, 12)]
    },
    'lisa':{
        bins: ["Not significant tooltip:NotSig", "High-High tooltip:HighHigh", "Low-Low tooltip:LowLow", "Low-High  tooltip:LowHigh", "High-Low  tooltip:HighLow"] //"Undefined", "Isolated"
    },
    'forecasting': {
        bins: ['N/A','Low', 'Medium', 'High'],
        breaks:[1,2,3,4]

    }
}

export const colors = {
    white: '#ffffff',
    black: '#00000',
    darkgray:'#1a1a1a',
    gray:'#2b2b2b',
    buttongray: '#f5f5f5',
    lightgray: '#d8d8d8',
    yellow: '#FFCE00',
    lightblue: '#A1E1E3',
    pairedColors: {
        count: [
            '#1f78b4',
            '#33a02c',
            '#e31a1c',
            '#ff7f00',
            '#6a3d9a',
            '#b15928'
        ],
        sum: [
            '#a6cee3',
            '#b2df8a',
            '#fb9a99',
            '#fdbf6f',
            '#cab2d6',
            '#ffff99'
        ]
    },
    qualtitiveScale: [
        '#8dd3c7',
        '#ffffb3',
        '#bebada',
        '#fb8072',
        '#80b1d3',
        '#fdb462',
        '#b3de69',
        '#fccde5',
        '#d9d9d9',
        '#bc80bd',
        '#ccebc5',
        '#ffed6f',
    ]
}

export const defaultData = 'county_usfacts.geojson';

export const dataPresets = {
    'county_usfacts.geojson': {
        plainName: 'USA Facts County',
        geojson: 'county_usfacts.geojson', 
        csvs: ['covid_confirmed_usafacts','covid_deaths_usafacts', 'berkeley_predictions', 'chr_health_context', 'chr_life', 'chr_health_factors'], 
        joinCols: ['GEOID', ['FIPS','fips','countyFIPS']], 
        tableNames: ['cases','deaths', 'predictions', 'chr_health_context', 'chr_life', 'chr_health_factors',],
        accumulate: [],
        dateList: {'covid_confirmed_usafacts': 'usDateList', 'covid_deaths_usafacts': 'usDateList'}
    },
    'county_1p3a.geojson': {
        plainName: '1Point3Acres County',
        geojson: 'county_1p3a.geojson', 
        csvs: ['covid_confirmed_1p3a','covid_deaths_1p3a', 'berkeley_predictions', 'chr_health_context', 'chr_life', 'chr_health_factors'], 
        joinCols: ['GEOID', ['FIPS','fips','countyFIPS', 'GEOID']], 
        tableNames: ['cases','deaths', 'predictions', 'chr_health_context', 'chr_life', 'chr_health_factors'],
        accumulate: ['covid_confirmed_1p3a','covid_deaths_1p3a'],
        dateList: {'covid_confirmed_1p3a': 'isoDateList', 'covid_deaths_1p3a': 'isoDateList'}
    },
    'county_nyt.geojson': {
        plainName: 'New York Times County',
        geojson: 'county_nyt.geojson', 
        csvs: ['covid_confirmed_nyt', 'covid_deaths_nyt', 'berkeley_predictions', 'chr_health_context', 'chr_life', 'chr_health_factors'], 
        joinCols: ['GEOID', ['FIPS','fips','countyFIPS']], 
        tableNames: ['cases', 'deaths', 'predictions', 'chr_health_context', 'chr_life', 'chr_health_factors'],
        accumulate: [],
        dateList: {'covid_confirmed_nyt': 'isoDateList', 'covid_deaths_nyt': 'isoDateList'}
    },
    'state_1p3a.geojson': {
        plainName: '1Point3Acres State',
        geojson: 'state_1p3a.geojson', 
        csvs: ['covid_confirmed_1p3a_state','covid_deaths_1p3a_state', 'chr_health_context_state', 'chr_life_state', 'chr_health_factors_state', 'covid_testing_1p3a_state', 'covid_wk_pos_1p3a_state', 'covid_tcap_1p3a_state', 'covid_ccpt_1p3a_state', 'vaccine_admin_cdc', 'vaccine_dist_cdc'], 
        joinCols: ['GEOID', ['FIPS','fips','countyFIPS', 'GEOID']], 
        tableNames: ['cases', 'deaths', 'chr_health_context', 'chr_life', 'chr_health_factors', 'testing', 'testing_wk_pos', 'testing_tcap', 'testing_ccpt', 'vaccinesAdmin', 'vaccinesDist'],
        accumulate: ['covid_confirmed_1p3a_state','covid_deaths_1p3a_state'],
        dateList: {
            'covid_confirmed_1p3a_state': 'isoDateList', 
            'covid_deaths_1p3a_state': 'isoDateList', 
            'covid_testing_1p3a_state': 'isoDateList', 
            'covid_wk_pos_1p3a_state': 'isoDateList', 
            'covid_tcap_1p3a_state': 'isoDateList', 
            'covid_ccpt_1p3a_state': 'isoDateList', 
            'vaccine_admin_cdc': 'isoDateList', 
            'vaccine_dist_cdc': 'isoDateList'
        }
    },
    'state_usafacts.geojson': {
        plainName: 'USA Facts State',
        geojson: 'state_usafacts.geojson', 
        csvs: ['covid_confirmed_usafacts_state','covid_deaths_usafacts_state', 'chr_health_context_state', 'chr_life_state', 'chr_health_factors_state', 'covid_testing_usafacts_state', 'covid_wk_pos_usafacts_state', 'covid_tcap_usafacts_state', 'covid_ccpt_usafacts_state'], 
        joinCols: ['GEOID', ['FIPS','fips','stateFIPS']], 
        tableNames: ['cases', 'deaths', 'chr_health_context', 'chr_life', 'chr_health_factors', 'testing', 'testing_wk_pos', 'testing_tcap', 'testing_ccpt'],
        accumulate: [],
        dateList: {'covid_confirmed_usafacts_state': 'usDateList', 'covid_deaths_usafacts_state': 'usDateList'}
    },
    'state_nyt.geojson': {
        plainName: 'New York Times State',
        geojson: 'state_nyt.geojson', 
        csvs: ['covid_confirmed_nyt_state','covid_deaths_nyt_state', 'chr_health_context_state', 'chr_life_state', 'chr_health_factors_state', 'covid_testing_1p3a_state', 'covid_wk_pos_1p3a_state', 'covid_tcap_1p3a_state', 'covid_ccpt_1p3a_state', 'vaccine_admin_cdc', 'vaccine_dist_cdc'], 
        joinCols: ['GEOID', ['FIPS','fips','countyFIPS']], 
        tableNames: ['cases', 'deaths', 'chr_health_context', 'chr_life', 'chr_health_factors', 'testing', 'testing_wk_pos', 'testing_tcap', 'testing_ccpt','vaccinesAdmin', 'vaccinesDist'],
        accumulate: [],
        dateList: {'covid_confirmed_nyt_state': 'isoDateList', 'covid_deaths_nyt_state': 'isoDateList'}
    },
    'global_jhu.geojson': {
        plainName: 'John Hopkins University (Global)',
        geojson: 'global_jhu.geojson', 
        csvs: ['covid_confirmed_jhu','covid_deaths_jhu'], 
        joinCols: ['GEOID', ['UID']], 
        tableNames: ['cases', 'deaths'],
        accumulate: []
    },
    'cdc.geojson': {
        plainName: 'Center for Disease Control County',
        geojson: 'cdc.geojson', 
        csvs: ['covid_confirmed_usafacts','covid_deaths_usafacts','berkeley_predictions', 'chr_health_context', 'chr_life', 'chr_health_factors','covid_testing_cdc','covid_wk_pos_cdc', 'covid_tcap_cdc', 'covid_ccpt_cdc'], 
        joinCols: ['GEOID', ['fips_code', 'fips', 'FIPS', 'countyFIPS']], 
        tableNames: ['cases','deaths', 'predictions', 'chr_health_context', 'chr_life', 'chr_health_factors','testing', 'testing_wk_pos', 'testing_tcap', 'testing_ccpt'],
        accumulate: [],
        dateList: {'covid_confirmed_usafacts': 'usDateList', 'covid_deaths_usafacts': 'usDateList','covid_testing_cdc': 'isoDateList', 'covid_wk_pos_cdc': 'isoDateList', 'covid_tcap_cdc': 'isoDateList', 'covid_ccpt_cdc': 'isoDateList'}
    }
}

export const tooltipInfo = {
  Choropleth: <p>A thematic map used to represent data through various shading patterns on predetermined geographic areas (counties, state).</p>,
  NaturalBreaksFixed: <p>A nonlinear algorithm used to group observations such that the within-group homogeneity is maximized for the latest date, bins fixed over time</p>,
  NaturalBreaks: <p>A nonlinear algorithm used to group observations such that the within-group homogeneity is maximized for every day, bins change over time</p>,
  BoxMap: <p>Mapping counterpart of the idea behind a box plot</p>,
  Hotspot: <p>A map showing statisically significant spatial cluster and outlier locations, color coded by type.</p>,
  LocalMoran: <p>Local Moran used to identify local clusters and outliers</p>,
  NotSig:	<p>Area was not statistically signficant as a spatial cluster core or outlier using given parameters.</p>,
  HighHigh: <p>Hot Spot Cluster: area with high values, neighbored by areas with high values</p>,
  LowLow: <p>Cold Spot Cluster: area with low values, neighbored by areas with low values</p>,
  HighLow: <p>Hot Outlier: area with high values, neighbored by areas with low values</p>,
  LowHigh: <p>Low-High	Cold Outlier: area with low values, neighbored by areas with high values</p>,
  PovChldPrc: <p>Percentage of children under age 18 living in poverty</p>,
  IncRt: <p>Ratio of household income at the 80th percentile to income at the 20th percentile</p>,
  MedianHouseholdIncome: <p>The income where half of households in a county earn more and half of households earn less</p>,
  FdInsPrc: <p>Percentage of population who lack adequate access to food</p>,
  UnEmplyPrc: <p>Percentage of population age 16 and older unemployed but seeking work</p>,
  UnInPrc: <p>Percentage of people under age 65 without insurance</p>,
  PrmPhysRt: <p>Ratio of population to primary care physicians</p>,
  PrevHospRt: <p>Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees</p>,
  RsiSgrBlckRt: <p>Index of dissimilarity where higher values indicate greater residential segregation between Black and White county residents</p>,
  SvrHsngPrbRt: <p>Percentage of households with at least 1 of 4 housing problems: overcrowding, high housing costs, lack of kitchen facilities, or lack of plumbing facilities</p>,
  Over65YearsPrc: <p>Percentage of people ages 65 and older</p>,
  AdObPrc: <p>Percentage of the adult population (age 20 and older) that reports a body mass index (BMI) greater than or equal to 30 kg/m2</p>,
  AdDibPrc: <p>Percentage of adults aged 20 and above with diagnosed diabetes</p>,
  SmkPrc: <p>Percentage of adults who are current smokers</p>,
  ExcDrkPrc: <p>Percentage of adults reporting binge or heavy drinking</p>,
  DrOverdMrtRt: <p>Number of drug poisoning deaths per 100,000 population</p>,
  LfExpRt: <p>Average number of years a person can expect to live</p>,
  SlfHlthPrc: <p>Percentage of adults reporting fair or poor health</p>,
  SeverityIndex: <p>Indicates the severity of the local covid-19 outbreak, based on cumulative and predicted deaths</p>,
  PredictedDeaths: <p>Predicted number of deaths for a county</p>,
  PredictedDeathsInterval: <p>Margin of error for predicted death counts for a county </p>,
  healthfactor:<p>Health factors represent those things we can modify to improve community conditions and the length and quality of life for residents</p>,
  healthcontext: <p>Community Health Context reflects the existing health behaviors and demographics of individuals in the community that are influenced by the opportunities to live long and well</p>,
  healthlife:<p>Length and Quality of Life reflects the physical and mental well-being of residents within a community through measures representing how long and how well residents live</p>,
  Hypersegregated: <p>American metropolitan areas where black residents experience hypersegregation, see <a href="https://www.princeton.edu/news/2015/05/18/hypersegregated-cities-face-tough-road-change" target="_blank" rel="noopener noreferrer">here</a></p>,
  BlackBelt: <p>Southern US counties that were at least 40% Black or African American in the 2000 Census, see <a href="https://en.wikipedia.org/wiki/Black_Belt_in_the_American_South" target="_blank" rel="noopener noreferrer">here</a></p>,
  TestingCapacity: <p>New screening (e.g., antigen) and diagnostic (e.g., PCR) testing per capita rates by date. The suggested threshold is >150 daily tests per 100k people.</p>,
  USCongress: <p>Find your representative <a href="https://www.govtrack.us/" target="_blank" rel="noopener noreferrer">here</a></p>,
  BinModes: <p>Fixed bins represent data relative to the most recent date and show a consistent color scale.<br/> Dynamic bins change over time and generate new color scales based on the selected date.</p>
};

export const variablePresets = {
    "HEADER:cases":{},
    "Confirmed Count": {
        variableName:"Confirmed Count",
        numerator: 'cases',
        nType: 'time-series',
        nProperty: null,
        denominator: 'properties',
        dType: null,
        dProperty: null,
        dRange:null,
        dIndex:null,
        scale:1,
        scale3D: 100,
        fixedScale: null,
        colorScale: null,
    },
    "Confirmed Count per 100K Population": {
        variableName:"Confirmed Count per 100K Population",
        numerator: 'cases',
        nType: 'time-series',
        nProperty: null,
        denominator: 'properties',
        dType: 'characteristic',
        dProperty: 'population',
        dRange:null,
        dIndex:null,
        scale:100000,
        scale3D: 1000,
        fixedScale: null,
        colorScale: null,
    },
    "Confirmed Count per Licensed Bed": {
        variableName:"Confirmed Count per Licensed Bed",
        numerator: 'cases',
        nType: 'time-series',
        nProperty: null,
        denominator: 'properties',
        dType: 'characteristic',
        dProperty: 'beds',
        dRange:null,
        dIndex:null,
        scale:1,
        scale3D: 100000,
        fixedScale: null,
        colorScale: null,
    },
    "HEADER:deaths":{},
    "Death Count":{
      variableName:"Death Count",
      numerator: 'deaths',
      nType: 'time-series',
      nProperty: null,
      denominator: 'properties',
      dType: null,
      dProperty: null,
      dRange:null,
      dIndex:null,
      scale:1,
      scale3D: 10000,
      fixedScale: null,
      colorScale: null,        
    }, 
    "Death Count per 100K Population":{
      variableName:"Death Count per 100K Population",
      numerator: 'deaths',
      nType: 'time-series',
      nProperty: null,
      denominator: 'properties',
      dType: 'characteristic',
      dProperty: 'population',
      dRange:null,
      dIndex:null,
      scale:100000,
      scale3D: 15000,
      fixedScale: null,
      colorScale: null,
    },
    "Death Count / Confirmed Count":{
      variableName:"Death Count / Confirmed Count",
      numerator: 'deaths',
      nType: 'time-series',
      nProperty: null,
      denominator: 'cases',
      dType: 'time-series',
      dProperty: null,
      scale:1,
      fixedScale: null,
      colorScale: null,
    },
    "HEADER:community health":{},
    "Uninsured %":{
      variableName:"Uninsured %",
      numerator: 'chr_health_factors',
      nType: 'characteristic',
      nProperty: null,
      nRange: null,
      denominator: 'properties',
      dType: null,
      dProperty: null,
      dRange:null,
      dIndex:null,
      scale:1,
      fixedScale: null,
      colorScale: 'uninsured',
      scale3D: 15000,
    },
    "Over 65 Years %":{
      variableName:"Over 65 Years %",
      numerator: 'chr_health_context',
      nType: 'characteristic',
      nProperty: null,
      nRange: null,
      denominator: 'properties',
      dType: null,
      dProperty: null,
      dRange:null,
      dIndex:null,
      scale:1,
      fixedScale: null,
      colorScale: 'over65',
      scale3D: 15000,
    },
    "Life Expectancy":{
      variableName:"Life Expectancy",
      numerator: 'chr_life',
      nType: 'characteristic',
      nProperty: null,
      nRange: null,
      denominator: 'properties',
      dType: null,
      dProperty: null,
      dRange:null,
      dIndex:null,
      scale:1,
      colorScale: 'lifeExp',
      fixedScale: null,
      scale3D: 1000
    },
    
    "HEADER:testing":{},
    "7 Day Testing Positivity Rate %": {
      variableName:"7 Day Testing Positivity Rate %",
      numerator: 'testing_wk_pos',
      nType: 'time-series',
      nProperty: null,
      nRange: null,
      denominator: 'properties',
      dType: null,
      dProperty: null,
      dRange:null,
      dIndex:null,
      scale:1,
      fixedScale: 'testing',
      colorScale: 'testing',
      scale3D: 10000000
    },
    "7 Day Testing Capacity": {
      variableName:"7 Day Testing Capacity",
      numerator: 'testing_tcap',
      nType: 'time-series',
      nProperty: null,
      nRange: null,
      denominator: 'properties',
      dType: null,
      dProperty: null,
      dRange:null,
      dIndex:null,
      scale:1,
      fixedScale: 'testingCap',
      colorScale: 'testingCap',
      scale3D: 3000
    }, 
    "7 Day Confirmed Cases per Testing %":{
      variableName:"7 Day Confirmed Cases per Testing %",
      numerator: 'testing_ccpt',
      nType: 'time-series',
      nProperty: null,
      nRange: null,
      denominator: 'properties',
      dType: null,
      dProperty: null,
      dRange:null,
      dIndex:null,
      scale:1,
      fixedScale: 'testing',
      colorScale: 'testing',
      scale3D: 10000000
    },
    "HEADER:cdc vaccination":{},
    "Vaccinations Administered per 100K Population": {
        variableName:"Vaccinations Administered per 100K Population",
        numerator: 'vaccinesAdmin',
        nType: 'time-series',
        nProperty: null,
        denominator: 'properties',
        dType: 'characteristic',
        dProperty: 'population',
        dRange:null,
        dIndex:null,
        scale:100000,
        scale3D: 1000,
        colorScale: 'vaccination',
        fixedScale: null,
    },
    "Vaccinations Distributed per 100K Population": {
        variableName:"Vaccinations Distributed per 100K Population",
        numerator: 'vaccinesDist',
        nType: 'time-series',
        nProperty: null,
        denominator: 'properties',
        dType: 'characteristic',
        dProperty: 'population',
        dRange:null,
        dIndex:null,
        scale:100000,
        scale3D: 1000,
        colorScale: 'vaccination',
        fixedScale: null,
    },
    "HEADER:forecasting":{},
    "Forecasting (5-Day Severity Index)": {
      variableName:"Forecasting (5-Day Severity Index)",
      numerator: 'predictions',
      nType: 'characteristic',
      nProperty: null,
      nRange: null,
      denominator: 'properties',
      dType: null,
      dProperty: null,
      dRange:null,
      dIndex:null,
      scale:1,
      colorScale: 'forecasting',
      fixedScale: 'forecasting',
      scale3D: 50000
    },
}
  