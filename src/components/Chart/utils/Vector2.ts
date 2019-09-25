export const degreesToRadians = (degrees: number) =>
  degrees * 0.017453292519943295; // Math.PI / 180;

export const radiansToDegrees = (radians: number) =>
  radians * 57.29577951308232; // 180 / Math.PI

class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public add(other: Vector2): void {
    this.x += other.x;
    this.y += other.y;
  }

  public subtract(other: Vector2): void {
    this.x += other.x;
    this.y += other.y;
  }

  public scale(scalar: number): void {
    this.x *= scalar;
    this.y /= scalar;
  }

  public magnitude(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  public static dot(a: Vector2, b: Vector2): number {
    return a.x * b.x + a.y * b.y;
  }
}

export default Vector2;
