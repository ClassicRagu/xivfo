import { findWeatherWindows, ZONE_BOZJAN_SOUTHERN_FRONT } from "xivweather";

export async function GET() {
  const time = new Date();
  try{
  const nextDust = findWeatherWindows(time, new Date(time.getTime() + 8.64e+7), 1, ZONE_BOZJAN_SOUTHERN_FRONT, ["Dust Storms"])[0]
  const returnObj = {
    startTimeEST: nextDust.startTime.toLocaleString("en-US", {timeZone: 'EST'}),
    startTimePST: nextDust.startTime.toLocaleString("en-US", {timeZone: 'PST'}),
    minutesFromNow: Math.trunc((nextDust.startTime.getTime() - new Date().getTime())/1000/60),
    consecutiveWindows: nextDust.totalWindows,
    discordTimestamp: `<t:${nextDust.startTime.getTime()/1000}:F>`
  }
  return Response.json(returnObj)
  } catch {
    return Response.json({})
  }
}