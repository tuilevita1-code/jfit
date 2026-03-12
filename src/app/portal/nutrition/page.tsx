import { StatCard } from "@/components/ui/StatCard";
import { mockNutritionPlan } from "@/lib/mock/data";

const C = {
  bg: "#080808",
  bgAlt: "#0D0D0D",
  bgCard: "#111111",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.65)",
  textFaint: "rgba(255,255,255,0.45)",
  red: "#D62828",
  green: "#22c55e",
  amber: "#f59e0b",
  border: "rgba(255,255,255,0.08)",
};

export default function NutritionPage() {
  const plan = mockNutritionPlan;

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          My Plan
        </p>
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: C.text,
          }}
        >
          Nutrition
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Your daily meal plan and macro targets
        </p>
      </div>

      {/* Daily Totals */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Calories" value={String(plan.totalCalories)} sub="kcal / day" />
        <StatCard label="Protein" value={`${plan.totalProtein}g`} />
        <StatCard label="Carbs" value={`${plan.totalCarbs}g`} />
        <StatCard label="Fat" value={`${plan.totalFat}g`} />
      </div>

      {/* Meals */}
      <div className="flex flex-col gap-4">
        {plan.meals.map((meal) => (
          <div
            key={meal.id}
            style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
          >
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: `1px solid ${C.border}` }}
            >
              <div className="flex items-center gap-3">
                <p
                  className="text-base font-medium"
                  style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                >
                  {meal.name}
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                >
                  {meal.time}
                </p>
              </div>
              <p
                className="text-sm font-medium"
                style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
              >
                {meal.calories} kcal
              </p>
            </div>
            <div className="p-5">
              {/* Macros */}
              <div className="flex gap-4 mb-4">
                {[
                  { label: "Protein", value: `${meal.protein}g` },
                  { label: "Carbs", value: `${meal.carbs}g` },
                  { label: "Fat", value: `${meal.fat}g` },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p
                      className="text-xs uppercase tracking-[0.1em]"
                      style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm mt-0.5"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              {/* Foods */}
              <div className="flex flex-col gap-1">
                {meal.foods.map((food, i) => (
                  <p
                    key={i}
                    className="text-sm"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {food}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
