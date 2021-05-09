import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Chip, Button } from '@material-ui/core';

export const ChipStyled = styled(Chip)`
    &.MuiChip-root {
        margin: 0.3rem;
    }

    &.MuiChip-colorSecondary {
        border: 1px solid #f50057;
    }
`;

export const ChipsWrapperStyled = styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin: 0 1.5rem 1.5rem 1.5rem;

`;

interface ButtonContinueStyledProps {
    isDisable: boolean
}

export const ButtonContinueStyled = styled(Button)(({
    isDisable
}: ButtonContinueStyledProps) => css`
    &.MuiButtonBase-root {
        margin: auto auto 1rem;
        display: block;
    }

    ${isDisable && css`
        &.MuiButtonBase-root {
            cursor: default;
        }
    `}

`);