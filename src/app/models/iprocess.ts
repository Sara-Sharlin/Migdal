import { Iinsured } from './iinsured';
import { IContactPerson } from "./icontact-person";

export interface IProcess {
  superClaim: {
      superClaimNum: number;
      superClaimStatus: number;
  };
  insured: Iinsured;
  contactPersons?: IContactPerson[];
}
