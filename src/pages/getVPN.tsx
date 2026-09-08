import { GetStaticPropsContext } from 'next';
import VPNPage, { getStaticProps as vpnGetServerSideProps } from './vpn';

export default function GetVPNPage(props: any) {
  return <VPNPage {...props} isGetVPN={true} />;
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return vpnGetServerSideProps(ctx);
}
