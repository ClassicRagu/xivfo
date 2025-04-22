import { ZONE_BOZJAN_SOUTHERN_FRONT, ZONE_EUREKA_HYDATOS, ZONE_EUREKA_PAGOS, ZONE_EUREKA_PYROS, ZONE_ZADNOR, ZONE_SINUS_ARDORUM } from "xivweather"

export const getZone = (zone: string) => {
  switch(zone) {
    case "Hydatos":
      return ZONE_EUREKA_HYDATOS
    case "Pagos":
      return ZONE_EUREKA_PAGOS
    case "Pyros":
      return ZONE_EUREKA_PYROS
    case "Bozjan Southern Front":
      return ZONE_BOZJAN_SOUTHERN_FRONT
    case "Zadnor":
      return ZONE_ZADNOR
    case "Sinus Ardorum":
      return ZONE_SINUS_ARDORUM
    default:
      return ZONE_EUREKA_HYDATOS
  }
}