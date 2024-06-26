export interface CreateCustomer {
    Username : string;
    FirstName : string;
    LastName : string;
    Email : string;
    PhoneNumber : string;
    Roles : string[];
    Password : string;
    ConfirmPassword : string;
    Address: String;
    IsActive: boolean;
    IsDeleted: boolean ;
}
export class CreateCustomerDto{
    Id!: string;
    Username!: string;
    FirstName! : string;
    LastName! : string;
    Email! : string;
    PhoneNumber! : string;
    Roles! : string[];
    Password! : string;
    ConfirmPassword! : string;
    Address!: String;
    IsActive!: boolean;
    IsDeleted: boolean = false;
}
