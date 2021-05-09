import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Fade, Backdrop } from '@material-ui/core';

import { ThemeWrapperContext } from '../../../../../../../components/theme';
import { Status, KeyValue } from '../../../../../../../__data__/types';

import { Chips } from './chips';

import {
    RegistrationModalStyled as ChipsModalStyled,
    AsideStyled,
    TypographyStyled
} from '../rules/index.style';
import { LOADING } from '../../../../../../../__data__/constants';
import { CircularProgressStyled } from '../../../../../../../components/circular-progress/index.style';

interface ChipsModalProps {
    open: boolean
    count: number
    status: Status
    interests: KeyValue[]
    handleClose?: () => void
}

export const ChipsModal = ({
    open,
    count,
    status,
    interests,
    handleClose
}: ChipsModalProps): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);

    return (
        <ChipsModalStyled
            currentTheme={theme as string}
            className='modal'
            open={open}
            closeAfterTransition
            onClose={handleClose}
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
            aria-labelledby='modal-chips'
        >
            <Fade in={open}>
                <AsideStyled
                    style={{ minHeight: '20vh' }}
                    currentTheme={theme as string}
                >
                    <TypographyStyled
                        variant='h3'
                        padding='15px 0px'
                    >
                        {t('reg-form-interests')}
                    </TypographyStyled>
                    {status === LOADING
                        ? <CircularProgressStyled />
                        : <Chips
                            count={count}
                            interests={interests}
                            handleClose={(): void => handleClose && handleClose()}
                        />
                    }
                </AsideStyled>
            </Fade>
        </ChipsModalStyled>
    );
};
