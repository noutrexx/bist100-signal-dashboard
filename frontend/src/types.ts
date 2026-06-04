export type SignalType = 'GUCLU AL' | 'AL' | 'BEKLE' | 'SAT' | 'GUCLU SAT'

export type IndicatorKey =
  | 'rsi'
  | 'bollinger'
  | 'macd'
  | 'swing'
  | 'ema_cross'
  | 'stoch_rsi'
  | 'volume'
  | 'vwap'

export type IndicatorDetails = Partial<Record<IndicatorKey, number>>

export interface Signal {
  symbol: string
  name: string
  signal: SignalType
  score: number
  price?: number | null
  change_pct?: number | null
  al_fiyati?: number | null
  sat_fiyati?: number | null
  rsi?: number | null
  macd_hist?: number | null
  stoch_rsi?: number | null
  vol_spike?: boolean
  vwap?: number | null
  details?: IndicatorDetails
}

export interface Candle {
  time: string
  open: number
  high: number
  low: number
  close: number
  bb_upper?: number | null
  bb_middle?: number | null
  bb_lower?: number | null
  ema_fast?: number | null
  ema_slow?: number | null
  vwap?: number | null
  rsi?: number | null
  stoch_rsi?: number | null
  macd?: number | null
  macd_signal?: number | null
  macd_hist?: number | null
  swing_high?: boolean
  swing_low?: boolean
  vol_spike?: boolean
}

export interface StockDetail {
  symbol?: string
  name?: string
  signal?: Partial<Signal>
  candles?: Candle[]
}

export interface NewsItem {
  id: string
  action: 'AL' | 'SAT' | 'BEKLE'
  source: string
  published_at: string
  title: string
  impact_desc: string
  symbols?: string[]
  url?: string
}

export interface InstitutionalItem {
  institution: string
  full_name: string
  action: 'AL' | 'SAT'
  symbol: string
  amount?: string
  source?: string
  title?: string
}

export interface PaperPosition {
  symbol?: string
  side?: string
  qty?: number
  entry_price?: number
  current_price?: number
  stop_loss?: number
  take_profit?: number
  pnl: number
  pnl_pct: number
}

export interface PaperTrade {
  symbol?: string
  reason?: string
  entry_price?: number
  exit_price?: number
  qty?: number
  pnl: number
  pnl_pct: number
  exit_time?: string
}

export interface PaperStatus {
  balance?: number
  total_pnl?: number
  positions?: PaperPosition[]
  history?: PaperTrade[]
  win_rate?: number
  total_trades?: number
  bist_open?: boolean
}
