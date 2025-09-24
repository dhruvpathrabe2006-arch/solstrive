export default function AboutPage() {
  const members = [
    { name: "Dhruv", role: "Team Leader" },
    { name: "Tanmay", role: "Developer" },
    { name: "Harsh", role: "Design & Development" },
    { name: "Kasib", role: "Electronics Lead" },
    { name: "Anisha", role: "Researcher & Documentation" },
    { name: "Nishta", role: "Creative Ideas & Innovation" },
  ];

  const rolePhoto = (role: string) => {
    switch (role) {
      case "Team Leader":
        return "https://www.srscc.co.uk/wp-content/uploads/2024/08/Copy-of-Untitled-Design-2.png";
      case "Developer":
        return "https://verpex.com/assets/uploads/images/blog/How-to-become-a-Backend-Developer.jpg?v=1665484477";
      case "Design & Development":
        return "https://www.cardinalpeak.com/wp-content/uploads/2021/09/iot.jpeg";
      case "Electronics Lead":
        return "https://etedge-insights.com/wp-content/uploads/2024/08/electronic-1-1024x577.jpg";
      case "Researcher & Documentation":
        return "https://www.enago.com/academy/wp-content/uploads/2019/05/Top-10-Tips-to-Increase-Research-Productivity61-750x430.png";
      case "Creative Ideas & Innovation":
        return "https://enterprisewired.com/wp-content/uploads/2024/06/1.1-The-Importance-of-Innovation-and-Creativity.jpg";
      default:
        return "https://source.unsplash.com/featured/512x256/?technology";
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4 opacity-80">
        Our mission is to accelerate the world’s transition to sustainable energy
        by making solar smarter, more affordable, and more reliable.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-6">
          <h2 className="font-semibold">Mission</h2>
          <p className="mt-2 text-sm opacity-80">
            Empower every rooftop with actionable insights to maximize clean energy.
          </p>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-6">
          <h2 className="font-semibold">Vision</h2>
          <p className="mt-2 text-sm opacity-80">
            A future where solar performs at peak efficiency with minimal upkeep.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-semibold">Team</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => {
            const url = rolePhoto(member.role);
            return (
              <div key={member.name} className="border border-black/10 dark:border-white/10 rounded-lg p-4">
                <img
                  src={url}
                  alt={`${member.name} – ${member.role}`}
                  className="h-32 w-full object-cover rounded"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-3 font-medium">{member.name}</div>
                <div className="text-xs opacity-70">{member.role}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
