export interface IntegratedCheckoutText {
  title: string;
  pay: string;
  paying: string;
  checkout: string;
  authComponent: AuthComponent;
  addressBillingTitle: string;
  addressBilling: AddressBilling;
  paymentTitle: string;
  productCard: ProductCard;
}

export interface AddressBilling {
  optionalData: string;
  companyName: string;
  companyVatId: string;
}

export interface AuthComponent {
  signup: Login;
  login: Login;
  title: Title;
  emailMustNotBeEmpty: string;
  privacyGuarantee: string;
}

export interface Login {
  emailAddress: string;
  password: string;
}

export interface Title {
  signUp: string;
}

export interface ProductCard {
  title: string;
  selectedPlan: string;
  plan: Billed;
  billed: Billed;
  saving: string;
  planDetails: PlanDetails;
  total: string;
  addCoupon: AddCoupon;
  amountSaved: string;
  withAnnualBilling: string;
}

export interface AddCoupon {
  buttonTitle: string;
  inputText: string;
  applyCodeButtonTitle: string;
}

export interface Billed {
  month: string;
  year: string;
  lifetime: string;
}

export interface PlanDetails {
  title: string;
  features: string[];
}
