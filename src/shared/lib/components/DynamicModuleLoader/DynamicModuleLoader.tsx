import { ReactNode, useEffect} from "react";
import {useStore} from "react-redux";
import {ReduxStoreWithManager} from "@/app/providers/StoreProvider";
import {StateSchemaKey} from "@/app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

// type ReducerListEntry = [StateSchemaKey, Reducer]


interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducerList;
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props
    const store = useStore() as ReduxStoreWithManager

    useEffect(() => {
        const mountedReducer = store.reducerManager.getMountedReducer();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducer[name as StateSchemaKey]
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer)
            }

        })


        return () => {
            Object.entries(reducers).forEach(([name]) => {
                if (removeAfterUnmount) {
                    store.reducerManager.remove(name as StateSchemaKey)
                }
            })

        }
    }, [reducers, removeAfterUnmount, store.reducerManager])

    return (
        <>
            {children}
        </>
    );
};



