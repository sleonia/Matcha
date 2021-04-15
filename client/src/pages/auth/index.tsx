import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { actions, selectors } from '../../__data__';

import { FormStyled } from './index.style';
import { SUCCESS } from '../../__data__/constants';

interface AuthComponentProps {
    loginStatus: string,
    fetchLogin: (login: string, password: string) => void
}

export const AuthComponent = ({
    loginStatus,
    fetchLogin
}: AuthComponentProps): JSX.Element => {
    const { t } = useTranslation();
    const [email, setEmail] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e): void => {
        e.preventDefault();
        console.log(email, login, password);
    };

    return (
        <div>
            {loginStatus === SUCCESS
                ? <Redirect from='/auth' to='/' />
                : <FormStyled onSubmit={handleSubmit}>
                    <label htmlFor='email' />
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder={t('auth.email-placeholder')}
                        required
                        onChange={(e): void => setEmail(e.target.value)}
                    />
                    <input
                        type='text'
                        required
                        placeholder={t('auth.login-placeholder')}
                        onChange={(e): void => setLogin(e.target.value)}
                    />
                    <input
                        type='password'
                        minLength={6}
                        maxLength={100}
                        required
                        placeholder={t('auth.password-placeholder')}
                        onChange={(e): void => setPassword(e.target.value)}
                    />
                    <input
                        type='submit'
                        value={t('auth-button') as string}
                    />
                </FormStyled>
            }
        </div>
    );
};

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapStateToProps = (state) => ({
    loginStatus: selectors.user.status(state)
});

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => ({
    fetchLogin: (login: string, password: string): void => {
        dispatch(actions.fetchLogin(login, password));
    }
});

export const Auth = connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
