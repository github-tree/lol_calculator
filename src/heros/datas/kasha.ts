interface Hero {
  name: string;
  q(): void;
  w(): void;
  e(): void;
  r(): void;
}

const Kasha: Hero = {
  name: "John Doe",
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

export default Kasha;
