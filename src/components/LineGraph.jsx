import { useState } from 'react'
import './LineGraph.css'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import regArray from '../data/newVehicleRegistrations.json';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

function LineGraph() {
  const {t} = useTranslation();

  const [lineGraphStartYear, setLineGraphStartYear] = useState(2017);
  const [lineGraphEndYear, setLineGraphEndYear] = useState(2024);
  const [lineGraphFuelType, setLineGraphFuelType] = useState('All Fuel Types');

  const startYearIndex = lineGraphStartYear - 2017;
  const endYearIndex = lineGraphEndYear - 2017

  const filteredRegArray = regArray.filter((currIndex) => 
      currIndex['Fuel type'] == lineGraphFuelType && 
      currIndex['Geography'] == "Canada"
  )[0].value.slice(startYearIndex, endYearIndex + 1);

  function onChangeLineGraphStartYear(event) {
      if (event.target.value < lineGraphEndYear) {
          setLineGraphStartYear(event.target.value);
      }
  }

  function onChangeLineGraphEndYear(event) {
      if (event.target.value > lineGraphStartYear) {
          setLineGraphEndYear(event.target.value);
      }
  }

  function onChangeLineGraphFuelType(event) {
      setLineGraphFuelType(event.target.value);
  }


  console.log(filteredRegArray);

  return (
    <div className='row justify-content-center bar-graph-element'>
        <div className='col-2 chart-customise mx-3 px-4 py-3 text-center'>
            <h3>{t('lineChart.description')}</h3>
            <p className="text-start chart-paragraph">{t('lineChart.paragraph')}</p>        
        </div>
        <div className='col-5 justify-content-center text-center chart px-5 py-3'>
            <h3 className='pb-3'>{t('lineChart.title')}</h3>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={filteredRegArray} margin={{left: 30, right:30}}>
                    <CartesianGrid 
                        stroke="#ccc" 
                        strokeDasharray="5 5" 
                        fill="#0F2034"
                    />

                    <Line 
                        dataKey="Cars Registered" 
                        fill="#4d5894" 
                        stroke="#75bcffff" 
                        strokeWidth={2}
                    />

                    <XAxis 
                        dataKey="year" 
                        stroke="white"
                    />

                    <YAxis 
                        stroke="white"
                    />

                    <Legend 
                        formatter={(label) => [`${t('lineChart.carsRegistered')}`]}
                    />

                    <Tooltip formatter={(value, valueLabel) => [`${value}`, `${t('lineChart.carsRegistered')}`]} />
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className='col-2 justify-content-center chart-customise mx-3 px-5 py-3 text-center'>
            <h3>{t('lineChart.graphSettings')}</h3>
            <div className='row my-3'>
                <Form.Label className="form-label">{t('lineChart.startYear')}: {lineGraphStartYear}</Form.Label>
                <Form.Range
                    className="custom-slider"
                    min={2017}
                    max={2024}
                    value={lineGraphStartYear}
                    onChange={onChangeLineGraphStartYear}
                />
            </div>

            <div className='row my-3'>
                <Form.Label className="form-label">{t('lineChart.endYear')}: {lineGraphEndYear}</Form.Label>
                <Form.Range
                    className="custom-slider"
                    min={2017}
                    max={2024}
                    value={lineGraphEndYear}
                    onChange={onChangeLineGraphEndYear}
                />
            </div>

            <div className='row my-3'>
                <Form.Label className="form-label">{t('lineChart.fuelType')}</Form.Label>
                <Form.Select className="custom-form-select" onChange={onChangeLineGraphFuelType}>
                    <option value="All Fuel Types">{t('fuelTypes.all')}</option>
                    <option value="Gasoline">{t('fuelTypes.gasoline')}</option>
                    <option value="Diesel">{t('fuelTypes.diesel')}</option>
                    {/* <option value="All Zero-emission Vehicles">All Zero-emission Vehicles</option> */}
                    <option value="Battery Electric">{t('fuelTypes.batteryElectric')}</option>
                    <option value="Plug-in Hybrid Electric">{t('fuelTypes.plugInHybrid')}</option>
                    <option value="Hybrid Electric">{t('fuelTypes.hybridElectric')}</option>
                    <option value="Other Fuel Types">{t('fuelTypes.other')}</option>
                </Form.Select>
            </div>
        </div>
    </div>
  )
}

export default LineGraph
