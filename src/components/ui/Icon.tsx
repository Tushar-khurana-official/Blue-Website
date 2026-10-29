import {
  Award, Building2, ChartLine, ChartPie, ClipboardList, House, Lock, MapPinned, MessageCircle, Rocket, ShieldCheck,
  TrendingUp, UserRound, type LucideIcon,
} from "lucide-react";

/** Content files refer to icons by name; this maps them to Lucide (inline SVG). */
const map: Record<string, LucideIcon> = {
  trend: TrendingUp, pie: ChartPie, home: House, award: Award, shield: ShieldCheck, user: UserRound, lock: Lock,
  building: Building2, map: MapPinned, chat: MessageCircle, clipboard: ClipboardList, rocket: Rocket, chart: ChartLine,
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const C = map[name] ?? ChartLine;
  return <C aria-hidden="true" className={className} strokeWidth={1.8} />;
}
