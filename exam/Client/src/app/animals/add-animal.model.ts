export class AddAnimalModel {
  constructor(
    public type: string,
    public name?: string,
    public age?: number,
    public color?: string,
    public price?: number,
    public image?: string,
    public breed?: string
  ) {}
}
