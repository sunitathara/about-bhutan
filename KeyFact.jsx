import React from 'react'

const fact = [
    {label:'Capital', value:'Thimphu'},
    {label:'Offical Language', value:'Dzongkhag'},
    {label:'Governemt', value:'Constitutional monarchy'},
    {label:'Currency', value:'Ngulturm (BTN)'},
    {label:'Population', value:'Under 800,000'},

]


const KeyFact = () => {
  return (
    <div>
      <h2 className='section-title'> 🏔️Key Fact</h2>
      <lu>
        <li>Capital: Thimphu </li>
        <li>Ofical Lngague: Dzongkhag</li>
        <li>Goverment: constitutional monarchy</li>
        <li>Currency: Ngulturn(BTN)</li>
        <li>Population:Under 800,000</li>
      </lu>
    </div>
  )
}

export default KeyFact
