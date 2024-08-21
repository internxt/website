export interface IntegratedCheckoutText {
  title: string;
  pay: string;
  paying: string;
  checkout: string;
  authComponent: AuthComponent;
  paymentTitle: string;
  productCard: ProductCard;
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
  signIn: string;
  userIsSignedIn: string;
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
