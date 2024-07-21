import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectRandomCampsite = () => {
    const randomIndex = Math.floor(Math.random() * CAMPSITES.length);
    console.log(CAMPSITES.find((campsite) => campsite.id === randomIndex));
    return CAMPSITES.find((campsite) => campsite.id === randomIndex);
}
