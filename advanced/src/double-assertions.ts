type Point2D = {x: number, y: number};
type Point3D = {x: number, y: number, z: number};
type User = { name: string, email: string};

let point2: Point2D = {x:0, y: 10};
let point3: Point3D = {x:0, y: 10, z: 30};
let user: User = { name: 'Harpreet', email: 'HarpreetWP@gmail.com'};

point2 = point3;
// point3D = point2D; //Error
point3 = point2 as Point3D // Ok: I trust you

// user = point3; //Error //Error
// point3 = user; // Error
// point3 = user as Point3D; // Error

point3 = user as unknown as Point3D; // Ok: I doublt reust you


