import { GetServerSidePropsContext } from 'next';
import AntivirusPage, { getServerSideProps as antivirusGetServerSideProps } from './antivirus';

export default function GetAntivirusPage(props: any) {
  return <AntivirusPage {...props} isGetAntivirus={true} />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return antivirusGetServerSideProps(ctx);
}
