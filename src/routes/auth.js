import { useState, useEffect } from "react";
import { supabase } from "../lib/api";
import Auth from "../components/auth/Auth";
import Home from "../components/auth/Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, [user]);

  return (
    <div className="min-w-full min-h-screen flex items-center justify-center bg-gray-200">
      {/* <div className="min-w-full min-h-screen bg-gray-300"> */}
      {!user ? <Auth /> : <Home user={user} />}
    </div>
  );
}

export default App;
