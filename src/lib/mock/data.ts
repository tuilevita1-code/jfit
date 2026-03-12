import type {
  Trainer,
  Client,
  Program,
  Measurement,
  Message,
  Invoice,
  SessionRequest,
  Announcement,
  Habit,
  HabitLog,
  WorkoutLog,
  NutritionPlan,
} from "@/types";

// ---------------------------------------------------------------------------
// Trainer
// ---------------------------------------------------------------------------

export const mockTrainer: Trainer = {
  id: "t1",
  firstName: "James",
  lastName: "Ismail",
  email: "jamesismail020@gmail.com",
  phone: "+61 452 404 017",
  instagram: "instagram.com/trainwitjames/",
  location: "Goodlife Health Clubs, Richlands, Brisbane QLD",
};

// ---------------------------------------------------------------------------
// Clients
// ---------------------------------------------------------------------------

export const mockClients: Client[] = [
  {
    id: "c1",
    trainerId: "t1",
    firstName: "Sarah",
    lastName: "Mitchell",
    email: "sarah.mitchell@email.com",
    phone: "+61 411 111 001",
    package: "Gold",
    waiverSigned: true,
    streak: 7,
    lastActive: "2026-03-13",
    createdAt: "2025-09-01",
  },
  {
    id: "c2",
    trainerId: "t1",
    firstName: "Marcus",
    lastName: "Thompson",
    email: "marcus.thompson@email.com",
    phone: "+61 411 111 002",
    package: "Platinum",
    waiverSigned: true,
    streak: 15,
    lastActive: "2026-03-13",
    createdAt: "2025-08-15",
  },
  {
    id: "c3",
    trainerId: "t1",
    firstName: "Emma",
    lastName: "Wilson",
    email: "emma.wilson@email.com",
    phone: "+61 411 111 003",
    package: "Bronze",
    waiverSigned: false,
    streak: 3,
    lastActive: "2026-03-11",
    createdAt: "2025-11-20",
  },
  {
    id: "c4",
    trainerId: "t1",
    firstName: "Jake",
    lastName: "Rodriguez",
    email: "jake.rodriguez@email.com",
    phone: "+61 411 111 004",
    package: "Gold",
    waiverSigned: true,
    streak: 22,
    lastActive: "2026-03-13",
    createdAt: "2025-07-10",
  },
  {
    id: "c5",
    trainerId: "t1",
    firstName: "Olivia",
    lastName: "Chen",
    email: "olivia.chen@email.com",
    phone: "+61 411 111 005",
    package: "Platinum",
    waiverSigned: true,
    streak: 11,
    lastActive: "2026-03-12",
    createdAt: "2025-10-05",
  },
  {
    id: "c6",
    trainerId: "t1",
    firstName: "Tom",
    lastName: "Nguyen",
    email: "tom.nguyen@email.com",
    phone: "+61 411 111 006",
    package: "Bronze",
    waiverSigned: false,
    streak: 1,
    lastActive: "2026-03-13",
    createdAt: "2026-02-28",
  },
];

// Current client logged into the portal
export const mockCurrentClient = mockClients[0]; // Sarah Mitchell (c1)

// ---------------------------------------------------------------------------
// Programme — 12-Week Strength Builder
// ---------------------------------------------------------------------------

export const mockProgram: Program = {
  id: "p1",
  name: "12-Week Strength Builder",
  durationWeeks: 12,
  daysPerWeek: 3,
  status: "active",
  workouts: [
    {
      id: "w1",
      name: "Upper Push A",
      dayNumber: 1,
      exercises: [
        { id: "e1", name: "Bench Press", sets: 4, reps: "6-8" },
        { id: "e2", name: "Overhead Press", sets: 3, reps: "8-10" },
        { id: "e3", name: "Incline DB Press", sets: 3, reps: "10-12" },
        { id: "e4", name: "Lateral Raises", sets: 3, reps: "12-15" },
        { id: "e5", name: "Tricep Pushdowns", sets: 3, reps: "12-15" },
      ],
    },
    {
      id: "w2",
      name: "Lower Body",
      dayNumber: 2,
      exercises: [
        { id: "e6", name: "Back Squat", sets: 4, reps: "6-8" },
        { id: "e7", name: "Romanian Deadlift", sets: 3, reps: "8-10" },
        { id: "e8", name: "Leg Press", sets: 3, reps: "10-12" },
        { id: "e9", name: "Walking Lunges", sets: 3, reps: "12 each" },
        { id: "e10", name: "Calf Raises", sets: 4, reps: "15-20" },
      ],
    },
    {
      id: "w3",
      name: "Upper Pull B",
      dayNumber: 3,
      exercises: [
        { id: "e11", name: "Pull-Ups", sets: 4, reps: "6-8" },
        { id: "e12", name: "Barbell Row", sets: 4, reps: "6-8" },
        { id: "e13", name: "Cable Face Pull", sets: 3, reps: "15-20" },
        { id: "e14", name: "Dumbbell Curl", sets: 3, reps: "10-12" },
        { id: "e15", name: "Hammer Curls", sets: 3, reps: "10-12" },
      ],
    },
  ],
};

export const mockPrograms: Program[] = [mockProgram];

// ---------------------------------------------------------------------------
// Invoices — JFIT-0012 to JFIT-0018
// ---------------------------------------------------------------------------

export const mockInvoices: Invoice[] = [
  {
    id: "inv1",
    clientId: "c1",
    clientName: "Sarah Mitchell",
    invoiceNumber: "JFIT-0012",
    amount: 600,
    status: "paid",
    dueDate: "2026-02-07",
    createdAt: "2026-02-01",
    lineItems: [{ description: "Gold Package — weekly training (4 weeks)", quantity: 4, unitPrice: 150 }],
  },
  {
    id: "inv2",
    clientId: "c2",
    clientName: "Marcus Thompson",
    invoiceNumber: "JFIT-0013",
    amount: 800,
    status: "paid",
    dueDate: "2026-02-07",
    createdAt: "2026-02-01",
    lineItems: [{ description: "Platinum Package — weekly training (4 weeks)", quantity: 4, unitPrice: 200 }],
  },
  {
    id: "inv3",
    clientId: "c3",
    clientName: "Emma Wilson",
    invoiceNumber: "JFIT-0014",
    amount: 320,
    status: "sent",
    dueDate: "2026-03-14",
    createdAt: "2026-03-01",
    lineItems: [{ description: "Bronze Package — weekly training (4 weeks)", quantity: 4, unitPrice: 80 }],
  },
  {
    id: "inv4",
    clientId: "c4",
    clientName: "Jake Rodriguez",
    invoiceNumber: "JFIT-0015",
    amount: 600,
    status: "overdue",
    dueDate: "2026-02-28",
    createdAt: "2026-02-15",
    lineItems: [{ description: "Gold Package — weekly training (4 weeks)", quantity: 4, unitPrice: 150 }],
  },
  {
    id: "inv5",
    clientId: "c5",
    clientName: "Olivia Chen",
    invoiceNumber: "JFIT-0016",
    amount: 800,
    status: "paid",
    dueDate: "2026-02-28",
    createdAt: "2026-02-15",
    lineItems: [{ description: "Platinum Package — weekly training (4 weeks)", quantity: 4, unitPrice: 200 }],
  },
  {
    id: "inv6",
    clientId: "c6",
    clientName: "Tom Nguyen",
    invoiceNumber: "JFIT-0017",
    amount: 320,
    status: "draft",
    dueDate: "2026-03-31",
    createdAt: "2026-03-10",
    lineItems: [{ description: "Bronze Package — weekly training (4 weeks)", quantity: 4, unitPrice: 80 }],
  },
  {
    id: "inv7",
    clientId: "c1",
    clientName: "Sarah Mitchell",
    invoiceNumber: "JFIT-0018",
    amount: 600,
    status: "sent",
    dueDate: "2026-03-28",
    createdAt: "2026-03-10",
    lineItems: [{ description: "Gold Package — weekly training (4 weeks)", quantity: 4, unitPrice: 150 }],
  },
];

// ---------------------------------------------------------------------------
// Messages — 6 conversations (James ↔ each client)
// ---------------------------------------------------------------------------

export const mockMessages: Message[] = [
  // James ↔ Sarah
  {
    id: "msg1",
    senderId: "t1",
    receiverId: "c1",
    senderName: "James Ismail",
    content: "Great session today Sarah! Really solid work on the bench. Let's aim to add 2.5kg next week.",
    read: true,
    sentAt: "2026-03-13T09:15:00",
  },
  {
    id: "msg2",
    senderId: "c1",
    receiverId: "t1",
    senderName: "Sarah Mitchell",
    content: "Thanks James! Feeling strong. Should I rest tomorrow or is it okay to do some light cardio?",
    read: true,
    sentAt: "2026-03-13T10:02:00",
  },
  {
    id: "msg3",
    senderId: "t1",
    receiverId: "c1",
    senderName: "James Ismail",
    content: "Light 20-minute walk is fine. Nothing intense — keep the legs fresh for Thursday.",
    read: false,
    sentAt: "2026-03-13T10:18:00",
  },

  // James ↔ Marcus
  {
    id: "msg4",
    senderId: "c2",
    receiverId: "t1",
    senderName: "Marcus Thompson",
    content: "James, can we shift Friday's session to Saturday morning? Work meeting came up.",
    read: true,
    sentAt: "2026-03-12T14:30:00",
  },
  {
    id: "msg5",
    senderId: "t1",
    receiverId: "c2",
    senderName: "James Ismail",
    content: "No problem Marcus. Saturday 8am works — I'll update the booking.",
    read: true,
    sentAt: "2026-03-12T15:05:00",
  },

  // James ↔ Emma
  {
    id: "msg6",
    senderId: "t1",
    receiverId: "c3",
    senderName: "James Ismail",
    content: "Hi Emma, just a reminder to get your waiver signed before our next session.",
    read: false,
    sentAt: "2026-03-11T08:00:00",
  },
  {
    id: "msg7",
    senderId: "c3",
    receiverId: "t1",
    senderName: "Emma Wilson",
    content: "Sorry James, I'll do it today!",
    read: true,
    sentAt: "2026-03-11T09:45:00",
  },

  // James ↔ Jake
  {
    id: "msg8",
    senderId: "c4",
    receiverId: "t1",
    senderName: "Jake Rodriguez",
    content: "22 day streak! Feeling unstoppable. What's next after this programme?",
    read: true,
    sentAt: "2026-03-13T07:30:00",
  },
  {
    id: "msg9",
    senderId: "t1",
    receiverId: "c4",
    senderName: "James Ismail",
    content: "Love the energy Jake. We'll move you to a hypertrophy block next — I'm putting it together now.",
    read: true,
    sentAt: "2026-03-13T08:00:00",
  },

  // James ↔ Olivia
  {
    id: "msg10",
    senderId: "c5",
    receiverId: "t1",
    senderName: "Olivia Chen",
    content: "My nutrition plan is working really well. Down 1.2kg this week!",
    read: true,
    sentAt: "2026-03-12T19:00:00",
  },
  {
    id: "msg11",
    senderId: "t1",
    receiverId: "c5",
    senderName: "James Ismail",
    content: "That's amazing Olivia! Consistent week. Let's keep protein high and review carbs on Monday.",
    read: true,
    sentAt: "2026-03-12T19:22:00",
  },

  // James ↔ Tom
  {
    id: "msg12",
    senderId: "t1",
    receiverId: "c6",
    senderName: "James Ismail",
    content: "Welcome to JFIT Tom! First session is Monday at 6am. See you there.",
    read: true,
    sentAt: "2026-03-10T11:00:00",
  },
  {
    id: "msg13",
    senderId: "c6",
    receiverId: "t1",
    senderName: "Tom Nguyen",
    content: "Looking forward to it! Should I bring anything?",
    read: true,
    sentAt: "2026-03-10T11:30:00",
  },
  {
    id: "msg14",
    senderId: "t1",
    receiverId: "c6",
    senderName: "James Ismail",
    content: "Just water and comfortable workout gear. I'll have everything else sorted.",
    read: false,
    sentAt: "2026-03-10T11:45:00",
  },
];

// ---------------------------------------------------------------------------
// Sessions
// ---------------------------------------------------------------------------

export const mockSessions: SessionRequest[] = [
  {
    id: "s1",
    clientId: "c1",
    clientName: "Sarah Mitchell",
    requestedAt: "2026-03-11T10:00:00",
    scheduledFor: "2026-03-17T07:00:00",
    status: "confirmed",
    notes: "Upper Push session",
  },
  {
    id: "s2",
    clientId: "c2",
    clientName: "Marcus Thompson",
    requestedAt: "2026-03-12T14:00:00",
    scheduledFor: "2026-03-15T08:00:00",
    status: "confirmed",
    notes: "Moved from Friday",
  },
  {
    id: "s3",
    clientId: "c3",
    clientName: "Emma Wilson",
    requestedAt: "2026-03-13T09:00:00",
    status: "pending",
    notes: "Preferably Tuesday or Wednesday morning",
  },
  {
    id: "s4",
    clientId: "c4",
    clientName: "Jake Rodriguez",
    requestedAt: "2026-03-13T07:00:00",
    scheduledFor: "2026-03-14T06:00:00",
    status: "confirmed",
  },
];

// ---------------------------------------------------------------------------
// Measurements — Sarah Mitchell
// ---------------------------------------------------------------------------

export const mockMeasurements: Measurement[] = [
  {
    id: "m1",
    clientId: "c1",
    date: "2026-03-10",
    weight: 67.9,
    bodyFatPercent: 22.4,
    waist: 72,
    chest: 90,
    arms: 29,
    thighs: 55,
    notes: "Feeling leaner. Energy levels up.",
  },
  {
    id: "m2",
    clientId: "c1",
    date: "2026-02-24",
    weight: 68.8,
    bodyFatPercent: 23.1,
    waist: 74,
    chest: 91,
    arms: 28.5,
    thighs: 56,
  },
  {
    id: "m3",
    clientId: "c1",
    date: "2026-02-10",
    weight: 70.2,
    bodyFatPercent: 24.0,
    waist: 76,
    chest: 92,
    arms: 28,
    thighs: 57,
    notes: "Starting measurements",
  },
  {
    id: "m4",
    clientId: "c1",
    date: "2026-01-27",
    weight: 71.5,
    bodyFatPercent: 24.8,
    waist: 78,
    chest: 93,
    arms: 27.5,
    thighs: 58,
  },
];

// ---------------------------------------------------------------------------
// Workout Logs — Sarah Mitchell
// ---------------------------------------------------------------------------

export const mockWorkoutLogs: WorkoutLog[] = [
  {
    id: "wl1",
    clientId: "c1",
    exerciseId: "e1",
    exerciseName: "Bench Press",
    weight: 52.5,
    repsCompleted: 7,
    rpe: 8,
    loggedAt: "2026-03-11T07:30:00",
  },
  {
    id: "wl2",
    clientId: "c1",
    exerciseId: "e2",
    exerciseName: "Overhead Press",
    weight: 37.5,
    repsCompleted: 9,
    rpe: 7,
    loggedAt: "2026-03-11T07:45:00",
  },
  {
    id: "wl3",
    clientId: "c1",
    exerciseId: "e3",
    exerciseName: "Incline DB Press",
    weight: 16,
    repsCompleted: 11,
    rpe: 8,
    loggedAt: "2026-03-11T08:00:00",
  },
  {
    id: "wl4",
    clientId: "c1",
    exerciseId: "e6",
    exerciseName: "Back Squat",
    weight: 70,
    repsCompleted: 6,
    rpe: 9,
    loggedAt: "2026-03-08T07:30:00",
  },
  {
    id: "wl5",
    clientId: "c1",
    exerciseId: "e7",
    exerciseName: "Romanian Deadlift",
    weight: 55,
    repsCompleted: 10,
    rpe: 8,
    loggedAt: "2026-03-08T07:48:00",
  },
  {
    id: "wl6",
    clientId: "c1",
    exerciseId: "e11",
    exerciseName: "Pull-Ups",
    weight: 0,
    repsCompleted: 7,
    rpe: 8,
    loggedAt: "2026-03-06T07:30:00",
  },
];

// ---------------------------------------------------------------------------
// Habits — Sarah Mitchell
// ---------------------------------------------------------------------------

export const mockHabits: Habit[] = [
  { id: "h1", clientId: "c1", name: "Drink 3L Water", icon: "droplets" },
  { id: "h2", clientId: "c1", name: "8 Hours Sleep", icon: "moon" },
  { id: "h3", clientId: "c1", name: "No Processed Food", icon: "ban" },
  { id: "h4", clientId: "c1", name: "Morning Walk", icon: "footprints" },
];

// Habit logs for the past 7 days (2026-03-07 to 2026-03-13)
export const mockHabitLogs: HabitLog[] = [
  // Drink 3L Water
  { id: "hl1", habitId: "h1", clientId: "c1", date: "2026-03-13", completed: true },
  { id: "hl2", habitId: "h1", clientId: "c1", date: "2026-03-12", completed: true },
  { id: "hl3", habitId: "h1", clientId: "c1", date: "2026-03-11", completed: true },
  { id: "hl4", habitId: "h1", clientId: "c1", date: "2026-03-10", completed: false },
  { id: "hl5", habitId: "h1", clientId: "c1", date: "2026-03-09", completed: true },
  { id: "hl6", habitId: "h1", clientId: "c1", date: "2026-03-08", completed: true },
  { id: "hl7", habitId: "h1", clientId: "c1", date: "2026-03-07", completed: true },

  // 8 Hours Sleep
  { id: "hl8", habitId: "h2", clientId: "c1", date: "2026-03-13", completed: true },
  { id: "hl9", habitId: "h2", clientId: "c1", date: "2026-03-12", completed: false },
  { id: "hl10", habitId: "h2", clientId: "c1", date: "2026-03-11", completed: true },
  { id: "hl11", habitId: "h2", clientId: "c1", date: "2026-03-10", completed: true },
  { id: "hl12", habitId: "h2", clientId: "c1", date: "2026-03-09", completed: false },
  { id: "hl13", habitId: "h2", clientId: "c1", date: "2026-03-08", completed: true },
  { id: "hl14", habitId: "h2", clientId: "c1", date: "2026-03-07", completed: true },

  // No Processed Food
  { id: "hl15", habitId: "h3", clientId: "c1", date: "2026-03-13", completed: true },
  { id: "hl16", habitId: "h3", clientId: "c1", date: "2026-03-12", completed: true },
  { id: "hl17", habitId: "h3", clientId: "c1", date: "2026-03-11", completed: true },
  { id: "hl18", habitId: "h3", clientId: "c1", date: "2026-03-10", completed: true },
  { id: "hl19", habitId: "h3", clientId: "c1", date: "2026-03-09", completed: false },
  { id: "hl20", habitId: "h3", clientId: "c1", date: "2026-03-08", completed: true },
  { id: "hl21", habitId: "h3", clientId: "c1", date: "2026-03-07", completed: false },

  // Morning Walk
  { id: "hl22", habitId: "h4", clientId: "c1", date: "2026-03-13", completed: true },
  { id: "hl23", habitId: "h4", clientId: "c1", date: "2026-03-12", completed: true },
  { id: "hl24", habitId: "h4", clientId: "c1", date: "2026-03-11", completed: false },
  { id: "hl25", habitId: "h4", clientId: "c1", date: "2026-03-10", completed: true },
  { id: "hl26", habitId: "h4", clientId: "c1", date: "2026-03-09", completed: true },
  { id: "hl27", habitId: "h4", clientId: "c1", date: "2026-03-08", completed: true },
  { id: "hl28", habitId: "h4", clientId: "c1", date: "2026-03-07", completed: false },
];

// ---------------------------------------------------------------------------
// Nutrition Plan — Sarah Mitchell
// ---------------------------------------------------------------------------

export const mockNutritionPlan: NutritionPlan = {
  id: "np1",
  clientId: "c1",
  totalCalories: 2018,
  totalProtein: 155,
  totalCarbs: 210,
  totalFat: 62,
  meals: [
    {
      id: "meal1",
      name: "Breakfast",
      time: "07:00",
      calories: 480,
      protein: 38,
      carbs: 52,
      fat: 12,
      foods: ["Greek yoghurt (200g)", "Rolled oats (60g)", "Banana (1 medium)", "Whey protein (30g)"],
    },
    {
      id: "meal2",
      name: "Morning Snack",
      time: "10:00",
      calories: 220,
      protein: 20,
      carbs: 24,
      fat: 6,
      foods: ["Rice cakes (3)", "Cottage cheese (100g)", "Apple (1 small)"],
    },
    {
      id: "meal3",
      name: "Lunch",
      time: "13:00",
      calories: 560,
      protein: 45,
      carbs: 62,
      fat: 16,
      foods: ["Chicken breast (180g)", "Brown rice (150g cooked)", "Mixed vegetables (200g)", "Olive oil (1 tsp)"],
    },
    {
      id: "meal4",
      name: "Afternoon Snack",
      time: "16:00",
      calories: 198,
      protein: 22,
      carbs: 18,
      fat: 5,
      foods: ["Tuna (95g tin)", "Wholegrain crackers (4)", "Cucumber slices"],
    },
    {
      id: "meal5",
      name: "Dinner",
      time: "19:00",
      calories: 560,
      protein: 30,
      carbs: 54,
      fat: 23,
      foods: ["Salmon fillet (150g)", "Sweet potato (200g)", "Steamed broccoli (150g)", "Lemon & herbs"],
    },
  ],
};

// ---------------------------------------------------------------------------
// Announcements
// ---------------------------------------------------------------------------

export const mockAnnouncements: Announcement[] = [
  {
    id: "an1",
    trainerId: "t1",
    content:
      "The gym will be closed on Good Friday (18 April). All sessions that week will be rescheduled — I'll reach out individually to confirm new times.",
    pinned: true,
    createdAt: "2026-03-10T09:00:00",
  },
  {
    id: "an2",
    trainerId: "t1",
    content:
      "New programme templates are coming next week. Platinum clients will get early access. Stay tuned!",
    pinned: false,
    createdAt: "2026-03-05T11:00:00",
  },
];
