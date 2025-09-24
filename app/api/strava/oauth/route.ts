import { NextRequest, NextResponse } from "next/server";

// Change function parameter name from 'request' to '_request'
export async function GET(_request: NextRequest) {
  const params = new URLSearchParams({
    client_id: process.env.STRAVA_CLIENT_ID!,
    response_type: "code",
    redirect_uri: process.env.STRAVA_REDIRECT_URI!,
    approval_prompt: "auto",
    scope: "read,activity:read",
  });
  return NextResponse.redirect(`https://www.strava.com/oauth/authorize?${params}`);
}
