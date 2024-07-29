export async function GET(request) {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' },
  });
}
