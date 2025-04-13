import { redirect } from "next/navigation";
export const dynamic = 'force-static'

export async function GET(request: Request, { params }: { params: Promise<{ zone: string }> }) {
    const {zone} = await params
    return redirect(`/bozja/Farming/Farming_Windows/${zone}/unknown`)
}