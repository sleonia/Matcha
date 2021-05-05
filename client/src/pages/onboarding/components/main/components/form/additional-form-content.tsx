import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { Typography, Button } from '@material-ui/core';
// import { Typography, Button, Chip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import {
    Status,
    State,
    KeyValue
} from '../../../../../../__data__/types';
import { selectors } from '../../../../../../__data__';

import { ChipsModal } from '../modal/interests';
import { OrientationModal } from '../modal/orientation';

import { SplitterStyled } from './index.style';

interface AdditionalFormContentComponentProps {
    statusInterests: Status
    interests: KeyValue[]
    statusOrientations: Status
    orientations: KeyValue[]
}

const AdditionalFormContentComponent = ({
    statusInterests,
    interests,
    statusOrientations,
    orientations
}: AdditionalFormContentComponentProps): JSX.Element => {
    const { t } = useTranslation();
    const [openInterests, setInterestsOpen] = useState<boolean>(false);
    const [openOrientation, setOrientationOpen] = useState<boolean>(false);

    const handleInterestsClose = (): void => setInterestsOpen(false);
    const handleInterestsOpen = (): void => setInterestsOpen(true);

    const handleOrientationClose = (): void => setOrientationOpen(false);
    const handleOrientationOpen = (): void => setOrientationOpen(true);

    return (
        <>
            <Typography align='center'>
                {t('reg-form-none-required')}
            </Typography>
            <SplitterStyled>
                <Typography>
                    {t('reg-form-interests')}
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<AddIcon />}
                    onClick={handleInterestsOpen}
                >
                    {t('reg-form-interests-add')}
                </Button>
                {/* <Chip
                variant={'outlined'}
                label={'label'}
            /> */}
                <ChipsModal
                    open={openInterests}
                    status={statusInterests}
                    interests={interests}
                    handleClose={handleInterestsClose}
                />
            </SplitterStyled>
            <SplitterStyled>
                <Typography>
                    {t('reg-form-sexual-orientation')}
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<AddIcon />}
                    onClick={handleOrientationOpen}
                >
                    {t('reg-form-sexual-orientation-add')}
                </Button>
                <OrientationModal
                    open={openOrientation}
                    status={statusOrientations}
                    orientation={orientations}
                    handleClose={handleOrientationClose}
                />
            </SplitterStyled>
        </>
    );
};

const mapStateToProps = (state: State): {
    statusInterests: Status
    interests: KeyValue[]
    statusOrientations: Status
    orientations: KeyValue[]
} => ({
    statusInterests: selectors.regPage.interests.status(state),
    interests: selectors.regPage.interests.data(state),
    statusOrientations: selectors.regPage.orientations.status(state),
    orientations: selectors.regPage.orientations.data(state)
});

export const AdditionalFormContent = connect(mapStateToProps, null)(AdditionalFormContentComponent);
