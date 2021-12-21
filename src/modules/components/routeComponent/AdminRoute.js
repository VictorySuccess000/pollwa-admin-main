import React from "react";
import {Route} from "react-router-dom";

const AdminRoute = ({
                        component: Component,
                        layout: Layout,
                        path,
                        title,
                        exact = false,
                        ...rest
                    }) => {
    return (
        <Route
            exact={exact}
            path={path}
            render={(props) => {
                return (
                    <Layout title={title}>
                        <Component {...props} />
                    </Layout>
                );
            }}
            {...rest}
        />
    );
};

export default AdminRoute;
