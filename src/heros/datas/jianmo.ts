interface Hero {
  name: string;
  i(): void;
  q(): void;
  w(): void;
  e(): void;
  r(): void;
}

const JianMo: Hero = {
  name: "暗裔剑魔",
  i(){},
  q() {
    
    return this.name
  },
  w() {
    console.log(`Method 2 called by ${this.name}`);
  },
  e() {
    console.log(`Method 3 called by ${this.name}`);
  },
  r() {
    console.log(`Method 4 called by ${this.name}`);
  },
};

export default JianMo;
