import styles from './Container6.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ToolTip from 'react-tooltip'
import { useEffect, useState } from 'react'

const addrs = {
    btc: '39UtLoELAoDSHQ5YaJvwwSu6ntTUAH2k6C',
    eth: '0x60C8875DfD793ed579EEa73cB417F345b6D850B0',
    ltc: 'MVDqPF5G9fTujvzTSjzuhLKXTJyLxnGT4D'
}

const Container6 = ({ id, descriptions, data }) => {
    const [prices, setPrices] = useState({})
    const [currency, setCurrency] = useState('btc')
    const [deposit, setDeposit] = useState()
    const [error, setError] = useState(null)

    useEffect(() => {
        setPrices({
            btc: data.inxtToBTC.data.INXT.quote.BTC.price,
            eth: data.inxtToETH.data.INXT.quote.ETH.price,
            ltc: data.inxtToLTC.data.INXT.quote.LTC.price
        })
    }, [])

    // Filter container specific descriptions
    const description = descriptions.filter(desc => desc.id === id)
    // Check if a number is odd
    const isOdd = (num) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container grey' : 'normal_container'

    /**
     * Calculate the price given a currency
     * The currency is the index of the prices array
     */
    const calculatePrice = (index) => {
        return (deposit / (prices[index] || 0)) * 0.6;
    } // 40 comission

    const validateForm = (formCurrency) =>
    {
        const confirmReceiveValue = calculatePrice(formCurrency);
        return confirmReceiveValue === receiveValue;
    }

    const receiveValue = (deposit / (prices[currency] || 0)) * 0.6; // 40 comission

    const parseSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        let object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        object.receive_amount = receiveValue;
        object.send_to = addrs[currency];
        
        if(!validateForm(object.currency))
        {
            setError("We had a problem validating your request. \nTry Again")
            return;
        }

        const json = JSON.stringify(object);
        fetch('/api/token/buy', { method: 'post', body: json }).then(ok => {
            alert('Thank you! As soon as we receive your payment, we will purchase INXT from the market with those funds and send them to your INXT deposit address.')
        }).catch(err => {
            alert('An error ocurred, try again later')
        })
    }

    const handleDeposit = (e) => {
        let value = e.target.value;
        value = value.replace('+', '').replace('-', '');
        if(value.startsWith('.'))
        {
            value = '0'.concat(value);
        }
        setDeposit(value);
    }


    return (
        <div className={background}>
            <h1 data-aos="fade-up" data-aos-duration="300" className={`${styles.title} leading-10 sm:text-4xl sm:w-72 lg:text-4.5xl lg:mt-16 xl:mt-24`}>
                {description[0].title}
            </h1>

            <div className={`${styles.circle} sm:hidden lg:w-32 lg:mt-16`}>
                <Image
                    src="/images/1440/Token/Section 5/middle circle.webp"
                    width={55}
                    height={55}
                />
            </div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 sm:gap-y-4 sm:mt-16 lg:px-40 lg:mt-16 xl:mt-20">
                <div data-aos="fade-up" data-aos-duration="300">
                    <a href="https://exrates.me/trading/INXTBTC" target="_blank" >
                        <div className={`${styles.card} cursor-pointer lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
                            <Image
                                src="/images/1440/Token/Section 5/exrates.webp"
                                width={154}
                                height={41}
                            />
                        </div>
                    </a>
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50">
                    <a href="https://info.uniswap.org/pair/0x73994f935b23511686ce1dd59c295e5100031f4b" target="_blank" >
                        <div className={`${styles.card} lg:w-48 lg:px-8 lg:h-24 col-span-1`}>
                            <Image
                                src="/images/1440/Token/Section 5/uniswap.webp"
                                width={182}
                                height={41}
                            />
                        </div>
                    </a>
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                    <a href="https://mercatox.com/exchange/INXT/BTC" target="_blank" >
                        <div className={`${styles.card} lg:w-48 lg:px-6 lg:h-24 col-span-1`}>
                            <Image
                                src="/images/1440/Token/Section 5/mercatox.webp"
                                width={187}
                                height={19}
                            />
                        </div>
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-y-4 sm:mt-4 sm:mb-16 lg:mt-2 xl:mt-2">
                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150">
                    <a href="https://latoken.com/exchange/INXT_BTC" target="_blank" >
                        <div className={`${styles.card} lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
                            <Image
                                src="/images/1440/Token/Section 5/latoken.webp"
                                width={159}
                                height={39}
                            />
                        </div>
                    </a>
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200">
                    <a href="https://www.fatbtc.com/trading?currency=INXT/USDT" target="_blank" >
                        <div className={`${styles.card} lg:w-48 lg:px-12 lg:h-24 col-span-1`}>
                            <Image
                                src="/images/1440/Token/Section 5/fatbtc.webp"
                                width={159}
                                height={47}
                            />
                        </div>
                    </a>
                </div>
            </div>
                {error ?
                (<div className={background}> 
                    <p className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 sm:mb-16 lg:text-lg lg:mb-24 lg:w-8/12`}>
                        {error}
                    </p>

                    <div className={`${styles.form_container} sm:w-100% lg:mt-16 xl:mt-24`}>
                        <button
                            className={`${styles.button} lg:text-xs lg:h-8 lg:w-32`}
                            value="Try Again"
                            type="submit"
                            onClick={ () => {
                                setPrices({
                                    btc: data.inxtToBTC.data.INXT.quote.BTC.price,
                                    eth: data.inxtToETH.data.INXT.quote.ETH.price,
                                    ltc: data.inxtToLTC.data.INXT.quote.LTC.price
                                });
                                setCurrency('btc')
                                setDeposit()
                                setError(null)
                            }}
                        /> 
                    </div> 
                </div>)
                :
                (<div className={`${styles.form_container} sm:w-100% lg:mt-16 xl:mt-24`}>
                        <div className={`${styles.diamond} sm:hidden lg:w-16 lg:ml-16 lg:mt-16`}>
                            <Image
                                src="/images/1440/Token/Section 5/right diamond.webp"
                                width={80}
                                height={70}
                            />
                        </div>

                        <div className={`${styles.cube} sm:hidden lg:w-16 lg:ml-16 lg:mt-12`}>
                            <Image
                                src="/images/1440/Token/Section 5/left cube.webp"
                                width={84}
                                height={89}
                            />
                        </div>

                        <div id="buyINX"> </div>             
                        <h1 data-aos="fade-up" data-aos-duration="300" className={`${styles.title} sm:text-4xl sm:text-center sm:w-80 lg:text-4.5xl lg:mt-24 xl:mt-24`}>
                            {description[0].title2}
                        </h1>

                        <p data-aos="fade-up" data-aos-duration="300" className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 sm:mb-16 lg:text-lg lg:mb-24 lg:w-8/12`}>
                            {description[0].subtitle}
                        </p>

                        <form className={`${styles.form} sm:w-full sm:pb-24 lg:pb-16`} method="post" onSubmit={parseSubmit}>
                            <div className={styles.first_half}>
                                <div className={`${styles.payment} sm:m-0`}>
                                    <div data-aos="fade-up" data-aos-duration="300" className={styles.input_container}>
                                        <label className={`${styles.label} sm:text-base lg:text-sm`}>
                                            {description[0].deposit}
                                        </label>
                                        <input
                                            name="deposit"
                                            type="number"
                                            className={`${styles.input} sm:w-36 lg:w-84 lg:text-sm`}
                                            placeholder="0"
                                            required
                                            onChange={handleDeposit}
                                            value={deposit}
                                            min="0"
                                            step=".01"
                                        />
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50" className={styles.input_container}>
                                        <ToolTip type='warning' backgroundColor='#f0f0f0' textColor='black' effect='solid' id="cmc-info">
                                        {description[0].tooltip}
                                        </ToolTip>
                                        <label className={`${styles.label} sm:text-base lg:text-sm`}>
                                            {description[0].receive} <a data-tip data-for='cmc-info'><FontAwesomeIcon icon={faInfoCircle} color={'#c0c0c0'} /></a>
                                        </label>
                                        <input
                                            className={`${styles.input} bg-gray-200 text-gray-600 sm:w-36 lg:w-84 lg:text-sm`}
                                            type="number"
                                            name="receive"
                                            value={receiveValue}
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className={`${styles.currency} sm:m-0`}>
                                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100" className={styles.input_container}>
                                        <label className={`${styles.label} sm:text-base lg:text-sm`}>
                                            {description[0].currency}
                                        </label>
                                        <select className={`${styles.input} sm:w-36 lg:w-84 lg:text-sm`}
                                            name="currency"
                                            onChange={(e) => setCurrency(e.target.value)}>
                                            <option value="btc">Bitcoin</option>
                                            <option value="eth">Ethereum</option>
                                            <option value="ltc">Litecoin</option>
                                        </select>
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150" className={styles.input_container}>
                                        <label className={`${styles.label} sm:text-base lg:text-sm`}>
                                            {description[0].currency}
                                        </label>
                                        <input
                                            className={`${styles.input} bg-gray-200 text-gray-600 sm:w-36 lg:w-84 lg:text-sm`}
                                            name="own_currency"
                                            value="Internxt"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.second_half} sm:w-84 sm:items-center`}>
                                <label data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className={`${styles.label} sm:text-base sm:text-center lg:text-sm`}>
                                    {description[0].address1}
                                </label>
                                <input
                                    data-aos="fade-up" data-aos-duration="300" data-aos-delay="250"
                                    className={`${styles.input} ${styles.input2} lg:text-sm`}
                                    name="receive_addr"
                                    required
                                    placeholder="INXT Receiving address"
                                />

                                <label data-aos="fade-up" data-aos-duration="300" data-aos-delay="300" className={`${styles.label} sm:text-base sm:text-center sm:w-72 lg:text-sm`}>
                                    {description[0].address2}
                                </label>
                                <input
                                    data-aos="fade-up" data-aos-duration="300" data-aos-delay="350"
                                    name="addr"
                                    className={`${styles.input} ${styles.input2} bg-gray-200 text-gray-600 lg:text-sm`}
                                    value={addrs[currency]}
                                    disabled
                                />
                            </div>

                            { receiveValue > 100 ? 
                                <button
                                    data-aos="fade-up" data-aos-duration="300" data-aos-delay="400"
                                    className={`${styles.button} lg:text-xs lg:h-8 lg:w-32`}
                                    value={description[0].button}
                                    type="submit"
                                /> 
                                : 
                                <div
                                    data-aos="fade-up" 
                                    data-aos-duration="300" 
                                    data-aos-delay="400"
                                    className={`${styles.warning} sm:text-base sm:text-center sm:w-72 lg:text-sm`}
                                > 
                                    {description[0].warning}
                                </div> 
                            }
                        </form>
                    </div>)}
        </div>
    );
}

export default Container6;