export async function GET(request) {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com' },
    { id: 6, name: 'David Evans', email: 'david@example.com' },
    { id: 7, name: 'Eve Foster', email: 'eve@example.com' },
    { id: 8, name: 'Frank Green', email: 'frank@example.com' },
    { id: 9, name: 'Grace Harris', email: 'grace@example.com' },
    { id: 10, name: 'Hank Ingram', email: 'hank@example.com' },
  ];

  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' },
  });
}
