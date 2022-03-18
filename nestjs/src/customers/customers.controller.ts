import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { CreateCustomerDto } from "./customers.dto";
import { CustomersService } from "./customers.service";

// customers/

@Controller("customers")
export class CustomersController {
    constructor(private readonly customerService: CustomersService) {}

    @Get()
    getAllCustomers(@Req() request: Request, @Res() res: Response) {
        return ["customer1"]
    }
    @Get(":id")
    async getOneCustomer(@Param("id") customerId) {
        return customerId
    }
    @Post()
    async create(@Body() newCustomer : CreateCustomerDto) {
        return this.customerService.create(newCustomer)
    }
}
