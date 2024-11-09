import csrf from "csrf";

const tokens = new csrf();

export function csrfProtection(csrfToken: string) {
  if (!csrfToken || !tokens.verify(process.env.CSRF_SECRET!, csrfToken)) {
    throw new Error("Invalid CSRF token");
  }
}

export function generateCsrfToken() {
  return tokens.create(process.env.CSRF_SECRET!);
}
