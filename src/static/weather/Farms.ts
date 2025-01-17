import { AllowedWeathers } from "xivweather/lib/static/AllowedWeathers"

// Time: -1 no time, 0 day, 1 night
type EurekaFarm = {
  name: string
  farms: Farm[]
}

type Farm = {
  name: string
  weatherIcon: string
  info: FarmInfo
}

type FarmInfo = {
  weathers: AllowedWeathers[]
  time: number
}

export const listEurekaFarms: EurekaFarm[] = [
  {
    name: "Pagos",
    farms: [
      {
        name: "Thunder Cold Box",
        weatherIcon: "/weathericons/Thunder.png",
        info: {
          weathers: ["Thunder"],
          time: -1,
        },
      },
      {
        name: "Blizzards Cold Box",
        weatherIcon: "/weathericons/Blizzards.png",
        info: {
          weathers: ["Blizzards"],
          time: -1,
        },
      },
      {
        name: "Fair Skies Cold Box",
        weatherIcon: "/weathericons/Fair Skies.png",
        info: {
          weathers: ["Fair Skies"],
          time: -1,
        },
      },
    ],
  },
  {
    name: "Pyros",
    farms: [
      {
        name: "Heat Box",
        weatherIcon: "/weathericons/Umbral Wind.png",
        info: {
          weathers: ["Umbral Wind"],
          time: -1,
        },
      },
      {
        name: "Mitigative Logos Thunder",
        weatherIcon: "/weathericons/Thunder.png",
        info: {
          weathers: ["Thunder"],
          time: -1,
        },
      },
      {
        name: "Inimical Logos",
        weatherIcon: "/weathericons/Snow.png",
        info: {
          weathers: ["Snow", "Blizzards"],
          time: -1
        }
      }
    ],
  },
  {
    name: "Hydatos",
    farms: [
      {
        name: "Super Moist",
        weatherIcon: "/weathericons/Snow.png",
        info: {
          weathers: ["Snow"],
          time: 1,
        },
      },
      {
        name: "Offensive Logos",
        weatherIcon: "/weathericons/Snow.png",
        info: {
          weathers: ["Snow"],
          time: -1,
        },
      },
      {
        name: "Conceptual Logos",
        weatherIcon: "/weathericons/Showers.png",
        info: {
          weathers: ["Thunderstorms","Showers"],
          time: -1,
        },
      },
      {
        name: "Fundamental Logos",
        weatherIcon: "/weathericons/Gloom.png",
        info: {
          weathers: ["Gloom","Snow"],
          time: -1,
        },
      },
    ],
  },
  {
    name: "Bozjan Southern Front",
    farms: [
      {
        name: "Care",
        weatherIcon: "/weathericons/Dust Storms.png",
        info: {
          weathers: ["Dust Storms", "Wind"],
          time: -1,
        },
      },
    ],
  },
  {
    name: "Zadnor",
    farms: [
      {
        name: "Artistry",
        weatherIcon: "/weathericons/Showers.png",
        info: {
          weathers: ["Rain"],
          time: -1,
        },
      },
    ],
  },
];
