"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

interface CalculatorConfig {
	phoneNumber: string;
}

export function FinancingCalculator({ config }: { config: CalculatorConfig }) {
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
								<a href={`tel:+1${config?.phoneNumber?.replace(/-/g, "")}`} className="inline-flex items-center justify-center">
									<PhoneCall className="mr-2 h-4 w-4" />
									Discuss Your Options: {config?.phoneNumber}
								</a>
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
