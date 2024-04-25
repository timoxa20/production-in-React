import {FC, ReactNode, useEffect} from "react";
import {useStore} from "react-redux";
import {ReduxStoreWithManager} from "app/providers/StoreProvider";
import {StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";

export type ReducerList = {
 [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]


interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducerList;
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {children, reducers, removeAfterUnmount} = props
    const store = useStore() as ReduxStoreWithManager

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer)
        })


        return () => {
            Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                if(removeAfterUnmount) {
                    store.reducerManager.remove(name)
                }
            })

        }
        //eslint-disable-next-line
    }, [])

    return (
        <>
            {children}
        </>
    );
};



