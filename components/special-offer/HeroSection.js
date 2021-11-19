import React, { useState } from 'react';
import { UilCheck } from '@iconscout/react-unicons';
import { redirectToCheckoutAction } from '../CheckoutForm';

const HeroSection = ({
  textContent
}) => {
  const plans = [
    {
      id: 0,
      name: 'Annual',
      price: '4.49',
      priceBefore: '8.99',
      stripeID: 'price_1JxXCDFAOdcgaBMQeIxcx8YI'
    },
    {
      id: 1,
      name: 'Monthly',
      price: '4.99',
      priceBefore: '9.99',
      stripeID: 'price_1JxXDLFAOdcgaBMQAw3ygbQa'
    }
  ];

  const [selected, setSelected] = useState(0);

  return (
    <section className="relative flex flex-col w-full pt-32 bg-cool-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-0 py-16 pb-20 lg:py-40 space-y-20 lg:space-y-0 lg:space-x-20 xl:space-x-40">

        {/* Main title */}
        <div className="flex flex-col text-left">

          <h1 className="text-5xl sm:text-6xl font-semibold text-white mb-6 sm:mb-10">
            <p>50% DE</p>
            <p>DESCUENTO EN </p>
            <p>
              TU PLAN DE&nbsp;
              <span className="underline">2TB</span>
            </p>
            <p>PARA SIEMPRE.</p>
          </h1>

          <div className="flex flex-col space-y-2 sm:space-y-4">

            <h3 className="text-sm font-normal w-full text-cool-gray-60">
              Oferta por tiempo limitado, termina el 30 de Noviembre.
            </h3>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full text-white">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => { setSelected(plan.id); }}
                  className={`flex flex-col flex-grow flex-1 p-4 space-y-4 select-none rounded-lg border-2 ${selected === plan.id ? 'bg-blue-60 bg-opacity-10 border-blue-60' : 'border-cool-gray-60 bg-white bg-opacity-1 active:bg-opacity-3'}`}
                >

                  <div className="flex flex-row w-full justify-between items-center">
                    <span className="text-sm">{plan.name}</span>
                    <div className={`flex flex-col justify-center items-center ${selected === plan.id ? 'opacity-100' : 'opacity-0'} rounded-full bg-blue-60 text-white -m-0.5 lg:m-0 p-0.5`}>
                      <UilCheck className="w-5 lg:w-4 h-5 lg:h-4" />
                    </div>
                  </div>

                  <div className="flex flex-row space-x-0.5">

                    <div className="flex flex-row space-x-1 items-start">
                      <span className="text-base font-semibold">€</span>
                      <span className="text-4xl font-bold">{plan.price}</span>
                    </div>

                    <div className="flex flex-col space-x-1 items-start">
                      <div className="relative flex flex-row ml-2 items-start opacity-40 text-white">
                        <span className="text-supporting-1 font-semibold mt-1 mr-0.5">€</span>
                        <span className="text-base font-medium">{plan.priceBefore}</span>
                        <div className="absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2 bg-white" />
                      </div>
                      <span className="text-supporting-2 font-bold">/mes</span>
                    </div>

                  </div>

                  <div className="flex flex-row items-center">
                    <span className="text-supporting-2 font-normal opacity-40">{plan.id === 0 ? 'Pago de 53.88€ cada 12 meses*' : 'Pago de 4.99€ cada mes*'}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              tabIndex={0}
              onClick={() => { redirectToCheckoutAction({ product: plans[selected].stripeID }); }}
              className="flex justify-center w-full sm:w-auto items-center p-3 border border-transparent rounded-lg text-base font-semibold tracking-wider text-white bg-blue-60 active:bg-blue-70 outline-none transition-colors duration-75 cursor-pointer select-none"
            >
              COMPRAR YA
            </button>

            <div className="flex flex-col text-supporting-2 font-normal text-center w-full text-cool-gray-60">
              <p>(*): SI EN CUALQUIER MOMENTO CANCELAS TU SUSCRIPCIÓN, CAMBIAS TU SUSCRIPCIÓN O</p>
              <p>YA NO MANTIENES UN MÉTODO DE PAGO VÁLIDO, PERDERÁS EL BENEFICIO DE ESTA OFERTA.</p>
            </div>

          </div>

        </div>

        {/* Features grid */}
        <div>
          <div
            className="hidden md:flex lg:hidden xl:flex bg-cool-gray-90 rounded-2xl"
            style={{
              width: 560,
              height: 416
            }}
          >
            horizontal grid (4x3)
          </div>

          <div
            className="hidden xs:flex md:hidden lg:flex xl:hidden bg-cool-gray-90 rounded-2xl"
            style={{
              width: 417,
              height: 560
            }}
          >
            vertical grid (3x4)
          </div>

          <div
            className="flex xs:hidden bg-cool-gray-90 rounded-2xl"
            style={{
              width: 272,
              height: 848
            }}
          >
            vertical grid (2x6)
          </div>
        </div>

      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none filter blur-lg transform scale-110 origin-center" />

    </section>
  );
};

export default HeroSection;
