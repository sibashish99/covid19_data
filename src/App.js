import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import style from './App.module.css';
import {fetchData} from './api';

import image from './images/image.png';

class App extends React.Component{
    state ={
        data :{},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        //console.log(data);
        this.setState({ data : fetchedData })
    }
    handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }

    render(){
      const { data , country} = this.state;
      return(
        <div className={style.container}>
            <img className={style.image} src={image} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} /> 
        </div> 
      )
    }
}
export default App;