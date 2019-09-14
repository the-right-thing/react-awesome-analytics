import React, { createContext, useContext, Context, useMemo } from 'react';

export interface ProviderProps {
    children: JSX.Element[] | JSX.Element;
    onEventFired: (data: {}) => void;
}

export interface AnalyticsData {
    [key: string]: {};
}

export interface AnalyticsDataProps {
    children: JSX.Element[] | JSX.Element;
    name: string;
    data: AnalyticsData;
}

interface GlobalAnalyticsContext {
    add: (name: string, data: AnalyticsData) => void;
    get: () => AnalyticsData;
    fire: (namespace: string, payload: {}) => void;
    remove: (name: string) => void;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const globalAnalyticsContext: Context<GlobalAnalyticsContext> = createContext({});
const namespacesContext: Context<string[]> = createContext([]);

const { Provider: GlobalProvider } = globalAnalyticsContext;
const { Provider: NamespacesProvider } = namespacesContext;

const AnalyticsProvider = ({ children, onEventFired }: ProviderProps) => {
    const analyticsData: AnalyticsData = {};

    const add = (name: string, data: AnalyticsData) => {
        analyticsData[name] = data;
    };

    const remove = (name: string) => {
        delete analyticsData[name];
    };

    const get = () => {
        return analyticsData;
    };

    const fire = (namespace: string, payload: {}) => {
        const data = { ...analyticsData };
        data[namespace] = { ...data[namespace], ...payload, action: 'fired' };
        onEventFired(data);
    };

    const api = useMemo(() => ({ get, add, remove, fire }), []);

    return <GlobalProvider value={api}>{children}</GlobalProvider>;
};

const AnalyticsContainer = ({ children, name, data }: AnalyticsDataProps) => {
    const namespaces = useContext(namespacesContext);
    const { add } = useContext(globalAnalyticsContext);

    const newNamespaces = useMemo(() => [...namespaces, name], [name]);
    add(newNamespaces.join('.'), data);

    return <NamespacesProvider value={newNamespaces}>{children}</NamespacesProvider>;
};

const useAnalytics = () => {
    const { fire } = useContext(globalAnalyticsContext);
    const namespaces = useContext(namespacesContext);

    const localFire = (payload: AnalyticsData) => {
        fire(namespaces.join('.'), payload);
    };

    return {
        fire: localFire,
    };
};

export { AnalyticsProvider, AnalyticsContainer, useAnalytics };
