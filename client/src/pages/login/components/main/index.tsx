import React, { useCallback, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeWrapperContext } from '../../../../components/theme';

import { Modal } from '../modal';

import { ButtonWrapper, HeadlineStyled } from '../../index.style';

import { MainStyled, LoginSectionStyled, AsideStyled } from './index.style';

export const Main = (): JSX.Element => {
    const { t } = useTranslation();
    const [theme,] = useContext(ThemeWrapperContext);
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = useCallback((): void => {
        setOpen(true);
    }, []);

    const handleClose = useCallback((): void => {
        setOpen(false);
    }, []);

    return (
        <>
            <MainStyled>
                <LoginSectionStyled
                    currentTheme={theme as string}
                >
                    <AsideStyled>
                        <HeadlineStyled variant='h2'>
                            {t('title')}
                        </HeadlineStyled>
                        <ButtonWrapper
                            variant='contained'
                            color='primary'
                            size='large'
                            onClick={handleOpen}
                        >
                            {t('create-account')}
                        </ButtonWrapper>
                        <Modal
                            title={t('create-account')}
                            open={open}
                            handleClose={handleClose}
                        />
                    </AsideStyled>
                </LoginSectionStyled>
            </MainStyled>
        </>
    );
};
