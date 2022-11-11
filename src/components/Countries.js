import DatatableComponent from './common/Datatable';
import { FaGlobeAfrica } from "react-icons/fa";
import '../resources/styles/App.scss';
  


function Countries() {
    return (
        <>
            <h1  id='countries' className='section-header countries-section-header'><FaGlobeAfrica className='section-icon' />  Statistics per country</h1>
            <div className="countries-section">
                <DatatableComponent />
            </div>
        </>
    )
}

export default Countries;