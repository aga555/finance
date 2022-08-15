export class LeadForm {
  constructor(
    public name: string,
    public phone: string,
    public mail: string,
    public surname?: string,
    public taxId?: string,
  ) {
  }

}
