import React, { createContext, useContext, useState, useEffect, Context } from 'react';

interface ProviderProps {
    children: JSX.Element[] | JSX.Element;
}

interface AnalyticsDataProps {
    children: JSX.Element[] | JSX.Element;
    name: string;
}

interface AnalyticsContext {
    data: any;
    add: (name: string) => void;
    remove: (name: string) => void;
}

const context: Context<AnalyticsContext> = createContext({});
const { Provider, Consumer } = context;

const AnalyticsProvider = ({ children }: ProviderProps) => {
    const [data, setData] = useState([]);

    const add = (name: string) => {
        if (!data.find(d => name === d)) {
            setData([...data, name]);
        }
    };

    const remove = (name: string) => {
        const noName = data.filter(d => d !== name);
        setData([...noName]);
    };

    const value = { data, add, remove };

    return <Provider value={value}>{children}</Provider>;
};

const AnalyticsData = ({ children, name }: AnalyticsDataProps) => {
    const { data, add } = useContext(context);

    useEffect((...attrs) => {
        add(name);
    });

    return <Consumer>{() => children}</Consumer>;
};

const useAnalytics = () => {
    const { data } = useContext(context);

    const fire = () => {
        console.log('event is fired!', data);
    };

    return {
        data,
        fire,
    };
};

export { AnalyticsProvider, AnalyticsData, useAnalytics };
