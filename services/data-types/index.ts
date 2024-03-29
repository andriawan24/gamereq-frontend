export interface CategoryTypes {
    _id: string,
    name: string
}

export interface GameItemTypes {
    _id: string,
    status: string,
    name: string,
    category: CategoryTypes,
    thumbnail: string
}

export interface UserTypes {
    _id: string;
    username: string;
    email: string;
    name: string;
    avatar:string;
}

export interface JWTPayloadTypes {
    player: UserTypes;
    iat: number;
}

export interface NominalTypes {
    _id: string,
    coinQuantity: Number,
    coinName: string,
    price: number
}

export interface BankTypes {
    _id: string,
    name: string,
    noRekening: string,
    bankName: string,
    accountNumber: string,
}

export interface PaymentTypes {
    _id: string,
    banks: BankTypes[],
    type: string,
    status: string
}

export interface DetailTypes {
    _id: string,
    name: string,
    category: CategoryTypes,
    isFeatured: boolean,
    status: string,
    thumbnail: string,
    user: UserTypes,
    nominals: NominalTypes[]
}

export interface LoginFormType {
    email: string,
    password: string
}

export interface Player {
    avatar: string,
    id: string,
    name: string,
    phoneNumber: string,
    username: string,
    email: string,
  }

export interface TokenResult {
    iat: string,
    player: Player
}

export interface CheckoutTypes {
    voucher: string,
    nominal: string,
    payment: string,
    bank: string,
    name: string,
    accountNumber: string
}

export interface HistoryVoucherTopupTypes {
    category: string;
    coinName: string;
    coinQuantity: string;
    gameName: string;
    price: number;
    thumbnail: string;
}

export interface HistoryPaymentTypes {
    bankName: string;
    name: string;
    noRekening: string;
    type: string;
}

export interface HistoryTransactionTypes {
    _id: string;
    historyVoucherTopup: HistoryVoucherTopupTypes;
    value: number;
    status: string;
    accountUser: string;
    tax: number;
    name: string;
    historyPayment: HistoryPaymentTypes;
}

export interface TopUpCategoriesTypes {
    _id: string;
    value: number;
    name: string;
}
