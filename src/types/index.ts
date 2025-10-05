// Global type definitions for the HR Dashboard
import { JSX } from 'react'

export interface NavItem {
  id: string;
  label: string;
}

export interface IconButton {
  icon: React.ElementType;
  label: string;
  hasNotification: boolean;
  component: (Icon: React.ElementType, item: IconButton) => JSX.Element;
}

export interface ProgressItem {
  label: string;
  percentage: number;
  color: string;
  value: string;
}

export interface KPIItem {
  value: number;
  label: string;
  icon: React.ElementType;
}

export interface TimeSlot {
  day: string;
  time: string;
  title: string;
  description: string;
}

export interface Task {
  icon: React.ElementType;
  task: string;
  time: string;
  completed: boolean;
}

export interface ExpandableSection {
  title: string;
  isExpanded: boolean;
  setExpanded: (expanded: boolean) => void;
  content?: React.ReactNode;
}

export interface WeeklyDataPoint {
  day: string;
  height: number;
  isActive: boolean;
}

export interface ProgressBar {
  percentage: string;
  label: string;
  bgColor: string;
  textColor: string;
  width: string;
}

// Component Props interfaces (future extensibility)
export type HeaderProps = Record<string, never>
export type WelcomeSectionProps = Record<string, never>
export type ProgressIndicatorsProps = Record<string, never>
export type KPIMetricsProps = Record<string, never>
export type UserProfileProps = Record<string, never>
export type ProgressCardProps = Record<string, never>
export type TimeTrackerProps = Record<string, never>
export type OnboardingCardProps = Record<string, never>
export type PersonContributionProps = Record<string, never>
export type CalendarCardProps = Record<string, never>

// Global state types (for future use with state management)
export interface DashboardState {
  user: {
    name: string;
    role: string;
    salary: string;
    avatar: string;
  };
  progress: {
    workHours: string;
    weeklyData: WeeklyDataPoint[];
  };
  onboarding: {
    percentage: number;
    tasks: Task[];
  };
}
