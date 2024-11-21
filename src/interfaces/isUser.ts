export interface IsUser {
  name: string;
  readonly country: string;

  countUser(): void;
  getAge(): number;
}
