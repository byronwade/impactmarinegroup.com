"use client";

import { useState } from "react";
import { Anchor, Wrench, PhoneCall, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FinancingOptions() {
	const [loanAmount, setLoanAmount] = useState(50000);
	const [interestRate, setInterestRate] = useState(5);
	const [loanTerm, setLoanTerm] = useState(60);

	const calculateMonthlyPayment = () => {
		const r = interestRate / 100 / 12;
		const n = loanTerm;
		const p = loanAmount;
		const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
		return monthlyPayment.toFixed(2);
	};

	return (
		<main role="main" aria-label="Main content" className="flex-grow">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<header className="text-center mb-12">
					<h1 className="text-3xl md:text-4xl font-bold mb-4">Financing Options</h1>
					<p className="text-lg md:text-xl text-muted-foreground">Flexible financing solutions for your dream boat and expert service work</p>
				</header>

				<div className="grid md:grid-cols-2 gap-6 mb-12">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center text-xl">
								<Anchor className="mr-2 h-5 w-5" />
								Boat Financing
							</CardTitle>
							<CardDescription>Find the perfect loan for your new or used boat</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="list-disc pl-5 space-y-2 text-sm">
								<li>Competitive interest rates</li>
								<li>Flexible terms up to 20 years</li>
								<li>Financing available for boats up to $5 million</li>
								<li>Quick and easy application process</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center text-xl">
								<Wrench className="mr-2 h-5 w-5" />
								Service Financing
							</CardTitle>
							<CardDescription>Affordable options for repairs and maintenance</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="list-disc pl-5 space-y-2 text-sm">
								<li>0% interest for 12 months on services over $2,000</li>
								<li>Low monthly payments</li>
								<li>Cover unexpected repairs or planned upgrades</li>
								<li>Quick approval process</li>
							</ul>
						</CardContent>
					</Card>
				</div>

				<div className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">Loan Calculator</h2>
					<Card>
						<CardContent className="p-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-4">
									<div>
										<Label htmlFor="loanAmount">Loan Amount ($)</Label>
										<Input id="loanAmount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
									</div>
									<div>
										<Label htmlFor="interestRate">Interest Rate (%)</Label>
										<Input id="interestRate" type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
									</div>
									<div>
										<Label htmlFor="loanTerm">Loan Term (months)</Label>
										<Input id="loanTerm" type="number" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} />
									</div>
								</div>
								<div className="flex flex-col justify-between">
									<div className="bg-muted rounded-lg p-6 text-center mb-4">
										<p className="text-lg mb-2">Estimated Monthly Payment</p>
										<p className="text-4xl font-bold">${calculateMonthlyPayment()}</p>
									</div>
									<Button asChild className="w-full">
										<a href="tel:+17708817808">
											<PhoneCall className="mr-2 h-4 w-4" />
											Discuss Your Options: (770) 881-7808
										</a>
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger>What credit score do I need to qualify?</AccordionTrigger>
							<AccordionContent>While we consider various factors, a credit score of 640 or higher typically results in the best rates and terms. However, we offer options for a wide range of credit profiles.</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>How long does the approval process take?</AccordionTrigger>
							<AccordionContent>Our streamlined process often provides a decision within 24-48 hours of receiving a completed application.</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>Can I finance both new and used boats?</AccordionTrigger>
							<AccordionContent>Yes, we offer financing options for both new and used boats, as well as refinancing for your current boat.</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger>Is there a minimum or maximum loan amount?</AccordionTrigger>
							<AccordionContent>We offer financing from $5,000 up to $5 million, accommodating a wide range of boats and budgets.</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				<div className="text-center bg-muted rounded-lg p-8">
					<h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
					<p className="mb-6">Our financing experts are here to help you navigate your options and find the best solution for your needs.</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Button asChild size="lg">
							<a href="tel:+17708817808">
								<PhoneCall className="mr-2 h-5 w-5" />
								Call Us: (770) 881-7808
							</a>
						</Button>
						<Button variant="outline" asChild size="lg">
							<Link href="/contact">Contact Form</Link>
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
