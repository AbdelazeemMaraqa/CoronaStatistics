import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable, { createTheme } from 'react-data-table-component';
import { FaSearch } from "react-icons/fa";
import '../../resources/styles/App.scss';

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('solarized', {
    background: {
      default: 'transparent',
    },
    text: {
      primary: '#61dafb',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
}, 'dark');

//  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
    table: {
        style: {
            backgroundColor: '#282c34', // override the row height
        },
    },
};

const columns = [
    {
        name: 'Country',
        selector: row => row.Country,
        sortable: true,
    },
    {
        name: 'Cases',
        selector: row => row.TotalConfirmed,
        sortable: true,
    },
    {
        name: 'Deaths',
        selector: row => row.TotalDeaths,
        sortable: true,
    },
    {
        name: 'Recovered',
        selector: row => row.TotalRecovered,
        sortable: true,
    },
];

function ExpandedComponent({ data }) {
    return <div className='country-details'>
        <h6>Country:            {data.Country}</h6>
        <h6>New Cases:          {data.NewConfirmed.toLocaleString()}</h6>
        <h6>Total Cases:        {data.TotalConfirmed.toLocaleString()}</h6>
        <h6>New Deaths:         {data.NewDeaths.toLocaleString()}</h6>
        <h6>Total Deaths:       {data.TotalDeaths.toLocaleString()}</h6>
        <h6>New Recovered:      {data.NewRecovered.toLocaleString()}</h6>
        <h6>Total Recovered:    {data.TotalRecovered.toLocaleString()}</h6>
    </div>
};

function DatatableComponent() {
    const data      = useContext(AppContext);
    const countries = data.Countries
    const [filteredCountries, setCountries] = useState(countries)

    function searchCountry(e){
        let text    = e.target.value.toLowerCase()
        let result  = countries.filter(country => country.Country.toLowerCase().includes(text))
        setCountries(result)
    }

    return (
        <div className='container'>
            <div className="search-container">
                <input id="search-box" type="text" className="search-box" onChange={(e) => searchCountry(e)} />
                <label htmlFor="search-box"><FaSearch className="search-icon" /></label>
            </div>
            <DataTable
                columns={columns}
                data={filteredCountries}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                striped={true}
                highlightOnHover={true}
                pagination={true}
                theme="solarized"
                customStyles={customStyles}
            />
        </div>
    )
}

export default DatatableComponent;