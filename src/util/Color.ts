const clamp = (v: number, min: number, max: number): number =>
  Math.min(max, Math.max(v, min));

export const brightness = (color: string, value: number) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  const newr = clamp((r / 100) * value * 100, 0, 100);
  const newg = clamp((g / 100) * value * 100, 0, 100);
  const newb = clamp((b / 100) * value * 100, 0, 100);

  return `rgb(${newr}, ${newg}, ${newb})`;
};

class Color {
  public readonly r: number;
  public readonly g: number;
  public readonly b: number;
  public readonly a: number;

  constructor(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  public rgba(opacity: number | undefined = 0): string {
    const alpha = clamp(this.a + opacity, 0, 1);

    return `rgba(${this.r}, ${this.g}, ${this.b}, ${alpha})`;
  }

  public get rgb(): string {
    return this.rgba();
  }
}

export default Color;
