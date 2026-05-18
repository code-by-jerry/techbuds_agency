const STATIC_FORMS_ENDPOINT = "https://api.staticforms.xyz/submit";

type StaticFormPayload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  source: string;
};

export async function submitStaticForm(payload: StaticFormPayload) {
  const accessKey = process.env.NEXT_PUBLIC_STATICFORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("StaticForms access key is missing.");
  }

  const response = await fetch(STATIC_FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accessKey,
      name: payload.name,
      email: payload.email,
      phone: payload.phone || "Not provided",
      subject: payload.subject || `New lead from ${payload.source}`,
      message: payload.message,
      source: payload.source,
      replyTo: payload.email,
    }),
  });

  if (!response.ok) {
    throw new Error("StaticForms submission failed.");
  }
}
