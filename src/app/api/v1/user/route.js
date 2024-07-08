import { authUserSession } from "@/libs/auth-libs";

export async function GET(request) {
  try {
    const user = await authUserSession();
    return new Response(JSON.stringify({ data: user }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to authenticate user session' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
