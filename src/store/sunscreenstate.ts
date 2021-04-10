import { AnnotatedColor } from '@/code/AnnotatedColor';

export default interface SunScreenState {
    lampTypes: AnnotatedColor[];
    selectedLampTypeId: string;
    skyTypes: AnnotatedColor[];
    selectedSkyTypeId: string;
    gradationInflectionPoint: number;
    gradationInflectionWidth: number;
}
