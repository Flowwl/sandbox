import { Expression } from "./Expression";

export class OrExpression implements Expression {
    private expr1: Expression | null = null;
    private expr2: Expression | null = null;

    public constructor(expr1: Expression, expr2: Expression) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    public interpret(context: string) {
        return this.expr1.interpret(context) || this.expr2.interpret(context);
    }
}
