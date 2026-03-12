export type Role = "coach" | "trainer" | "client";
export type PackageTier = "Bronze" | "Gold" | "Platinum";
export type InvoiceStatus = "draft" | "sent" | "paid" | "overdue";
export type ProgramStatus = "active" | "completed" | "paused";

export interface Trainer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  instagram: string;
  location: string;
}

export interface Client {
  id: string;
  trainerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  package: PackageTier;
  waiverSigned: boolean;
  streak: number;
  lastActive: string;
  createdAt: string;
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
}

export interface Workout {
  id: string;
  name: string;
  dayNumber: number;
  exercises: Exercise[];
}

export interface Program {
  id: string;
  name: string;
  durationWeeks: number;
  daysPerWeek: number;
  status: ProgramStatus;
  workouts: Workout[];
}

export interface Measurement {
  id: string;
  clientId: string;
  date: string;
  weight: number;
  bodyFatPercent?: number;
  waist?: number;
  chest?: number;
  arms?: number;
  thighs?: number;
  notes?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  senderName: string;
  content: string;
  read: boolean;
  sentAt: string;
}

export interface Invoice {
  id: string;
  clientId: string;
  clientName: string;
  invoiceNumber: string;
  amount: number;
  status: InvoiceStatus;
  dueDate: string;
  createdAt: string;
  lineItems: { description: string; quantity: number; unitPrice: number }[];
}

export interface SessionRequest {
  id: string;
  clientId: string;
  clientName: string;
  requestedAt: string;
  scheduledFor?: string;
  status: "pending" | "confirmed" | "cancelled";
  notes?: string;
}

export interface Announcement {
  id: string;
  trainerId: string;
  content: string;
  pinned: boolean;
  createdAt: string;
}

export interface Habit {
  id: string;
  clientId: string;
  name: string;
  icon: string;
}

export interface HabitLog {
  id: string;
  habitId: string;
  clientId: string;
  date: string;
  completed: boolean;
}

export interface WorkoutLog {
  id: string;
  clientId: string;
  exerciseId: string;
  exerciseName: string;
  weight: number;
  repsCompleted: number;
  rpe: number;
  loggedAt: string;
}

export interface ProgressPhoto {
  id: string;
  clientId: string;
  url: string;
  takenAt: string;
  notes?: string;
}

export interface Meal {
  id: string;
  name: string;
  time: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  foods: string[];
}

export interface NutritionPlan {
  id: string;
  clientId: string;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  meals: Meal[];
}
