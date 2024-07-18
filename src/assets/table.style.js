import { styled, css } from "styled-components";
import { Table } from 'react-bootstrap';

const getRowColor = (pnL) => parseFloat(pnL) > 0 ? '#0ECB81' : '#E33B54';  // Зеленый и красный

export const StyledTable = styled(Table)`
    width: 100%;
    border: 1px solid #2B3139;
    border-collapse: collapse;
    background-color: #181A20;

    th, td {
        border: 1px solid #2B3139;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #181A20; //#181A20
        color: white;
        font-weight: bold;
    }

    tbody tr:hover {
        background-color: #0B0E11;
    }
`;

export const StyledTableRow = styled.tr`${({ $pnl }) => css`color: ${getRowColor($pnl)};`}`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Td = styled.td`
    @media (max-width: 1024px) {
        font-size: 14px;
    }
`;

export const Th = styled.th`
    @media (max-width: 1024px) {
        font-size: 14px;
    }
`;

export const TBody = styled.tbody``;


// 1: Fonts
// 2: lest space
// 