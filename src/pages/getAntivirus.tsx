import { GetStaticPropsContext } from 'next';
import AntivirusPage, { getStaticProps as antivirusGetServerSideProps } from './antivirus';

export default function GetAntivirusPage(props: any) {
  return <AntivirusPage {...props} isGetAntivirus={true} />;
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return antivirusGetServerSideProps(ctx);
}
