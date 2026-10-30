import { GetStaticPropsContext } from 'next';
import VPNPage, { getStaticProps as vpnGetStaticProps } from './vpn';

export default function GetVPNPage(props: any) {
  return <VPNPage {...props} isGetVPN={true} darkMode={props.darkMode} />;
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return vpnGetStaticProps(ctx);
}
