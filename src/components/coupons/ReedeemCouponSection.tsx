import { CouponPageText } from '@/assets/types/couponsPage';

interface RedeemCouponsSectionProps {
  textContent: CouponPageText['howToRedeemSection'];
}

export default function RedeemCouponsSectionSection({ textContent }: Readonly<RedeemCouponsSectionProps>): JSX.Element {
  return (
    <section className="flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden bg-neutral-17 pb-10 lg:h-min lg:gap-16 lg:p-20 ">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32 " />

      <div className="flex h-min w-full flex-col justify-center gap-12">
        <div className="flex h-min w-full flex-col items-center justify-center gap-6">
          <p className="text-5xl font-bold text-gray-100">{textContent.title}</p>
          <p className="font-regular text-lg text-gray-55">{textContent.description}</p>
        </div>
        <div className="flex flex-row items-stretch justify-center gap-8">
          {textContent.cards.titles.map((card, index) => (
            <div key={index} className="flex h-min w-[352px] flex-col gap-6 rounded-16 bg-white p-8">
              <span className="flex flex-row items-center gap-4 text-xl font-medium text-gray-95">
                <p className="text-2xl text-primary ">{index + 1}</p>
                {card}
              </span>
              <p className="text-base font-normal leading-tight text-gray-55">
                {textContent.cards.descriptions[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
