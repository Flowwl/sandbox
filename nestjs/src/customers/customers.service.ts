import { Customer } from "./customers.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomersService {
    private readonly customers: Customer[] = [];

    create(customer: Customer) {
        this.customers.push(customer);
    }

    findAll(): Customer[] {
        return this.customers;
    }
}
