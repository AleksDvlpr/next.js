export async function GET(request) {
  return new Response(JSON.stringify({ result: true, method: 'GET' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  return new Response(JSON.stringify({ result: true, method: 'POST' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(request) {
  return new Response(JSON.stringify({ result: true, method: 'PUT' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PATCH(request) {
  return new Response(JSON.stringify({ result: true, method: 'PATCH' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request) {
  return new Response(JSON.stringify({ result: true, method: 'DELETE' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
