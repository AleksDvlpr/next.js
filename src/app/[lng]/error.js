'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <div>{error.message}</div>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
