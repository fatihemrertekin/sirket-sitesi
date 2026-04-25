import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  // Check if session exists, but allow login page
  // We can't easily check current path in server layout without some tricks, 
  // but since login is a sibling route, we can just check session here.
  // Actually, a better way is to check the session in the layout and if not found redirect to login.
  // However, we need to avoid redirect loop for the login page itself.
  
  // Wait, I'll use a simpler approach: the subpages will handle auth or I'll use a middleware.
  // Let's use a middleware for /admin protection.
  
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {children}
    </div>
  );
}
