import { GetStaticPropsContext } from 'next';
import AntivirusPage, { getStaticProps as antivirusGetStaticProps } from './antivirus';

export default function GetAntivirusPage(props: any) {
  return <AntivirusPage {...props} isGetAntivirus={true} />;
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return antivirusGetStaticProps(ctx);
}
