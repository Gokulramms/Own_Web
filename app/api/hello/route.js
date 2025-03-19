export async function GET() {
    return new Response(JSON.stringify({ message: "Hello, World!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(request) {
    try {
        const data = await request.json();
        return new Response(JSON.stringify({ message: "Received", data }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
}

// Handle preflight OPTIONS request
export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: { "Allow": "GET, POST, OPTIONS" },
    });
}

// Handle unsupported methods
export async function PUT() {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
    });
}

export async function DELETE() {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
    });
}
