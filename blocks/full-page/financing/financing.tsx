"use client";

import { useState } from "react";
import { Anchor, Wrench, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface FinancingBlock {
	id: string;
	blockType: "financing";
	title: string;
	subtitle: string;
	boatFinancing: {
		title: string;
		description: string;
		features: Array<{ text: string }>;
	};
	serviceFinancing: {
		title: string;
		description: string;
		features: Array<{ text: string }>;
	};
	calculator: {
		title: string;
		defaultAmount: number;
		defaultRate: number;
		defaultTerm: number;
		phoneNumber: string;
	};
	faq: Array<{
		question: string;
		answer: string;
	}>;
	cta: {
		title: string;
		description: string;
		phoneNumber: string;
	};
}

export default function Financing(props: FinancingBlock) {
	const [loanAmount, setLoanAmount] = useState(props.calculator.defaultAmount);
	const [interestRate, setInterestRate] = useState(props.calculator.defaultRate);
	const [loanTerm, setLoanTerm] = useState(props.calculator.defaultTerm);

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
					<h1 className="text-3xl md:text-4xl font-bold mb-4">{props.title}</h1>
					<p className="text-lg md:text-xl text-muted-foreground">{props.subtitle}</p>
				</header>

				<div className="grid md:grid-cols-2 gap-6 mb-12">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center text-xl">
								<Anchor className="mr-2 h-5 w-5" />
								{props.boatFinancing.title}
							</CardTitle>
							<CardDescription>{props.boatFinancing.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="list-disc pl-5 space-y-2 text-sm">
								{props.boatFinancing.features.map((feature, index) => (
									<li key={index}>{feature.text}</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center text-xl">
								<Wrench className="mr-2 h-5 w-5" />
								{props.serviceFinancing.title}
							</CardTitle>
							<CardDescription>{props.serviceFinancing.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="list-disc pl-5 space-y-2 text-sm">
								{props.serviceFinancing.features.map((feature, index) => (
									<li key={index}>{feature.text}</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>

				<div className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">{props.calculator.title}</h2>
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
										<a href={`tel:${props.calculator.phoneNumber}`}>
											<PhoneCall className="mr-2 h-4 w-4" />
											Discuss Your Options: {props.calculator.phoneNumber}
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
						{props.faq.map((item, index) => (
							<AccordionItem key={index} value={`item-${index + 1}`}>
								<AccordionTrigger>{item.question}</AccordionTrigger>
								<AccordionContent>{item.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className="text-center bg-muted rounded-lg p-8">
					<h2 className="text-2xl font-semibold mb-4">{props.cta.title}</h2>
					<p className="mb-6">{props.cta.description}</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Button asChild size="lg">
							<a href={`tel:${props.cta.phoneNumber}`}>
								<PhoneCall className="mr-2 h-5 w-5" />
								Call Us: {props.cta.phoneNumber}
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
