import DataTable from './DataTable';
import '@testing-library/jest-dom/extend-expect'
const { render, screen, fireEvent } = require("@testing-library/react");

const rowClickAction = jest.fn();
describe('Test data table', () => {
    it('testing table display', () => {
        render(<DataTable 
            showPagination
            data={[{this_id: '12', this_value: 'value'}]} 
            column={['this_id', 'this_value']} 
            rowClickAction={rowClickAction}/>);

        expect(screen.getByTestId('dataTable_main')).toBeInTheDocument();
        expect(screen.getByTestId('dataTable_head')).toBeInTheDocument();
        expect(screen.getByTestId('dataTable_body')).toBeInTheDocument();
        expect(screen.getByTestId('pagination')).toBeInTheDocument();
        expect(screen.getByText('This Id')).toBeInTheDocument();
        expect(screen.getByText('This Value')).toBeInTheDocument();
        expect(screen.getByText('12')).toBeInTheDocument();
        expect(screen.getByText('value')).toBeInTheDocument();
        const listOf = screen.getAllByRole('row');
        fireEvent.click(listOf[1]);
        expect(rowClickAction).toHaveBeenCalled();
    })
})