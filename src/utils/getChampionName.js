import championIds from '../static/championIds.json';

export default function getChampionName(championId) {
    return championIds[championId];
}