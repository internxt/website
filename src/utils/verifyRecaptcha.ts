// Google ReCaptcha V3
import axios from 'axios';
import { encode } from 'querystring';

const GOOGLE_RECAPTCHA_V3_ENDPOINT = process.env.RECAPTCHA_V3_ENDPOINT as string;

export async function verifyRecaptcha(captcha: string) {
  const body = {
    secret: process.env.RECAPTCHA_V3_SK,
    response: captcha,
  };

  return axios
    .post(GOOGLE_RECAPTCHA_V3_ENDPOINT, encode(body), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((res: any) => {
      if (!res.data.success) {
        throw Error(res.data['error-codes']);
      }

      const scoreThreshold = process.env.RECAPTCHA_V3_SCORE_THRESHOLD ?? 0.5;
      const { score } = res.data;

      if (score < scoreThreshold) {
        throw Error(`Score ${score} under ${scoreThreshold}`);
      }

      const data = res.data;

      return {
        data: {
          success: data.success,
          action: data.action,
        },
      };
    });
}
