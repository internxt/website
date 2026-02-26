import { GetServerSidePropsContext } from 'next';
import VPNPage, { getServerSideProps as vpnGetServerSideProps } from './vpn';

export default function GetVPNPage(props: any) {
  return <VPNPage {...props} isGetVPN={true} />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return vpnGetServerSideProps(ctx);
}
