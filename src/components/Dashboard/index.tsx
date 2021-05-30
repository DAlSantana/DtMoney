import { Summary } from "../Summary";
import { TransactionsTable } from "../TransationcsTable";
import { Container } from "./styles";

export function DashBoard(){
    return (
        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>
    )
}