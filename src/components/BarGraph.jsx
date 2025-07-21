import { useState } from 'react'
import './BarGraph.css'
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import regArray from '../data/newVehicleRegistrations.json';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';

function BarGraph() {
  const {t} = useTranslation();

  const [barGraphYear, setBarGraphYear] = useState(2024);
  const [barGraphProvince, setBarGraphProvince] = useState("Ontario");

  const year = barGraphYear - 2017; // 1 is  
  const province = barGraphProvince;

  function onChangeBarGraphYear(event) {
    setBarGraphYear(event.target.value);
  }

  function onChangeBarGraphProvince(event) {
    setBarGraphProvince(event.target.value);
  }

  let barChartData = [];

  const filteredRegArray = regArray.filter((currIndex) =>
      currIndex['Geography'] == province
  );

  for (let i = 0; i < filteredRegArray.length; i++) {

    if (filteredRegArray[i]['Fuel type'] != 'All Fuel Types' && filteredRegArray[i]['Fuel type'] != 'All Zero-emission Vehicles') {
      let tempBarChartData = {};
      tempBarChartData['Fuel type'] = filteredRegArray[i]['Fuel type'];
      tempBarChartData['Cars Registered'] = filteredRegArray[i]['value'][year]['Cars Registered'];

      barChartData = barChartData.concat([tempBarChartData]);
    }


  }

  return (
    <div className='row justify-content-center bar-graph-element'>
      <div className='col-2 chart-customise mx-3 px-4 py-3 text-center'>
        <h3>{t('barChart.description')}</h3>
        <p className="text-start chart-paragraph">{t('barChart.paragraph')}</p>
      </div>
      <div className='col-5 justify-content-center text-center chart px-5 py-3'>
        <h3 className='pb-3'>{t('barChart.title')}</h3>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={barChartData} margin={{left: 30, right: 30, bottom: 5}}>
            <XAxis 
              dataKey="Fuel type" 
              stroke="white" 
              tick={{fontSize: 20}} 
              tickFormatter={(label) => `${t('barChart.'+label.replaceAll(' ', '')+'Short')}`} 
              angle={0}
              
            />
            <YAxis 
              stroke="white"
            />
            <Tooltip 
              labelFormatter={(label) => `${t('barChart.'+label.replaceAll(' ', ''))}`}
              formatter={(value, valueLabel) => [`${value}`, `${t('lineChart.carsRegistered')}`]}/>
            <CartesianGrid 
              stroke="#ccc" 
              strokeDasharray="5 5" 
              fill="#0F2034" />
            <Bar dataKey="Cars Registered" fill="#75bcffff"  barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className='col-2 justify-content-center chart-customise mx-3 px-5 py-3 text-center'>
        <h3>{t('barChart.graphSettings')}</h3>
        <div className='row my-3'>
            <Form.Label>{t('barChart.year')}</Form.Label>
            <Form.Select value={barGraphYear} onChange={onChangeBarGraphYear}>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2023">2024</option>
            </Form.Select>
        </div>

        <div className='row my-3'>
            <Form.Label>{t('barChart.province')}</Form.Label>
            <Form.Select value={barGraphProvince} onChange={onChangeBarGraphProvince}>
                <option value='Canada'>{t('provinces.all')}</option>
                <option value='Newfoundland and Labrador'>{t('provinces.newfoundlandAndLabrador')}</option>
                <option value='Prince Edward Island'>{t('provinces.princeEdwardIsland')}</option>
                <option value='Nova Scotia'>{t('provinces.novaScotia')}</option>
                <option value='New Brunswick'>{t('provinces.newBrunswick')}</option>
                <option value='Quebec'>{t('provinces.quebec')}</option>
                <option value='Ontario'>{t('provinces.ontario')}</option>
                <option value='Manitoba'>{t('provinces.manitoba')}</option>
                <option value='Saskatchewan'>{t('provinces.saskatchewan')}</option>
                <option value='Alberta'>{t('provinces.alberta')}</option>
                <option value='British Columbia'>{t('provinces.britishColumbia')}</option>
                <option value='Yukon'>{t('provinces.yukon')}</option>
                <option value='Northwest Territories'>{t('provinces.northwestTerritories')}</option>
                <option value='Nunavut'>{t('provinces.nunavut')}</option>
            </Form.Select>
        </div>
      </div>
    </div>
  )
}

export default BarGraph
