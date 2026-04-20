export const Header = () => {
  const timeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }
  const updateDashboardInformation = () => {
    // This function can be enhanced to fetch real-time data or use more complex logic
    const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    return `Here's what's happening with your dashboard today, ${dayOfWeek}.`;
  }
  return (
    <div className="h-14 bg-stone-950/60 backdrop-blur-md px-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-stone-300">
          {timeGreeting()},
        </h2>
        <h4 className="text-xs text-stone-400">
          {updateDashboardInformation()} {/* This function should return a string like "Here's what's happening with your dashboard today." */}
        </h4>
      </div>

      <div className="flex items-center gap-3">
        <input
          placeholder="Search..."
          className="px-3 py-1.5 text-sm border border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {/* <div className="text-sm text-stone-400">Puput 👋</div> */}
      </div>
    </div>
  );
};