import styles from './Container8.module.css'
import Image from 'next/image'

const Container8 = ({ id, descriptions }) => {
    // Filter container specific descriptions
    const description = descriptions.filter(desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = (num) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container grey relative' : 'normal_container relative'

    return (
        <div className={background}>
            <h1 className={`${styles.title} leading-10 sm:text-4xl sm:w-72 sm:mt-16 lg:text-4.5xl lg:mt-16 xl:mt-40`}>
                {description[0].title}
            </h1>

            <div className={`${styles.hand} sm:hidden lg:w-32 lg:mt-16`}>
                <Image
                    src="/images/1440/Drive/Section 8/hand.png"
                    width={186}
                    height={302}
                />
            </div>

            <div className={`${styles.plane} sm:hidden lg:w-32 lg:mt-16`}>
                <Image
                    src="/images/1440/Drive/Section 8/plane.png"
                    width={189}
                    height={120}
                />
            </div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 sm:gap-y-4 sm:my-16 lg:mt-16 lg:mb-24 xl:mt-20 xl:mb-40">
                <a href="https://medium.com/internxt/alternative-to-google-drive-ac9f5e8c3eeb" className={`${styles.card} cursor-pointer lg:w-48 lg:px-8 lg:h-24 col-span-1`}>
                    <Image
                        src="/images/1440/Drive/Section 8/drive.png"
                        width={195}
                        height={32}
                    />
                </a>

                <a href="https://medium.com/internxt/alternative-to-dropbox-f3d242648497" className={`${styles.card} lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
                    <Image
                        src="/images/1440/Drive/Section 8/dropbox.png"
                        width={168}
                        height={33}
                    />
                </a>

                <a href="https://medium.com/internxt/alternative-to-mega-d8731dca65b4" className={`${styles.card} lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
                    <Image
                        src="/images/1440/Drive/Section 8/mega.png"
                        width={147}
                        height={48}
                    />
                </a>

                <a href="https://medium.com/internxt/alternative-to-tresorit-c7ec1b9a514a" className={`${styles.card} lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
                    <Image
                        src="/images/1440/Drive/Section 8/tresorit.png"
                        width={156}
                        height={43}
                    />
                </a>

                <a href="https://medium.com/internxt/alternative-to-pcloud-756311b4eb6e" className={`${styles.card} lg:w-48 lg:px-8 lg:h-24 col-span-1`}>
                    <Image
                        src="/images/1440/Drive/Section 8/pcloud.png"
                        width={164}
                        height={41}
                    />
                </a>

                <a href="https://medium.com/internxt/alternative-to-protondrive-8b753d5cde5e" className={`${styles.card} lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
                    <Image
                        src="/images/1440/Drive/Section 8/proton.png"
                        width={161}
                        height={22}
                    />
                </a>
            </div>
        </div>
    );
}

export default Container8;