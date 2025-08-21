import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Upper from '@components/Upper'

export const Route = createRootRoute({
    component: () => (
        <>
            <Upper />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})