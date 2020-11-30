import styles from './Container6.module.css'
import descriptions from '../../assets/lang/en/core-descriptions.json'
import Image from 'next/image'

const Container6 = ({ id, downloadUrl }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container grey' : 'normal_container'

    return ( 
        <div className={`${background}`}>
            <h1 className={`${styles.title} sm:hidden`}>
                {description[0].title}
            </h1>

            <div className="grid grid-cols-4 gap-4 sm:flex sm:flex-col sm:items-center sm:mb-12 xl:mb-24">
                <div className={`${styles.card} col-span-2 sm:h-auto sm:w-84 sm:m-0 sm:mt-12 sm:p-0 sm:shadow-none sm:border-0`}>
                    <div className={`${styles.steps}`}>
                        <p className={`${styles.steps_text} sm:text-13`}>STEP 1</p>
                    </div>

                    <h1 className={`${styles.card_title} sm:text-3xl`}>
                        {description[0].title1}
                    </h1>

                    <p className={`${styles.card_subtitle} sm:text-lg`}>
                        {description[0].subtitle}
                    </p>

                    <a href={downloadUrl} className={`${styles.card_link} sm:text-lg`}>
                        Download Internxt Core
                    </a>
                </div>

                <div className="hidden sm:block sm:h-1 sm:w-10/12 sm:bg-gray-300 sm:my-8"></div>

                <div className={`${styles.card} col-span-2 sm:h-auto sm:w-84 sm:m-0 sm:p-0 sm:shadow-none sm:border-0`}>
                    <div className={`${styles.steps}`}>
                        <p className={`${styles.steps_text} sm:text-13`}>STEP 2</p>
                    </div>

                    <h1 className={`${styles.card_title} sm:text-3xl`}>
                        {description[0].title2}
                    </h1>

                    <p className={`${styles.card_subtitle} sm:text-lg`}>
                        {description[0].subtitle2}
                    </p>

                    <p className={`${styles.card_subtitle} sm:text-lg`}>
                        {description[0].subtitle3}
                    </p>
                </div>

                <div className="hidden sm:block sm:h-1 sm:w-10/12 sm:bg-gray-300 sm:mt-4 sm:mb-12"></div>
                
                <div className={`${styles.card} col-span-4 w-auto sm:h-auto sm:w-84 sm:m-0 sm:p-0 sm:shadow-none sm:border-0`}>
                    <div className={`${styles.steps}`}>
                        <p className={`${styles.steps_text} sm:text-13`}>STEP 3</p>
                    </div>

                    <h1 className={`${styles.card_title} sm:text-3xl`}>
                        {description[0].title3}
                    </h1>

                    <div className={`${styles.long_card_description} sm:flex-col`}>
                        <div className={`${styles.paragraph} sm:w-auto sm:m-0`}>
                            <p className={`${styles.card_subtitle} sm:text-lg sm:mt-4`}>
                                {description[0].subtitle4}
                            </p>

                            <p className={`${styles.card_subtitle} sm:text-lg sm:mt-0`}>
                                {description[0].subtitle5}
                            </p>
                        </div>
                        
                        <p className={`${styles.card_subtitle} sm:w-auto sm:text-lg sm:mt-0 w-1/2`}>
                            {description[0].subtitle6}
                        </p>
                    </div>
                </div>
            </div>

            <Image src="/images/1440/Core/Section 6/emoji.png" width={89} height={105} />
            <h1 className={`${styles.all_set} sm:text-5xl`}>
                You're all set!
            </h1>
        </div>
    );
}

export default Container6;