import { redirect } from "next/navigation";
export const dynamic = 'force-static'

export async function GET() {
  return redirect("/bozja/Farming/Farming_Windows/Bozjan%20Southern%20Front/Care")
}