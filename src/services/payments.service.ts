import { PlanData } from '@/pages/cloud-object-storage/checkout';
import { Drive } from '@internxt/sdk';

export class PaymentsService {
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
    const client = PaymentsService.client(this.apiUrl);
    const objStoragePlan = await client.getObjectStoragePlanById(priceId, currency);

    return objStoragePlan;
  }

  public async getCustomerId(name: string, email: string, country?: string, companyVatId?: string) {
    const client = PaymentsService.client(this.apiUrl);
    const customerId = await client.createCustomerForObjectStorage(name, email, country, companyVatId);

    return customerId;
  }

  public async createObjectStorageSubscription(
    customerId: string,
    plan: PlanData,
    token: string,
    companyName: string,
    vatId: string,
    promoCodeId?: string,
  ) {
    const client = PaymentsService.client(this.apiUrl);
    const subscription = await client.createObjectStorageSubscription(
      customerId,
      plan,
      token,
      companyName,
      vatId,
      promoCodeId,
    );

    return subscription;
  }
}
