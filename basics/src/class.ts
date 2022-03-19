class Animal {
  protected  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}

let cat = new Animal('Cat');
cat.move(10);
// cat.name = 'Dog'; // Error because protected

class Bird extends Animal {
  fly(distanceInMeters: number){
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}