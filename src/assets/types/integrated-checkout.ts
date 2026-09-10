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
  oneTimePayment: string;
  error500: string;
  invalidCoupon: string;
}

interface AddressBilling {
  optionalData: string;
  companyName: string;
  companyVatId: string;
}

interface AuthComponent {
  signup: Login;
  login: Login;
  title: Title;
  emailMustNotBeEmpty: string;
  privacyGuarantee: string;
}

interface Login {
  emailAddress: string;
  password: string;
}

interface Title {
  signUp: string;
}

interface ProductCard {
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

interface AddCoupon {
  buttonTitle: string;
  inputText: string;
  applyCodeButtonTitle: string;
}

interface Billed {
  month: string;
  year: string;
  lifetime: string;
}

interface PlanDetails {
  title: string;
  features: string[];
}
