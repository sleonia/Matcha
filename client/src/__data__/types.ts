import { FormStateMap } from 'redux-form';
import { ERROR, LOADING, SUCCESS } from './constants';

export type Status = typeof ERROR | typeof LOADING | typeof SUCCESS

export interface Lang {
    current: 'ru' | 'en'
}

export interface Feedback {
    title: string
    description: string
}

export interface Feedbacks {
    data: Feedback[]
    status: Status
}

export interface Genders {
    data: string[]
    status: Status
}

export interface User {
    status: Status
    login: string
}

export interface AccountRecovery {
    status: Status
}

export interface State {
    user: User
    feedbacks: Feedbacks
    genders: Genders
    lang: Lang
    accountRecovery: AccountRecovery
    form: FormStateMap
}
