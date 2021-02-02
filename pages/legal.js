import Layout from '../components/layout/Layout'
import TopBar from '../components/layout/TopBar'
import Footer from '../components/layout/Footer'
import descriptionsEnglish from '../assets/lang/en/terms-and-conditions.json'
import descriptionsSpanish from '../assets/lang/es/terms-and-conditions.json'
import { useRouter } from 'next/router'
import cookies from '../lib/cookies'

const Legal = (props) => {
    const router = useRouter()
    const locale = router.locale

    const description = locale == 'en' ? descriptionsEnglish : descriptionsSpanish
    const metatags = props.metatagsDescriptions.filter(desc => desc.id === "photos")

    return (
        <Layout segmentName="legal" title={metatags.title} description={metatags[0].description} >
            <TopBar />
            <div className="flex flex-col items-center my-24">
                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title2}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle2}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title3}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle3}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title4}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle4}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title5}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle5}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title6}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle6}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title7}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle7}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title8}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle8}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title9}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle9}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title10}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle10}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle102}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle103}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title11}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle11}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title12}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle12}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle122}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title13}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle13}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title14}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle14}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle142}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title15}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle15}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title16}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle16}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle162}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle163}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle164}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle165}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle166}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle167}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title17}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle17}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title18}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle18}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title19}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle19}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title20}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle20}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title21}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle21}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle212}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title22}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle22}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title23}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle23}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle232}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle233}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title24}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle24}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle242}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle243}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle244}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle245}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle246}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title25}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle25}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title26}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle26}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title27}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle27}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title28}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle28}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title29}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle29}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle292}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle293}
                    </p>

                    <p className="font-avertalight mb-6">
                        {description.subtitle294}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title30}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle30}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title31}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle31}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title32}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle32}
                    </p>
                </div>

                <div className="flex flex-col w-8/12 mb-16">
                    <h1 className="font-avertabold text-4.5xl mb-6">
                        {description.title33}
                    </h1>

                    <p className="font-avertalight mb-6">
                        {description.subtitle33}
                    </p>
                </div>
            </div>
            <Footer descriptions={props.footerDescriptions} cardDescriptions={props.cardDescriptions} />
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const lang = ctx.locale
    const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`)
    const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`)
    const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`)

    cookies.setReferralCookie(ctx);

    return {
        props: { metatagsDescriptions, footerDescriptions, cardDescriptions }
    }
}

export default Legal;