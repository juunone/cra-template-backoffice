export interface renderPrivatRouterProps {
  id: string
  path: string
  exact: boolean
  component: React.ReactNode
}

export interface ErrorFallbackProps {
  error?: Error
  resetErrorBoundary?: any
}

export interface PrivateRouteProps {
  component: any
  isAuthenticated?: boolean
  path: string
  exact?: boolean
}

export interface LayoutWrapperProps {
  children: any
}

export interface AppMenuItemComponentProps {
  className?: string
  link?: string | null
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: React.ReactNode
}
