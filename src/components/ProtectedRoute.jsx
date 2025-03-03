import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();

  useEffect(() => {
    // If user is signed in but doesn't have a role, set a default role of "candidate"
    if (isLoaded && isSignedIn && user && !user.unsafeMetadata?.role) {
      user
        .update({
          unsafeMetadata: { role: "candidate" },
        })
        .catch((err) => {
          console.error("Error setting default role:", err);
        });
    }
  }, [isLoaded, isSignedIn, user]);

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }

  return children;
};

export default ProtectedRoute;
