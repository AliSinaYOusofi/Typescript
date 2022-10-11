interface Computers {
  name: string;
  productName: string;
}

interface Mobile {
  id: number;
  codeNumber: number;
  more?: string;
}

type ComputerAndMobile = Computers & Mobile; // intersection types

let firstComputeAlik: ComputerAndMobile = {
  name: "MobileAlike",
  productName: "name",
  id: 1000,
  codeNumber: 0x1000,
  more: "this was intentional and optional",
};


interface Human {
    name: string;
    birtDate: Date;
    currentAddress: string
};

interface Alien {
    type: string;
    version: number;
}

type Humanoid = Human & Alien; // intersection of human and alien type
// this shoudl have all the parts of it implelemtned

let firstHumanAlien : Humanoid = {
    name: "cy",
    birtDate: new Date("1999"),
    currentAddress: "unk",
    type: "v1b2",
    version: 0x000000
}