interface Blockchains {
  readonly blockChainName: string;
  readonly blockChainMaker: string;
  readonly genesisBlock: number;
}

let ethereumObject: Blockchains;

ethereumObject = {
  blockChainName: "ethereum",
  blockChainMaker: "Vitalik Buterin",
  genesisBlock: 0x000000,
};

// can't change readonly props
// good readonly
ethereumObject.blockChainMaker = "Nick Szabo";
