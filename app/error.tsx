"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center min-h-[400px]">
			<h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
			<button onClick={reset} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
				Try again
			</button>
		</div>
	);
}
