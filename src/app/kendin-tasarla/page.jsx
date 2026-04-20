import DesignTool from "@/components/sections/DesignTool";

export const metadata = {
  title: "Kendin Tasarla | MİMAR Mimarlık",
  description: "Hayalinizdeki mekanı kendiniz tasarlayın ve anında fiyat teklifi alın.",
};

export default function DesignPage() {
  return (
    <main className="pt-20"> {/* Navbar yüksekliği kadar padding */}
      <DesignTool />
    </main>
  );
}
