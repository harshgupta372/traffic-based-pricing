import PricingCard from '@/components/pricing-card';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold mb-2 text-foreground">Simple, traffic-based pricing</h1>
      <p className="text-lg mb-8 text-muted-foreground">Sign-up for our 30-day trial. No credit card required.</p>
      <PricingCard />
    </main>
  );
}