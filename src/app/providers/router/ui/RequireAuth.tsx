import {useSelector} from "react-redux";
import {getUserAuthData, getUserRole, UserRole} from "entities/User";
import {Navigate, useLocation} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useMemo} from "react";
import {} from "entities/User/model/selectors/roleSelectors/roleSelectors";


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
            const hasRole = userRole?.includes(requiredRole)

            return hasRole
        })
    }, [roles, userRole])

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{from: location}} replace/>;
    }

    if (!hasRequareRoles) {
        return <Navigate to={RoutePath.forbidden} state={{from: location}} replace/>;
    }

    return children;
}
