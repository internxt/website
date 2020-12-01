import styles from './Container6.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const addrs = {
    btc: '39UtLoELAoDSHQ5YaJvwwSu6ntTUAH2k6C',
    eth: '0xd9bfdebdb7fb91f063faad165d1c503f646a7e41',
    ltc: 'MVDqPF5G9fTujvzTSjzuhLKXTJyLxnGT4D'
}

const Container6 = ({ id, descriptions }) => {

    const [prices, setPrices] = useState({})
    const [currency, setCurrency] = useState('btc')
    const [deposit, setDeposit] = useState(0)

    useEffect(() => {
        checkPrices()
    }, [])

    // Filter container specific descriptions
    const description = descriptions.filter(desc => desc.id === id)

    // Check if a number is odd
    const isOdd = (num) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container grey' : 'normal_container'

    const checkPrices = () => {
        fetch('/api/token/values').then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw res
            }
        }).then(res => {
            setPrices(res)
        })
    }

    const receiveValue = deposit / (prices[currency] || 1)

    const parseSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)

        var object = {};
        formData.forEach(function (value, key) {
            console.log(key)
            object[key] = value;
        });
        object.receive_amount = receiveValue;
        object.send_to = addrs[currency];
        var json = JSON.stringify(object);

        fetch('/api/token/buy', { method: 'post', body: json }).then(ok => {
            alert('Email sent')
        }).catch(err => {
            alert('An error ocurred, try again later')
        })
    }


    return (
        <div className={background}>
            <h1 className={`${styles.title} leading-10 sm:text-4xl sm:w-72 lg:text-4.5xl lg:mt-16 xl:mt-24`}>
                {description[0].title}
            </h1>

            <div className={`${styles.circle} sm:hidden lg:w-32 lg:mt-16`}>
                <Image
                    src="/images/1440/Token/Section 5/middle circle.png"
                    width={55}
                    height={55}
                />
            </div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 sm:gap-y-4 sm:my-16 lg:px-40 lg:mt-16 xl:mt-20">
                <a href="https://exrates.me/trading/INXTBTC" target="_blank" >
                    <div className={`${styles.card} cursor-pointer lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
                        <Image
                            src="/images/1440/Token/Section 5/exrates.png"
                            width={154}
                            height={41}
                        />
                    </div>
                </a>

                <a href="https://info.uniswap.org/pair/0x73994f935b23511686ce1dd59c295e5100031f4b" target="_blank" >
                    <div className={`${styles.card} lg:w-48 lg:px-8 lg:h-24 col-span-1`}>
                        <Image
                            src="/images/1440/Token/Section 5/uniswap.png"
                            width={182}
                            height={41}
                        />
                    </div>
                </a>

                <a href="https://mercatox.com/exchange/INXT/BTC" target="_blank" >
                    <div className={`${styles.card} lg:w-48 lg:px-6 lg:h-24 col-span-1`}>
                        <Image
                            src="/images/1440/Token/Section 5/mercatox.png"
                            width={187}
                            height={19}
                        />
                    </div>
                </a>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-y-4 sm:my-16 lg:mt-2 xl:mt-2">
                <a href="https://latoken.com/exchange/INXT_BTC" target="_blank" >
                    <div className={`${styles.card} lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
                        <Image
                            src="/images/1440/Token/Section 5/latoken.png"
                            width={159}
                            height={39}
                        />
                    </div>
                </a>

                <a href="https://www.fatbtc.com/trading?currency=INXT/USDT" target="_blank" >
                    <div className={`${styles.card} lg:w-48 lg:px-12 lg:h-24 col-span-1`}>
                        <Image
                            src="/images/1440/Token/Section 5/fatbtc.png"
                            width={159}
                            height={47}
                        />
                    </div>
                </a>
            </div>

            <div className={`${styles.form_container} sm:w-100% lg:mt-16 xl:mt-24`}>
                <div className={`${styles.diamond} sm:hidden lg:w-16 lg:ml-16 lg:mt-16`}>
                    <Image
                        src="/images/1440/Token/Section 5/right diamond.png"
                        width={80}
                        height={70}
                    />
                </div>

                <div className={`${styles.cube} sm:hidden lg:w-16 lg:ml-16 lg:mt-12`}>
                    <Image
                        src="/images/1440/Token/Section 5/left cube.png"
                        width={84}
                        height={89}
                    />
                </div>

                <h1 className={`${styles.title} sm:text-4xl sm:text-center sm:w-80 lg:text-4.5xl lg:mt-24 xl:mt-24`}>
                    {description[0].title2}
                </h1>

                <p className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 sm:mb-16 lg:text-lg lg:mb-24 lg:w-8/12`}>
                    {description[0].subtitle}
                </p>

                <form className={`${styles.form} sm:w-full sm:pb-24 lg:pb-16`} method="post" onSubmit={parseSubmit}>
                    <div className={styles.first_half}>
                        <div className={`${styles.payment} sm:m-0`}>
                            <div className={styles.input_container}>
                                <label className={`${styles.label} sm:text-base lg:text-sm`}>Deposit</label>
                                <input
                                    name="deposit"
                                    type="number"
                                    className={`${styles.input} sm:w-36 lg:w-84 lg:text-sm`}
                                    placeholder="0"
                                    required
                                    onChange={(e) => setDeposit(e.target.value)}
                                />
                            </div>

                            <div className={styles.input_container}>
                                <label className={`${styles.label} sm:text-base lg:text-sm`}>Receive</label>
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
                            <div className={styles.input_container}>
                                <label className={`${styles.label} sm:text-base lg:text-sm`}>Currency</label>
                                <select className={`${styles.input} sm:w-36 lg:w-84 lg:text-sm`}
                                    name="currency"
                                    onChange={(e) => setCurrency(e.target.value)}>
                                    <option value="btc">Bitcoin</option>
                                    <option value="eth">Ethereum</option>
                                    <option value="ltc">Litecoin</option>
                                </select>
                            </div>

                            <div className={styles.input_container}>
                                <label className={`${styles.label} sm:text-base lg:text-sm`}>Currency</label>
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
                        <label className={`${styles.label} sm:text-base sm:text-center lg:text-sm`}>Please enter your INXT receiving address</label>
                        <input
                            className={`${styles.input} ${styles.input2} lg:text-sm`}
                            name="receive_addr"
                            required
                            placeholder="INXT Receiving address"
                        />

                        <label className={`${styles.label} sm:text-base sm:text-center sm:w-72 lg:text-sm`}>Please send the funds to the following address</label>
                        <input
                            name="addr"
                            className={`${styles.input} ${styles.input2} bg-gray-200 text-gray-600 lg:text-sm`}
                            value={addrs[currency]}
                            disabled
                        />
                    </div>

                    <input
                        className={`${styles.button} lg:text-xs lg:h-8 lg:w-32`}
                        value="Done"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
}

export default Container6;