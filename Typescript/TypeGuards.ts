class PCS {
  private pcName: string;
  private pcModel: string;
  private pcCode: number;
  constructor(name: string = "na", model: string = "na", code: number = 0) {
    this.pcName = name;
    this.pcModel = model;
    this.pcCode = code;
  }
}

class Mobile {
  static model = "iphone";

  private isIphone: boolean;
  private isNew: boolean;
  private moreInfo: object;

  constructor(
    private isPhoneIphone: boolean,
    private isPhoneNew: boolean,
    private morePhoneInfo: object
  ) {
    this.isIphone = isPhoneIphone;
    this.isNew = isPhoneNew;
    this.moreInfo = morePhoneInfo;
  }
}

type unionProduct = PCS | Mobile;

// what the fuck is typeguard it is just just fucking 
// checking the type with a fancy name called typegaurd in typescript
function whichProduct(product: unionProduct): string {
  return product instanceof PCS ? "is a pc" : "is a mobile";
}
