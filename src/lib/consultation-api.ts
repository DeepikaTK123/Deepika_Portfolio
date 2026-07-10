const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getConsultationApiUrl(): string {
  const externalUrl = process.env.NEXT_PUBLIC_CONSULTATION_API_URL?.trim();

  if (externalUrl) {
    return externalUrl.replace(/\/$/, "");
  }

  return `${basePath}/api/consultation`;
}
