import {useSelector} from "react-redux";
import {getUserAuthData, getUserRole, UserRole} from "@/entities/User";
import {Navigate, useLocation} from "react-router-dom";
import {useMemo} from "react";
import {getRouteForbidden, getRouteMain} from "@/shared/const/route";


interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[]
}

export function RequireAuth({children, roles}: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRole = useSelector(getUserRole)

    const hasRequareRoles = useMemo(() => {
        if (!roles) {
            return true
        }
        return roles.some(requiredRole => {
            return userRole?.includes(requiredRole)
        })
    }, [roles, userRole])

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{from: location}} replace/>;
    }

    if (!hasRequareRoles) {
        return <Navigate to={getRouteForbidden()} state={{from: location}} replace/>;
    }

    return children;
}
