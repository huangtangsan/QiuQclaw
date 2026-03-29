import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Tooltip } from '@mantine/core'
import logoSrc from '@/assets/logo.png'
import tooltips from '@/constants/tooltips.json'

const NAV_ITEMS = [
  {
    to: '/',
    label: '面板',
    tooltip: tooltips.layout.navigation.dashboardExplain,
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    to: '/chat',
    label: '对话',
    tooltip: tooltips.layout.navigation.chatExplain,
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    to: '/channels',
    label: 'IM 渠道',
    tooltip: tooltips.layout.navigation.channelsExplain,
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
  },
  {
    to: '/models',
    label: '模型与 API',
    tooltip: tooltips.layout.navigation.modelsExplain,
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    to: '/skills',
    label: 'Skills',
    tooltip: tooltips.layout.navigation.skillsExplain,
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
]

interface NavItemProps {
  to: string
  label: string
  tooltip?: string
  icon: React.ReactNode
  active: boolean
}

function NavItem({ to, label, tooltip, icon, active }: NavItemProps) {
  return (
    <Tooltip
      label={tooltip || label}
      position="right"
      withArrow
      multiline
      maw={260}
      disabled={!tooltip}
    >
      <NavLink
        to={to}
        end={to === '/'}
        className="block no-underline"
        style={{ position: 'relative' }}
      >
        <div
          className={`
            relative flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
            transition-all duration-150 ease-out
            ${active
              ? 'bg-[var(--mantine-color-brand-light)] text-[var(--mantine-color-brand-light-color)] font-medium'
              : 'app-text-muted hover:app-text-secondary hover:app-bg-tertiary'
            }
          `}
          style={{
            transform: active ? 'translateX(1px)' : 'translateX(0)',
          }}
        >
          {active && <span className="nav-active-bar" />}
          <span
            className="transition-transform duration-150"
            style={{ transform: active ? 'scale(1.08)' : 'scale(1)' }}
          >
            {icon}
          </span>
          <span>{label}</span>
        </div>
      </NavLink>
    </Tooltip>
  )
}

export default function MainLayout() {
  const location = useLocation()

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  const settingsActive = location.pathname.startsWith('/settings')

  return (
    <div className="h-screen app-bg-primary app-text-primary flex flex-col">
      {/* Draggable title bar */}
      <div
        className="h-8 flex-shrink-0 flex items-center justify-center gap-1.5 border-b app-border"
        style={{
          WebkitAppRegion: 'drag',
          background: 'linear-gradient(180deg, var(--app-bg-secondary) 0%, var(--app-bg-primary) 100%)',
        } as React.CSSProperties}
      >
        <img
          src={logoSrc}
          alt=""
          className="w-5 h-5 select-none pointer-events-none"
          style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,.2))' }}
        />
        <span
          className="text-xs select-none font-semibold tracking-wide"
          style={{ color: 'var(--mantine-color-brand-5)' }}
        >
          Qclaw
        </span>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <nav
          className="w-[160px] flex-shrink-0 border-r app-border flex flex-col py-2 px-2"
          style={{ background: 'var(--app-bg-secondary)' }}
        >
          <div className="space-y-0.5 flex-1">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                tooltip={item.tooltip}
                icon={item.icon}
                active={isActive(item.to)}
              />
            ))}
          </div>

          {/* Settings — 底部 */}
          <div className="mt-auto pt-2 border-t app-border">
            <Tooltip label="设置" position="right" withArrow>
              <NavLink to="/settings" end={false} className="block no-underline">
                <div
                  className={`
                    relative flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
                    transition-all duration-150 ease-out
                    ${settingsActive
                      ? 'bg-[var(--mantine-color-brand-light)] text-[var(--mantine-color-brand-light-color)] font-medium'
                      : 'app-text-muted hover:app-text-secondary hover:app-bg-tertiary'
                    }
                  `}
                  style={{ transform: settingsActive ? 'translateX(1px)' : 'translateX(0)' }}
                >
                  {settingsActive && <span className="nav-active-bar" />}
                  <svg
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-150"
                    style={{ transform: settingsActive ? 'rotate(30deg) scale(1.08)' : 'rotate(0deg) scale(1)' }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>设置</span>
                </div>
              </NavLink>
            </Tooltip>
          </div>
        </nav>

        {/* Content area */}
        <main className="flex-1 min-h-0 overflow-y-auto fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
