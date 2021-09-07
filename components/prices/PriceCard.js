import React, { useEffect, useState } from 'react';
import { redirectToCheckoutAction } from '../../components/CheckoutForm';

const PriceCard = ({
  planType,
  storage,
  price,
  billingFrequency,
  featureList,
  cta,
  setUsers,
  getUsers,
  popular,
  lang
}) => {

  const [stripeObject, setStripeObject] = useState({});
  // const [userCount, setUserCount] = useState(2);

  const billingFrequencyList = {
    "-1": "lifetime",
    "1": "monthly",
    "6": "semiannually",
    "12": "annually"
  }

  var totalBilled = Math.abs(price * billingFrequency).toFixed(2);
  var teamsBilled = (totalBilled * getUsers).toFixed(2);
  const MAX_USERS = 200;
  const contentText = require(`../../assets/lang/${lang}/priceCard.json`);

  useEffect(() => {
    if (cta[0] === 'checkout') {
      const stripeObj = { product: cta[1] };
      setStripeObject(stripeObj);
    }
  }, []);

  return (
    <div className={`priceCard ${popular ? 'bg-blue-60 ring-4 ring-blue-60' : ''} flex flex-col flex-shrink-0 flex-grow-0 max-w-xs rounded-2xl shadow-xl overflow-hidden m-2`}>

      <div className={`mostPopular ${popular ? '' : 'hidden'} flex flex-col py-1.5 items-center justify-center text-xs font-semibold text-white`}>{contentText.mostPopular}</div>

      <div className={`info flex flex-col p-6 items-center justify-center bg-white ${popular ? 'rounded-t-2xl' : ''}`}>
        <div className={`storage flex flex-row whitespace-nowrap py-1 pb-0.5 px-4 max-w-min ${popular ? 'bg-blue-10 text-blue-60' : 'bg-neutral-20 text-neutral-80'} font-semibold rounded-full`}>
          <p>{storage}<span className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-sm`}>{contentText.perUserSlash}</span></p>
        </div>

        <div className={`planPrice flex flex-col p-10 justify-center items-center space-y-4`}>
          <div className={`priceBreakdown flex ${planType.toLowerCase() === 'individual' ? 'flex-row space-x-px items-end' : 'flex-col items-center'}`}>
            <span className={`perUser ${planType.toLowerCase() === 'individual' ? 'hidden' : ''} text-xs font-semibold`}>{contentText.perUser}</span>
            <p className="flex flex-row items-start text-neutral-700 font-semibold space-x-0.5"><span className={`currency ${price <= 0 ? 'hidden' : ''}`}>€</span><span className="price text-4xl font-bold">{price<= 0 ? `${contentText.freePlan}` : price}</span></p>
            <span className={`perMonth ${(price <= 0) ? 'hidden' : (billingFrequency < 0 ? 'hidden' : '')}`}>{contentText.perMonth}</span>
          </div>

          <div className={`totalBilling ${planType.toLowerCase() === 'individual' ? 'flex' : 'hidden'} flex-row text-neutral-80 text-xs`}>
            <p className={`${price <= 0 ? 'hidden' : ''}`}>
              <span className={`totalBilled ${billingFrequency < 0 ? 'hidden' : ''}`}><span className="currency text-supporting-2">€</span>{totalBilled} </span><span className="billingFrequency">{contentText.billingFrequencyLabel[billingFrequencyList[billingFrequency]]}</span>
            </p>
            <p className={`${price <= 0 ? '' : 'hidden'}`}>{contentText.price.free}</p>
          </div>
        </div>

        <div className={`businessUserCount ${planType.toLowerCase() === 'individual' ? 'hidden' : 'flex'} flex-col w-full bg-neutral-10 ring-1 ring-neutral-20 rounded-lg p-4 mb-4`}>
          
          <div className="input relative flex flex-row justify-between bg-white rounded-lg ring-1 ring-neutral-30">
            <button onClick={() => { if (getUsers >= 3) { setUsers(parseInt(getUsers) - 1) } else ( setUsers(2) ) }} className={`flex flex-row items-center justify-center h-10 w-10 sm:h-8 sm:w-8 ${(getUsers > 2) ? 'bg-blue-60 text-white active:bg-blue-70' : 'bg-neutral-30 text-neutral-80 active:bg-neutral-40 cursor-not-allowed'} text-2xl font-light z-10 rounded-l-lg transition-all sm:duration-50 select-none`}><span className="mb-1">-</span></button>
            <button onClick={() => { if (getUsers <= MAX_USERS - 1) { setUsers(parseInt(getUsers) + 1) } else ( setUsers(MAX_USERS) ) }} className={`flex flex-row items-center justify-center h-10 w-10 sm:h-8 sm:w-8 ${(getUsers < MAX_USERS) ? 'bg-blue-60 text-white active:bg-blue-70' : 'bg-neutral-30 text-neutral-80 active:bg-neutral-40 cursor-not-allowed'} text-2xl font-light z-10 rounded-r-lg transition-all sm:duration-50 select-none`}><span className="mb-1">+</span></button>
            <label htmlFor={`users_${storage}`} className={`absolute top-0 left-0 h-full w-full flex flex-row items-center justify-center text-xl sm:text-base font-medium cursor-text`}>
              <div className="relative flex flex-row h-full items-center">
                <span className={`pointer-events-none ${(getUsers === NaN || getUsers === '' || getUsers < 1) ? '' : 'opacity-0'}`}>{(getUsers === NaN || getUsers === '' || getUsers < 1) ? 0 : getUsers}</span>
                <input id={`users_${storage}`} type="number" inputmode="numeric" min="2" max={MAX_USERS} step="1" value={getUsers} onChange={(e) => { e.target.value.toString().startsWith('0') ? e.target.value = e.target.value.toString().slice(1, e.target.value.toString().length) : setUsers( (e.target.value > MAX_USERS) ? MAX_USERS : e.target.value ) }} onBlur={(e) => { setUsers( (e.target.value > MAX_USERS) ? MAX_USERS : (e.target.value < 2 ? 2 : e.target.value) ) }} className={`absolute left-0 bg-transparent font-medium appearance-none outline-none w-14 min-w-full`} />
              </div>
              <span className="ml-1 select-none">{contentText.users}</span>
            </label>
          </div>

          <div className="flex flex-row w-full justify-between text-neutral-700 mt-4">
            <span className="font-semibold">Total:</span>
            <div className="flex flex-row items-end">
              <div className="flex flex-row items-start">
                <span className="text-xs mt-0.5 mr-0.5">€</span>
                <span>{teamsBilled}</span>
              </div>
              <span className="text-xs text-neutral-100 mb-1 ml-0.5">{contentText.billingFrequencyLabelSmall[billingFrequencyList[billingFrequency]]}</span>
            </div>
          </div>

        </div>

        <div
          onClick={() => { cta[0] === 'checkout' ? redirectToCheckoutAction(stripeObject) : location.href=cta[1] }}
          className="flex flex-row w-full"
        >
          <button className="subscribePlan flex justify-center w-full items-center px-6 py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-blue-60  active:bg-blue-70 transform origin-center active:translate-y-0.5 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75 cursor-pointer select-none">
            <p className={`${price <= 0 ? 'hidden' : ''} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>{contentText.cta.buy} {storage}</p>
            <p className={`${price <= 0 ? '' : 'hidden'} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>{contentText.cta.signUpNow}</p>
            <p className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''}`}>{contentText.cta.getStarted}</p>
          </button>
        </div>
      </div>
      
      <div className="featureList flex flex-col p-6 text-neutral-500 bg-neutral-10 border-t border-neutral-20">
        <div className="flex flex-col space-y-2">
          <div className={`flex flex-row items-start space-x-2 font-semibold`}><img loading="lazy" className="mt-0.5 transform translate-y-px select-none" src="/icons/checkNeutral500.svg" draggable="false"/><span className={`${price <= 0 ? 'hidden' : 'flex'}`}>{billingFrequency < 0 ? `${contentText.features.enjoyForever.enjoy} ${storage} ${contentText.features.enjoyForever.forever}` : `${contentText.features.moneyBack}`}</span><span  className={`${price <= 0 ? 'flex' : 'hidden'}`}>{contentText.features.enjoyForever.enjoy} {storage} {contentText.features.enjoyForever.forever}</span></div>
          <div className="flex flex-row items-start space-x-2"><img loading="lazy" className="mt-0.5 transform translate-y-px select-none" src="/icons/checkNeutral500.svg" draggable="false"/><span>{contentText.features.encryptedFiles}</span></div>
          <div className="flex flex-row items-start space-x-2"><img loading="lazy" className="mt-0.5 transform translate-y-px select-none" src="/icons/checkNeutral500.svg" draggable="false"/><span>{contentText.features.accessFromAnywhere}</span></div>
          <div className="flex flex-row items-start space-x-2"><img loading="lazy" className="mt-0.5 transform translate-y-px select-none" src="/icons/checkNeutral500.svg" draggable="false"/><span>{contentText.features.allServices}</span></div>
        </div>
      </div>

    </div>
  )
}

export default PriceCard;
