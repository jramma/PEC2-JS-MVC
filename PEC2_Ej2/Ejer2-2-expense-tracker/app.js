import ExpenseService from "./services/expense.service";
import ExpenseView from "./views/expense.views";
import ExpenseController from "./controllers/expense.controller";
const app = new ExpenseController(new ExpenseService(), new ExpenseView());
