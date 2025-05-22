import { PlanData } from '@/pages/cloud-object-storage/checkout';
import { Drive } from '@internxt/sdk';

export class ObjStoragePaymentsService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  private static client(apiUrl: string) {
    return Drive.ObjectStorage.client(apiUrl, {
      clientName: 'website',
      clientVersion: '1.0.0',
    });
  }

  public async fetchPlanById(priceId: string, currency?: string): Promise<PlanData> {
    const client = ObjStoragePaymentsService.client(this.apiUrl);
    const objStoragePlan = await client.getObjectStoragePlanById(priceId, currency);

    return objStoragePlan;
  }

  public async getCustomerId({
    customerName,
    email,
    country,
    postalCode,
    companyVatId,
  }: {
    customerName: string;
    email: string;
    postalCode: string;
    country: string;
    companyVatId?: string;
  }) {
    const client = ObjStoragePaymentsService.client(this.apiUrl);
    return client.createCustomerForObjectStorage({ email, customerName, postalCode, country, companyVatId });
  }

  public async createObjectStorageSubscription({
    customerId,
    priceId,
    currency = 'eur',
    token,
    promoCodeId,
  }: {
    customerId: string;
    priceId: string;
    currency?: string;
    token: string;
    promoCodeId?: string;
  }) {
    const client = ObjStoragePaymentsService.client(this.apiUrl);
    return client.createObjectStorageSubscription({
      customerId,
      priceId,
      currency,
      token,
      promoCodeId,
    });
  }
}
