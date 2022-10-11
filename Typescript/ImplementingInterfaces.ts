interface ERC20 {
  mintOne(): boolean;
  mintCollection(): boolean;
}

interface ERC721 extends ERC20 {
  mintNoneFungibleCollectionOnly(): boolean;
}

interface ERC1155 extends ERC721 {
  mingBothSemiAndFulllyFungible(): boolean;
}

class ERC1155 implements ERC1155 {
  constructor(private minterAddress: number, private minterFavChain: string) {
    this.minterAddress = minterAddress;
    this.minterFavChain = minterFavChain;
  }

  private startMinting(...image: string[]): boolean {
    return image.length >= 1 ? true : false;
  }

  public set minterAddres(address: number) {
    this.minterAddress = address;
  }
  public get minterAddresss(): number {
    return this.minterAddress;
  }
}
