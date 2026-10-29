import {
  BadgeIndianRupee, ChartCandlestick, ChartLine, ChartPie, ClipboardList, Eye, Headset,
  MessageCircle, Repeat, Rocket, ShieldCheck, Target, Users, type LucideIcon,
} from "lucide-react";

/** Content files refer to icons by name; this maps them to Lucide (inline SVG). */
const map: Record<string, LucideIcon> = {
  repeat: Repeat, pie: ChartPie, candles: ChartCandlestick, users: Users, target: Target, eye: Eye,
  badge: BadgeIndianRupee, shield: ShieldCheck, headset: Headset, chat: MessageCircle,
  clipboard: ClipboardList, rocket: Rocket, chart: ChartLine,
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const C = map[name] ?? ChartLine;
  return <C aria-hidden="true" className={className} strokeWidth={1.8} />;
}
