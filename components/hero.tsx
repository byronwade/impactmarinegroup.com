import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PhoneCall, ChevronRight } from "lucide-react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<HeroBackground />
			<div className="relative container mx-auto px-4 py-12 sm:py-24 lg:py-32">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
					<div className="lg:col-span-2 space-y-8">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
							Expert Boat Service <br className="hidden sm:inline" />
							"You Can Trust"
						</h1>
						<p className="text-xl sm:text-2xl text-white/90 max-w-2xl">Certified Technicians, Fast Turnaround, and Unmatched Care for Your Boat."</p>
						<div className="flex flex-wrap gap-4">
							<Button size="lg" className="bg-primary hover:bg-primary/90">
								<Calendar className="mr-2 h-5 w-5" /> Schedule Service
							</Button>
							<Button variant="outline" size="lg" className="bg-white text-primary border-primary hover:bg-white/90">
								View Our Services <ChevronRight className="ml-2 h-5 w-5" />
							</Button>
						</div>
						<div className="flex items-center text-white">
							<PhoneCall className="h-6 w-6 mr-2" />
							<span className="text-xl font-semibold">Call Now: (555) 123-4567</span>
						</div>
						<div>
							<Badge variant="secondary" className="text-lg px-3 py-1 bg-primary text-white">
								<svg className="h-5 w-5 mr-1 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<span className="font-bold">4.9 Star Rated</span>
							</Badge>
						</div>
					</div>
					{/* 
					<Card className="w-full max-w-sm bg-white border-none shadow-xl">
						<CardHeader className="pb-2">
							<CardTitle className="text-xl font-semibold text-foreground/90">Get in Touch</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1">
										<Label htmlFor="name" className="text-xs font-medium text-foreground/75">
											Name
										</Label>
										<Input id="name" placeholder="Your Name" required className="bg-background/40 backdrop-blur-sm h-8 text-sm" />
									</div>
									<div className="space-y-1">
										<Label htmlFor="phone" className="text-xs font-medium text-foreground/75">
											Phone
										</Label>
										<Input id="phone" type="tel" placeholder="(123) 456-7890" className="bg-background/40 backdrop-blur-sm h-8 text-sm" />
									</div>
								</div>
								<div className="space-y-1">
									<Label htmlFor="email" className="text-xs font-medium text-foreground/75">
										Email
									</Label>
									<Input id="email" type="email" placeholder="your@email.com" required className="bg-background/40 backdrop-blur-sm h-8 text-sm" />
								</div>
								<div className="space-y-1">
									<Label htmlFor="message" className="text-xs font-medium text-foreground/75">
										Message
									</Label>
									<Textarea id="message" placeholder="How can we help you?" required className="h-24 bg-background/40 backdrop-blur-sm resize-none text-sm" />
								</div>
								<Button type="submit" className="w-full bg-primary/90 hover:bg-primary/80 text-primary-foreground transition-colors text-sm py-1" disabled={isSubmitting}>
									{isSubmitting ? (
										<>
											<svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
												<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
											</svg>
											Sending...
										</>
									) : (
										<>
											<Send className="mr-2 h-4 w-4" /> Send Message
										</>
									)}
								</Button>
							</form>
						</CardContent>
					</Card> */}
				</div>
			</div>
		</section>
	);
}
