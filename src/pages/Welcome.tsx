import { useState } from 'react'
import { Button, Checkbox, Text, Title } from '@mantine/core'
import { IconAlertTriangle, IconPinFilled, IconShieldCheck } from '@tabler/icons-react'
import logoSrc from '@/assets/logo.png'

interface WelcomeProps {
  onAccept: () => void
}

export default function Welcome({ onAccept }: WelcomeProps) {
  const [accepted, setAccepted] = useState(false)

  return (
    <div className="w-full max-w-md flex flex-col items-center gap-3">
      {/* Header: Logo + Title + Safety Badge */}
      <div className="slide-up flex flex-col items-center gap-2 mb-1" style={{ animationDelay: '0ms' }}>
        <div className="relative">
          <img
            src={logoSrc}
            alt="Qclaw"
            className="w-16 h-16"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(247, 103, 7, 0.35))',
            }}
          />
          {/* 光晕 */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(247,103,7,0.15) 0%, transparent 70%)',
              transform: 'scale(1.8)',
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Title order={3} className="app-text-primary" style={{ letterSpacing: '-0.3px' }}>Qclaw</Title>
          <div
            className="flex items-center gap-1 px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(234, 179, 8, 0.12)',
              border: '1px solid rgba(234, 179, 8, 0.25)',
            }}
          >
            <IconAlertTriangle size={11} style={{ color: '#ca8a04' }} />
            <Text fw={600} size="xs" style={{ color: '#ca8a04' }}>安全提醒</Text>
          </div>
        </div>
        <Text size="xs" className="app-text-faint">OpenClaw 桌面管家 · 开箱即用</Text>
      </div>

      {/* Card 1: About OpenClaw */}
      <div
        className="slide-up w-full rounded-xl px-4 py-3 flex flex-col gap-1.5"
        style={{
          animationDelay: '60ms',
          background: 'var(--app-bg-secondary)',
          border: '1px solid var(--app-border)',
        }}
      >
        <div className="flex items-center gap-1.5">
          <IconPinFilled size={12} style={{ color: '#f87171', flexShrink: 0 }} />
          <Text fw={600} size="sm" className="app-text-primary">关于 OpenClaw</Text>
        </div>
        <Text size="xs" className="app-text-secondary">
          OpenClaw 是一个 AI 助手，为了完成任务，它需要以下权限：
        </Text>
        <ul
          className="list-disc list-inside app-text-secondary flex flex-col gap-0.5"
          style={{ fontSize: '12px', lineHeight: 1.75, paddingLeft: '2px' }}
        >
          <li>读取和修改文件、执行系统命令、连接互联网</li>
          <li>访问您的 API 密钥（用于调用 AI 服务）</li>
          <li>操作 IM 应用（飞书、企微、钉钉等）</li>
          <li style={{ color: 'var(--app-text-warning)', fontWeight: 500 }}>
            使用 AI 服务会产生费用，取决于您选择的提供商
          </li>
        </ul>
      </div>

      {/* Card 2: About Qclaw */}
      <div
        className="slide-up w-full rounded-xl px-4 py-3 flex flex-col gap-1.5"
        style={{
          animationDelay: '120ms',
          background: 'var(--app-bg-secondary)',
          border: '1px solid var(--app-border)',
        }}
      >
        <div className="flex items-center gap-1.5">
          <IconShieldCheck size={13} style={{ color: 'var(--app-text-success)', flexShrink: 0 }} />
          <Text fw={600} size="sm" className="app-text-primary">关于 Qclaw</Text>
        </div>
        <Text size="xs" className="app-text-secondary">
          Qclaw 是轻量化的 OpenClaw 管家，Qclaw 会：
        </Text>
        <ul
          className="list-disc list-inside app-text-secondary flex flex-col gap-0.5"
          style={{ fontSize: '12px', lineHeight: 1.75, paddingLeft: '2px' }}
        >
          <li>自动安装必要组件（Node.js、OpenClaw CLI、IM 插件）</li>
          <li>
            <span style={{ color: 'var(--app-text-warning)', fontWeight: 500 }}>
              保护现有配置（安装前自动备份，不会覆盖您的设置）
            </span>
          </li>
          <li>本地数据存储（所有配置和数据仅保存在您的电脑上）</li>
        </ul>
      </div>

      {/* Checkbox */}
      <div className="slide-up self-start" style={{ animationDelay: '180ms' }}>
        <Checkbox
          label="我已阅读并了解以上内容"
          checked={accepted}
          onChange={(e) => setAccepted(e.currentTarget.checked)}
          size="sm"
        />
      </div>

      {/* Confirm Button */}
      <div className="slide-up w-full" style={{ animationDelay: '220ms' }}>
        <Button
          fullWidth
          disabled={!accepted}
          onClick={onAccept}
          size="sm"
          style={{
            transition: 'all 0.2s ease',
            boxShadow: accepted ? '0 4px 12px rgba(247, 103, 7, 0.3)' : 'none',
          }}
        >
          确认继续
        </Button>
      </div>
    </div>
  )
}
