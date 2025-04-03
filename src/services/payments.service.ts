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
    name,
    email,
    country,
    companyVatId,
  }: {
    name: string;
    email: string;
    country?: string;
    companyVatId?: string;
  }) {
    const client = ObjStoragePaymentsService.client(this.apiUrl);
    return client.createCustomerForObjectStorage({ name, email, country, companyVatId });
  }

  public async createObjectStorageSubscription({
    customerId,
    plan,
    token,
    companyName,
    vatId,
    promoCodeId,
  }: {
    customerId: string;
    plan: PlanData;
    token: string;
    companyName: string;
    vatId: string;
    promoCodeId?: string;
  }) {
    const client = ObjStoragePaymentsService.client(this.apiUrl);
    return client.createObjectStorageSubscription({
      customerId,
      plan,
      token,
      companyName,
      vatId,
      promoCodeId,
    });
  }
}
