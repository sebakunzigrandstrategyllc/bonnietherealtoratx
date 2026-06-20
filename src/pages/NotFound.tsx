import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Page Not Found | Bonnie The Realtor ATX';
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="flex-1 flex items-center justify-center bg-background py-24">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-foreground/80 mb-8">
          The page you're looking for isn't here.
        </p>
        <Button asChild size="lg">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
