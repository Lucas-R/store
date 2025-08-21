import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Upper from '@components/layout/Upper'
import Menu from '@components/layout/Menu'

export const Route = createRootRoute({
    component: () => (
        <>
            <Upper />
            <Menu />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})