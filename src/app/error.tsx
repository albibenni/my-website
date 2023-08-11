'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>Error :O</h1>
      <p>Something went wrong</p>
      <p>{error.name}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
