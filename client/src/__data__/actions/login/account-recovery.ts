import { Dispatch } from 'redux';

import * as types from '../../action-types';
import { convertArgsToUrlParams } from '../../utils/convert-args-to-url-params';
import { fetchWithTimeout } from './../../../utils/';

export default (password: string) => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch({
            type: types.ACCOUNT_RECOVERY_LOADING
        });

        const url = new URL('http://localhost:3030/api/account-recovery');
        const params = convertArgsToUrlParams({ password });
        url.search = new URLSearchParams(params).toString();
        // const response = await fetch(url.toString());
        try {
            const response = await fetchWithTimeout(url.toString(), undefined, 2000) as Response;
            if (!response.ok) {
                console.warn(`An error has occured: ${response.status}`);
                dispatch({
                    type: types.ACCOUNT_RECOVERY_ERROR
                });
            } else {
                dispatch({
                    type: types.ACCOUNT_RECOVERY_FETCH
                });
            }
        } catch {
            dispatch({
                type: types.ACCOUNT_RECOVERY_ERROR
            });
        }
    };
};
